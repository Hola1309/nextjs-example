import React from 'react';
import Head from 'next/head';

import Page from 'components/environment/Page';
import MainBlockSlider from 'components/sections/MainBlockSlider';
import AboutCompanyBlock from 'components/sections/AboutCompanyBlock';
import AboutPotentialBlock from 'components/sections/AboutPotentialBlock';
import RequestProductsForm from 'components/sections/RequestProductsForm';
import ProectionProd from 'components/sections/ProectionProd';

import {
  MAIN_SEO,
  ABOUT_US_BLOCK_SLIDER,
  ABOUT_COMPANY_BLOCK,
  ABOUT_POTENTIAL_BLOCK,
  REQUEST_PRODUCTS_BLOCK,
  PRODUCTION_PROECT_BLOCK_SLIDER,
} from 'constants/data';

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
        <MainBlockSlider
          title={ABOUT_US_BLOCK_SLIDER.title}
          description={ABOUT_US_BLOCK_SLIDER.description}
          items={ABOUT_US_BLOCK_SLIDER.items}
          url={ABOUT_US_BLOCK_SLIDER.url}
          download
        />
        <AboutCompanyBlock
          title={ABOUT_COMPANY_BLOCK.title}
          description={ABOUT_COMPANY_BLOCK.description}
          descriptionSecond={ABOUT_COMPANY_BLOCK.descriptionSecond}
          items={ABOUT_COMPANY_BLOCK.items}
          links={ABOUT_COMPANY_BLOCK.links}
          sliderItems={ABOUT_COMPANY_BLOCK.sliderItems}
          image={ABOUT_COMPANY_BLOCK.image}
          image1={ABOUT_COMPANY_BLOCK.image1}
        />
        <ProectionProd
          title={PRODUCTION_PROECT_BLOCK_SLIDER.title}
          description={PRODUCTION_PROECT_BLOCK_SLIDER.description}
          items={PRODUCTION_PROECT_BLOCK_SLIDER.items}
          anchor={PRODUCTION_PROECT_BLOCK_SLIDER.anchor}
          arrowClassName={PRODUCTION_PROECT_BLOCK_SLIDER.arrowClassName}
        />
        <AboutPotentialBlock
          title={ABOUT_POTENTIAL_BLOCK.title}
          description={ABOUT_POTENTIAL_BLOCK.description}
          subtitle={ABOUT_POTENTIAL_BLOCK.subtitle}
          achievements={ABOUT_POTENTIAL_BLOCK.achievements}
        />
        <RequestProductsForm
          title={REQUEST_PRODUCTS_BLOCK.titleLong}
          titleDescription={REQUEST_PRODUCTS_BLOCK.titleDescription}
          button={REQUEST_PRODUCTS_BLOCK.button}
        />
      </Page>
    </div>
  );
}
