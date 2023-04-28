import React from 'react';
import Head from 'next/head';

import Page from 'components/environment/Page';
import DetailedNewsItem from 'components/sections/DetailedNewsItem';
import MainNewsBlock from 'components/sections/MainNewsBlock';

import { MAIN_SEO, NEWS_BLOCK_ITEM, MAIN_NEWS_BLOCK } from 'constants/data';

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
        <DetailedNewsItem
          url={NEWS_BLOCK_ITEM.url}
          title={NEWS_BLOCK_ITEM.title}
          section={NEWS_BLOCK_ITEM.section}
          date={NEWS_BLOCK_ITEM.date}
          image={NEWS_BLOCK_ITEM.image}
          eventItems={NEWS_BLOCK_ITEM.eventItems}
          sliderItems={NEWS_BLOCK_ITEM.sliderItems}
          textItems={NEWS_BLOCK_ITEM.textItems}
        />
        <MainNewsBlock title={MAIN_NEWS_BLOCK.title} items={MAIN_NEWS_BLOCK.items} />
      </Page>
    </div>
  );
}
