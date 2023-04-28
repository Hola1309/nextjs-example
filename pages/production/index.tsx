import React from 'react';
import Head from 'next/head';

import Page from 'components/environment/Page';
import BannerBlock from 'components/sections/BannerBlock';
import RequestProductsForm from 'components/sections/RequestProductsForm';
import BaseBlock from 'components/sections/BaseBlock';
// import MechProd from 'components/sections/MechProd';
  // import ModernBlock from 'components/sections/ModernBlock';
  // import WeldBlock from 'components/sections/WeldBlock';
  // import GalvBlock from 'components/sections/GalvBlock';
  // import InnovBlock from 'components/sections/InnovBlock';
  // import ControlBlock from 'components/sections/ControlBlock';
import {
  MAIN_SEO,
  PRODUCTION_BANNER_BLOCK,
  PRODUCTION_BASE_BLOCK_SLIDER,
  // PRODUCTION_MECH_BLOCK_SLIDER,
  // PRODUCTION_MODERN_BLOCK_SLIDER,
  // PRODUCTION_WELD_BLOCK_SLIDER,
  // PRODUCTION_GALV_BLOCK_SLIDER,
  // PRODUCTION_INNOV_BLOCK_SLIDER,
  // PRODUCTION_CONTROL_BLOCK_SLIDER,
  REQUEST_PRODUCTION_BLOCK,
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
        <BannerBlock title={PRODUCTION_BANNER_BLOCK.title} image={PRODUCTION_BANNER_BLOCK.image} />
        <BaseBlock
          title={PRODUCTION_BASE_BLOCK_SLIDER.title}
          description={PRODUCTION_BASE_BLOCK_SLIDER.description}
          items={PRODUCTION_BASE_BLOCK_SLIDER.items}
          anchor={PRODUCTION_BASE_BLOCK_SLIDER.anchor}
          arrowClassName={PRODUCTION_BASE_BLOCK_SLIDER.arrowClassName}
        />

        {/* <MechProd
          title={PRODUCTION_MECH_BLOCK_SLIDER.title}
          description={PRODUCTION_MECH_BLOCK_SLIDER.description}
          items={PRODUCTION_MECH_BLOCK_SLIDER.items}
          anchor={PRODUCTION_MECH_BLOCK_SLIDER.anchor}
          arrowClassName={PRODUCTION_MECH_BLOCK_SLIDER.arrowClassName}
        /> */}
        {/* <ModernBlock
          title={PRODUCTION_MODERN_BLOCK_SLIDER.title}
          description={PRODUCTION_MODERN_BLOCK_SLIDER.description}
          items={PRODUCTION_MODERN_BLOCK_SLIDER.items}
          anchor={PRODUCTION_MODERN_BLOCK_SLIDER.anchor}
          arrowClassName={PRODUCTION_MODERN_BLOCK_SLIDER.arrowClassName}
        />
        <WeldBlock
          title={PRODUCTION_WELD_BLOCK_SLIDER.title}
          description={PRODUCTION_WELD_BLOCK_SLIDER.description}
          items={PRODUCTION_WELD_BLOCK_SLIDER.items}
          anchor={PRODUCTION_WELD_BLOCK_SLIDER.anchor}
          arrowClassName={PRODUCTION_WELD_BLOCK_SLIDER.arrowClassName}
        />
        <GalvBlock
          title={PRODUCTION_GALV_BLOCK_SLIDER.title}
          description={PRODUCTION_GALV_BLOCK_SLIDER.description}
          items={PRODUCTION_GALV_BLOCK_SLIDER.items}
          anchor={PRODUCTION_GALV_BLOCK_SLIDER.anchor}
          arrowClassName={PRODUCTION_GALV_BLOCK_SLIDER.arrowClassName}
        />
        <InnovBlock
          title={PRODUCTION_INNOV_BLOCK_SLIDER.title}
          description={PRODUCTION_INNOV_BLOCK_SLIDER.description}
          items={PRODUCTION_INNOV_BLOCK_SLIDER.items}
          anchor={PRODUCTION_INNOV_BLOCK_SLIDER.anchor}
          arrowClassName={PRODUCTION_INNOV_BLOCK_SLIDER.arrowClassName}
        />
        <ControlBlock
          title={PRODUCTION_CONTROL_BLOCK_SLIDER.title}
          description={PRODUCTION_CONTROL_BLOCK_SLIDER.description}
          items={PRODUCTION_CONTROL_BLOCK_SLIDER.items}
          anchor={PRODUCTION_CONTROL_BLOCK_SLIDER.anchor}
          arrowClassName={PRODUCTION_CONTROL_BLOCK_SLIDER.arrowClassName}
        /> */}
        <RequestProductsForm
          title={REQUEST_PRODUCTION_BLOCK.title}
          titleDescription={''}
          button={[]}
        />
      </Page>
    </div>
  );
}
