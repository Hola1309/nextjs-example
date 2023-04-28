import React from 'react';

import cn from 'classnames/bind';
import styles from './styles.module.scss';
const cx = cn.bind(styles);

interface ButtonProps {
  theme?: 'wBorder' | 'noBorder';
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  download?: string;
}

const Button: React.FC<ButtonProps> = ({
  theme = 'wBorder',
  onClick,
  className,
  children,
  download,
}) => {
  return !download ? (
    <button className={cx('Button', `Button_${theme}`, className)} onClick={onClick}>
      {children}
    </button>
  ) : (
    <a
      href={download}
      className={cx('Button', `Button_${theme}`, className)}
      onClick={onClick}
      download
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export default Button;
