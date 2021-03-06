import React from 'react';
import brandSpinner from './spinner-brand.gif';
import negativeSpinner from './spinner-negative.gif';
import actionSpinner from './spinner-action.gif';
import deprecated from 'deprecated-prop-type';

export type SpinnerStyling = 'primary' | 'secondary' | 'negative';

export interface SpinnerProps {
  /**
   * Size of the spinner
   * @default 'standard'
   */
  size?: 'standard' | 'small';
  /**
   * Determines the styling of the spinner
   * @default 'primary'
   */
  styling?: SpinnerStyling;
  /**
   * Adjusts colour to display on top of dark background
   * @default false
   */
  negative?: boolean;
}

const animationData: Record<SpinnerStyling, string> = {
  primary: brandSpinner,
  secondary: actionSpinner,
  negative: negativeSpinner,
};

const Spinner: React.FC<SpinnerProps> = (props) => {
  deprecated(props.negative, 'negative prop is deprecated, use styling="negative" instead');

  const spinner = props.negative ? negativeSpinner : animationData[props.styling || 'primary'];
  const size = props.size === 'small' ? '20px' : '40px';

  return <img src={spinner} height={size} width={size} aria-label="loading spinner" />;
};

export default Spinner;
