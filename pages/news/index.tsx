import React from 'react';
import Head from 'next/head';

import Page from 'components/environment/Page';
import NewsBlock from 'components/sections/NewsBlock';

import { MAIN_SEO, NEWS_BLOCK } from 'constants/data';

import cn from 'classnames/bind';
import styles from './styles.module.scss';
const cx = cn.bind(styles);

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{MAIN_SEO.title}</title>
      </Head>

      <Page className={cx('MainPage')}>
        <NewsBlock title={NEWS_BLOCK.title} items={NEWS_BLOCK.items} />
      </Page>
    </div>
  );
}
