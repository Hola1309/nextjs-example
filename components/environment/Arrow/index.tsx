import React from 'react';

import ArrowRight from 'images/icons/arrow-right.svg';
import ArrowLeft from 'images/icons/arrow-left.svg';

import cn from 'classnames/bind';
import styles from './styles.module.scss';
const cx = cn.bind(styles);

interface ArrowProps {
  className?: string;
  onClick?: () => void;
  type?: 'left' | 'right';
  disabled?: boolean;
  white?: boolean;
  blue?: boolean;
}

const Arrow: React.FC<ArrowProps> = ({
  className,
  onClick,
  type = 'right',
  disabled = false,
  white = false,
  blue = false,
}) => {
  const Icon = type === 'left' ? ArrowLeft : ArrowRight;
  return (
    <button
      className={cx(
        'Arrow',
        `Arrow_${type}`,
        { Arrow_disabled: disabled },
        { Arrow_white: white },
        { Arrow_blue: blue },
        className,
      )}
      onClick={onClick}
    >
      <Icon />
    </button>
  );
};

export default Arrow;
