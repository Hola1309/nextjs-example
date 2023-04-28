import React from 'react';
import Head from 'next/head';

import Page from 'components/environment/Page';
import DetailedCareerItem from 'components/sections/DetailedCareerItem';
import CareerVacancyForm from 'components/sections/CareerVacancyForm';

import { MAIN_SEO, DETAILED_CAREER_1, CAREER_FORM_BLOCK } from 'constants/data';

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
        <DetailedCareerItem
          url={DETAILED_CAREER_1.url}
          date={DETAILED_CAREER_1.date}
          title={DETAILED_CAREER_1.title}
          address={DETAILED_CAREER_1.address}
          salary={DETAILED_CAREER_1.salary}
          items={DETAILED_CAREER_1.items}
        />
        <CareerVacancyForm
          title={CAREER_FORM_BLOCK.title}
          description={CAREER_FORM_BLOCK.description}
          email={CAREER_FORM_BLOCK.email}
          phone={CAREER_FORM_BLOCK.phone}
          formTitle={CAREER_FORM_BLOCK.formTitle}
        />
      </Page>
    </div>
  );
}
