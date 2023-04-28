import React from 'react';
import Head from 'next/head';

import Page from 'components/environment/Page';
import MainBannerSlider from 'components/sections/MainBannerSlider';
import MainInfoBlock from 'components/sections/MainInfoBlock';
import MainAboutBlock from 'components/sections/MainAboutBlock';
import MainServicesBlock from 'components/sections/MainServicesBlock';
import GeographyTable from 'components/sections/GeographyTable';

import {
  MAIN_SEO,
  MAIN_BANNER_SLIDER,
  MAIN_INFO_BLOCK,
  MAIN_ABOUT_BLOCK,
  MAIN_SERVICES_BLOCK,
  GEOGRAPY_COLUMN,
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
        <MainBannerSlider
          title={MAIN_BANNER_SLIDER.title}
          description={MAIN_BANNER_SLIDER.description}
          items={MAIN_BANNER_SLIDER.items}
        />
        <MainInfoBlock
          title={MAIN_INFO_BLOCK.title}
          quote={MAIN_INFO_BLOCK.quote}
          subtitle={MAIN_INFO_BLOCK.subtitle}
          image={MAIN_INFO_BLOCK.image}
        />
        <MainServicesBlock title={MAIN_SERVICES_BLOCK.title} items={MAIN_SERVICES_BLOCK.items} />
        <GeographyTable description={GEOGRAPY_COLUMN.description} items={GEOGRAPY_COLUMN.items} />
        <MainAboutBlock
          title={MAIN_ABOUT_BLOCK.title}
          items={MAIN_ABOUT_BLOCK.items}
          achievements={MAIN_ABOUT_BLOCK.achievements}
          policy={MAIN_ABOUT_BLOCK.policy}
          policyTitle={MAIN_ABOUT_BLOCK.policyTitle}
        />
      </Page>
    </div>
  );
}
