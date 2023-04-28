import React from 'react';

import cn from 'classnames/bind';
import styles from './styles.module.scss';
const cx = cn.bind(styles);

interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return <div className={cx('Container', className)}>{children}</div>;
};

export default Container;
