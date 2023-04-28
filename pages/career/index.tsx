import React from 'react';
import Head from 'next/head';

import Page from 'components/environment/Page';
import CareerVacancyBlock from 'components/sections/CareerVacancyBlock';
import CareerVacancyForm from 'components/sections/CareerVacancyForm';

import { MAIN_SEO, CAREER_VACANCY_BLOCK, CAREER_FORM_BLOCK } from 'constants/data';

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
        <CareerVacancyBlock
          title={CAREER_VACANCY_BLOCK.title}
          description={CAREER_VACANCY_BLOCK.description}
          items={CAREER_VACANCY_BLOCK.items}
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
