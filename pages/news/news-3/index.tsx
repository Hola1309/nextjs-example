import React from 'react';
import Head from 'next/head';

import Page from 'components/environment/Page';
import DetailedNewsItem3 from 'components/sections/DetailedNewsItem3';
import MainNewsBlock from 'components/sections/MainNewsBlock';

import { MAIN_SEO, NEWS_BLOCK_ITEM3, MAIN_NEWS_BLOCK } from 'constants/data';

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
        <DetailedNewsItem3
          url={NEWS_BLOCK_ITEM3.url}
          title={NEWS_BLOCK_ITEM3.title}
          section={NEWS_BLOCK_ITEM3.section}
          date={NEWS_BLOCK_ITEM3.date}
          image={NEWS_BLOCK_ITEM3.image}
          eventItems={NEWS_BLOCK_ITEM3.eventItems}
          sliderItems={NEWS_BLOCK_ITEM3.sliderItems}
          textItems={NEWS_BLOCK_ITEM3.textItems}
        />
        <MainNewsBlock title={MAIN_NEWS_BLOCK.title} items={MAIN_NEWS_BLOCK.items} />
      </Page>
    </div>
  );
}
