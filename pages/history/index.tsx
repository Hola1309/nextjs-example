import React from 'react';

import Page from 'components/environment/Page';
import AboutHistoryBlock from 'components/sections/AboutHistoryBlock';

import { ABOUT_HISTORY_BLOCK } from 'constants/data';

import cn from 'classnames/bind';
import styles from './styles.module.scss';
const cx = cn.bind(styles);

export default function Home() {
  return (
    <div className={styles.container}>
      <Page className={cx('MainPage')}>
        <AboutHistoryBlock title={ABOUT_HISTORY_BLOCK.title} items={ABOUT_HISTORY_BLOCK.items} />
      </Page>
    </div>
  );
}
