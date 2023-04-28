import React from 'react';
import Head from 'next/head';

import Page from 'components/environment/Page';
import BannerBlock from 'components/sections/BannerBlock';
import MainProductsBlock from 'components/sections/MainProductsBlock';

import { MAIN_SEO, PRODUCTS_BANNER_BLOCK, MAIN_PRODUCTS_BLOCK } from 'constants/data';

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
        <BannerBlock title={PRODUCTS_BANNER_BLOCK.title} image={PRODUCTS_BANNER_BLOCK.image} />
        <MainProductsBlock
          title={MAIN_PRODUCTS_BLOCK.title}
          items={MAIN_PRODUCTS_BLOCK.items}
          disabledTitle
        />
      </Page>
    </div>
  );
}
