import React from 'react';
import Head from 'next/head';

import Page from 'components/environment/Page';
import DetailedNewsItem2 from 'components/sections/DetailedNewsItem2';
import MainNewsBlock from 'components/sections/MainNewsBlock';

import { MAIN_SEO, NEWS_BLOCK_ITEM2, MAIN_NEWS_BLOCK } from 'constants/data';

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
        <DetailedNewsItem2
          url={NEWS_BLOCK_ITEM2.url}
          title={NEWS_BLOCK_ITEM2.title}
          section={NEWS_BLOCK_ITEM2.section}
          date={NEWS_BLOCK_ITEM2.date}
          image={NEWS_BLOCK_ITEM2.image}
          eventItems={NEWS_BLOCK_ITEM2.eventItems}
          sliderItems={NEWS_BLOCK_ITEM2.sliderItems}
          textItems={NEWS_BLOCK_ITEM2.textItems}
        />
        <MainNewsBlock title={MAIN_NEWS_BLOCK.title} items={MAIN_NEWS_BLOCK.items} />
      </Page>
    </div>
  );
}
