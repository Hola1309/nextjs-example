import React, { useCallback } from 'react';

import Button from '../../environment/Button/index';

import cn from 'classnames/bind';
import styles from './styles.module.scss';
const cx = cn.bind(styles);

interface TabTitleProps {
  className?: string;
  title: string | string[];
  index: number;
  setSelectedTab: (index: number) => void;
}

const Tab: React.FC<TabTitleProps> = ({ className, title, setSelectedTab, index }) => {
  const onClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);
  return (
    <Button theme="noBorder" className={cx('TabTitle', className)} onClick={onClick}>
      {title}
    </Button>
  );
};

export default Tab;
