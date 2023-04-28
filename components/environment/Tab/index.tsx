import React from 'react';

import cn from 'classnames/bind';
import styles from './styles.module.scss';
const cx = cn.bind(styles);

interface TabProps {
  className?: string;
  children?: React.ReactNode;
  title: string | string[];
}

const Tab: React.FC<TabProps> = ({ className, children }) => {
  return <div className={cx('Tab', className)}>{children}</div>;
};

export default Tab;
