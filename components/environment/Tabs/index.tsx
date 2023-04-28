import React, { ReactElement, useState } from 'react';

import TabTitle from 'components/environment/TabTitle';

import cn from 'classnames/bind';
import styles from './styles.module.scss';
const cx = cn.bind(styles);

interface TabsProps {
  className?: string;
  children: ReactElement[];
}

const Tabs: React.FC<TabsProps> = ({ className, children }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className={cx('Tabs', className)}>
      <div className={cx('Tabs__wrapper')}>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
            className={cx(selectedTab == index ? 'TabTitle_active' : 'TabTitle_inactive')}
          />
        ))}
      </div>

      {children[selectedTab]}
    </div>
  );
};

export default Tabs;
