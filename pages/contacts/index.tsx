import React from 'react';
import Head from 'next/head';

import Page from 'components/environment/Page';
import ContactsBlock from 'components/sections/ContactsBlock';

import { MAIN_SEO, CONTACTS_BLOCK } from 'constants/data';

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
        <ContactsBlock title={CONTACTS_BLOCK.title} address={CONTACTS_BLOCK.address} />
      </Page>
    </div>
  );
}
