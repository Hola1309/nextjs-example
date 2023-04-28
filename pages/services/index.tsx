import React from 'react';
import Head from 'next/head';

import Page from 'components/environment/Page';
import BannerBlock from 'components/sections/BannerBlock';
import ServicesBlock from 'components/sections/ServicesBlock';

import { MAIN_SEO, SERVICES_BANNER_BLOCK, SERVICES_PRODUCTS_BLOCK } from 'constants/data';

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
        <BannerBlock title={SERVICES_BANNER_BLOCK.title} image={SERVICES_BANNER_BLOCK.image} />
        <ServicesBlock
          title={SERVICES_PRODUCTS_BLOCK.title}
          items={SERVICES_PRODUCTS_BLOCK.items}
        />
      </Page>
    </div>
  );
}
