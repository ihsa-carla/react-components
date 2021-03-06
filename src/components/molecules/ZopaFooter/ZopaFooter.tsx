import React, { HTMLAttributes, FC } from 'react';
import styled, { css } from 'styled-components';
import FlexContainer from '../../layout/FlexContainer/FlexContainer';
import FlexRow from '../../layout/FlexRow/FlexRow';
import FlexCol from '../../layout/FlexCol/FlexCol';
import Text from '../../atoms/Text/Text';
import { Footer, Heading, LegalBlock, List, LogoBlock, SocialBlock, SocialLink } from './styles';
import { colors } from '../../../constants';
import facebook from '../../../content/images/social/facebook.svg';
import twitter from '../../../content/images/social/twitter.svg';
import instagram from '../../../content/images/social/instagram.svg';
import linkedin from '../../../content/images/social/linkedin.svg';
import Logo from '../../atoms/Logo/Logo';
import { typography } from '../../../constants';
import Link from '../../atoms/Link/Link';

export const footerLinkStyle = css`
  font-weight: ${typography.weights.regular};
  text-decoration: none;

  &:hover,
  &:active {
    text-decoration: underline;
  }
`;

const StyledLink = styled(Link)`
  ${footerLinkStyle}
`;

export interface FooterProps extends HTMLAttributes<HTMLDivElement> {
  baseUrl?: string;
  renderLink?: FC<Record<'href', string> & HTMLAttributes<HTMLAnchorElement>>;
}

const ZopaFooter = ({
  baseUrl = 'https://www.zopa.com',
  renderLink = (props) => <StyledLink {...props} />,
  ...rest
}: FooterProps) => (
  <Footer {...rest}>
    <FlexContainer gutter={16}>
      <FlexRow className="mb-6">
        <FlexCol xs={12} s={6} l={3} className="mb-8 s:mb-9">
          <Heading className="mb-4 s:mb-6">What we do</Heading>
          <List>
            <li className="mb-4">{renderLink({ href: `${baseUrl}/loans/car-loans`, children: 'Car loans' })}</li>
            <li className="mb-4">
              {renderLink({ href: `${baseUrl}/loans/debt-consolidation`, children: 'Debt consolidation loans' })}
            </li>
            <li className="mb-4">
              {renderLink({ href: `${baseUrl}/loans/home-improvement`, children: 'Home improvement loans' })}
            </li>
            <li className="mb-4">{renderLink({ href: `${baseUrl}/loans/wedding`, children: 'Wedding loans' })}</li>
            <li className="mb-4">{renderLink({ href: `${baseUrl}/invest`, children: 'Peer-to-peer investments' })}</li>
            <li className="mb-4">
              {renderLink({ href: `${baseUrl}/invest/isa`, children: 'Innovative Finance ISA' })}
            </li>
            <li className="mb-4">{renderLink({ href: `${baseUrl}/credit-card`, children: 'Credit cards' })}</li>
            <li>{renderLink({ href: `${baseUrl}/savings-accounts`, children: 'Fixed Term Savings' })}</li>
          </List>
        </FlexCol>
        <FlexCol xs={12} s={6} l={3} className="mb-8 s:mb-9">
          <Heading className="mb-4 s:mb-6">About Zopa</Heading>
          <List>
            <li className="mb-4">{renderLink({ href: `${baseUrl}/about`, children: 'About Us' })}</li>
            <li className="mb-4">{renderLink({ href: `${baseUrl}/about/our-story`, children: 'Our story' })}</li>
            <li className="mb-4">{renderLink({ href: `${baseUrl}/about/board`, children: 'Meet the board' })}</li>
            <li className="mb-4">
              {renderLink({ href: `${baseUrl}/about/leadership`, children: 'Meet the leadership team' })}
            </li>
            <li className="mb-4">{renderLink({ href: `${baseUrl}/about/awards`, children: 'Awards' })}</li>
            <li className="mb-4">{renderLink({ href: `${baseUrl}/about/careers`, children: 'Careers' })}</li>
            <li className="mb-4">{renderLink({ href: 'https://blog.zopa.com', children: 'Blog' })}</li>
            <li>{renderLink({ href: `${baseUrl}/feelgood`, children: 'New products' })}</li>
          </List>
        </FlexCol>
        <FlexCol xs={12} s={6} l={3} className="mb-8 s:mb-9">
          <Heading className="mb-4 s:mb-6">Legal</Heading>
          <List>
            <li className="mb-4">{renderLink({ href: `${baseUrl}/privacy-notice`, children: 'Privacy notice' })}</li>
            <li className="mb-4">{renderLink({ href: `${baseUrl}/cookie-policy`, children: 'Cookie policy' })}</li>
            <li className="mb-4">
              {renderLink({ href: `${baseUrl}/conflicts-policy`, children: 'Conflicts policy' })}
            </li>
            <li className="mb-4">{renderLink({ href: `${baseUrl}/modern-slavery`, children: 'Modern slavery' })}</li>
            <li className="mb-4">{renderLink({ href: `${baseUrl}/terms-of-use`, children: 'Terms of use' })}</li>
            <li>{renderLink({ href: `${baseUrl}/investor-principles`, children: 'Investor principles' })}</li>
          </List>
        </FlexCol>
        <FlexCol xs={12} s={6} l={3} className="mb-8 s:mb-9">
          <Heading className="mb-4 s:mb-6">Navigation</Heading>
          <List>
            <li className="mb-4">{renderLink({ href: `${baseUrl}/help`, children: 'Help' })}</li>
            <li>{renderLink({ href: `${baseUrl}/sitemap`, children: 'Sitemap' })}</li>
          </List>
        </FlexCol>
      </FlexRow>
      <FlexRow>
        <LogoBlock>
          {renderLink({ href: baseUrl, title: 'Logo', children: <Logo width="165px" height="30px" /> })}
        </LogoBlock>
        <SocialBlock>
          <SocialLink href="https://facebook.com/zopa" title="Facebook" variant={facebook} />
          <SocialLink href="https://twitter.com/zopa" title="Twitter" variant={twitter} />
          <SocialLink href="https://www.instagram.com/Zopamoney/" title="Instagram" variant={instagram} />
          <SocialLink href="https://www.linkedin.com/company/zopa/" title="Linkedin" variant={linkedin} />
        </SocialBlock>
        <LegalBlock>
          <Text as="p" color={colors.greyDark} size="small" className="mb-4">
            Zopa Limited is authorised and regulated by the Financial Conduct Authority, and entered on the Financial
            Services Register (718925). Zopa Bank Limited is authorised by the Prudential Regulation Authority and
            regulated by the Financial Conduct Authority and the Prudential Regulation Authority, and entered on the
            Financial Services Register (800542). Zopa Limited (05197592) and Zopa Bank Limited (10627575) are both
            incorporated in England & Wales and have their registered office at: 1st Floor, Cottons Centre, Tooley
            Street, London, SE1 2QG.
          </Text>
          <Text as="p" color={colors.greyDark} size="small" className="mb-4">
            © Zopa Bank Limited {new Date().getFullYear()} All rights reserved. 'Zopa' is a trademark of Zopa Bank
            Limited.
          </Text>
          <Text as="p" color={colors.greyDark} size="small">
            Zopa is a member of Cifas – the UK’s leading anti-fraud association, and we are registered with the Office
            of the Information Commissioner (ZA275984, Z8797078).
          </Text>
        </LegalBlock>
      </FlexRow>
    </FlexContainer>
  </Footer>
);

export default ZopaFooter;
