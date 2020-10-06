import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { Text } from '../../../..';
import Icon from '../../../atoms/Icon/Icon';
import Link from '../../../atoms/Link/Link';
import { minMedia } from '../../../../helpers/responsiveness';
import { colors } from '../../../../constants/colors';

interface ProductTemplateNavigationProps {
  prevStep: string | ReactNode;
}

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  ${minMedia.desktop`
    ${css`
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    `}
  `}
`;

const BackText = styled(Text).attrs({ color: colors.greyDark })`
  line-height: 0;
`;

export function ProductTemplateNavigation({ prevStep }: ProductTemplateNavigationProps) {
  return (
    <Wrapper className="my-4 l:mt-0" data-automation="ZA.ProductTemplateNavigation">
      {typeof prevStep === 'string' ? (
        <StyledLink href={prevStep} aria-label="Back">
          <Icon variant={faChevronLeft} color={colors.greyDark} size="xs" className="mr-2" />
          <BackText>Back</BackText>
        </StyledLink>
      ) : (
        prevStep
      )}
    </Wrapper>
  );
}
