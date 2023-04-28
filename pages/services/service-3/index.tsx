import React from 'react';
import Head from 'next/head';

import Page from 'components/environment/Page';
import DetailedServicesItem from 'components/sections/DetailedServicesItem';
import RequestProductsForm from 'components/sections/RequestProductsForm';

import { MAIN_SEO, REQUEST_PRODUCTS_BLOCK, DETAILED_SERVICES_3 } from 'constants/data';

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
        <DetailedServicesItem
          items={DETAILED_SERVICES_3.items}
          url={DETAILED_SERVICES_3.url}
          title={DETAILED_SERVICES_3.title}
          serviceId={DETAILED_SERVICES_3.serviceId}
          descriptionItems={DETAILED_SERVICES_3.descriptionItems}
        />
        <RequestProductsForm
          title={REQUEST_PRODUCTS_BLOCK.title}
          titleDescription={''}
          button={[]}
        />
      </Page>
    </div>
  );
}
