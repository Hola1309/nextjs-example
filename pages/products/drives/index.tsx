import React from 'react';
import Head from 'next/head';

import Page from 'components/environment/Page';

import AdvantagesProductsBlock from 'components/sections/AdvantagesProductsBlock';
import OptionsProductsBlock from 'components/sections/OptionsProductsBlock';
import RequestProductsBlock from 'components/sections/RequestProductsForm';
import ProductionCard from 'components/sections/ProductsCard';
import NomenclatureDisc from 'components/sections/NomenclatureDisc';
import DocsCard from 'components/sections/DocsCard';
import {
  MAIN_SEO,
  DETAILED_DRIVES,
  NOMENCLATURE_DISC_DRIVES,
  ADVANTAGES_PRODUCTS_BLOCK_DRIVES,
  OPTIONS_PRODUCTS_BLOCK_DRIVES,
  MAIN_PRODUCTS_BLOCK,
  REQUEST_PRODUCTS_BLOCK,
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
        <ProductionCard
          className={cx('MainProductsBlock__item')}
          productName={MAIN_PRODUCTS_BLOCK.items[3].productName}
          productUsage={MAIN_PRODUCTS_BLOCK.items[3].productUsage}
          productUsages={MAIN_PRODUCTS_BLOCK.items[3].productUsages}
          image={MAIN_PRODUCTS_BLOCK.items[3].image}
          classNameProduct={'MainProductsItem__imageWrap__product4'}
        />
        <NomenclatureDisc
          productTightness={NOMENCLATURE_DISC_DRIVES.discription[1].productTightness}
          productInfoTempOutside={NOMENCLATURE_DISC_DRIVES.discription[1].productInfoTempOutside}
          infoTempOutside={NOMENCLATURE_DISC_DRIVES.discription[1].infoTempOutside}
          productInfoTemp={NOMENCLATURE_DISC_DRIVES.discription[1].productInfoTemp}
          productInfoControl={NOMENCLATURE_DISC_DRIVES.discription[1].productInfoControl}
          infoControl={NOMENCLATURE_DISC_DRIVES.discription[1].infoControl}
          infoTempEnv={NOMENCLATURE_DISC_DRIVES.discription[1].infoTempEnv}
          productTightnesses={NOMENCLATURE_DISC_DRIVES.discription[1].productTightnesses}
        />
        <NomenclatureDisc
          productTightness={NOMENCLATURE_DISC_DRIVES.discription[0].productTightness}
          productInfoTempOutside={NOMENCLATURE_DISC_DRIVES.discription[0].productInfoTempOutside}
          infoTempOutside={NOMENCLATURE_DISC_DRIVES.discription[0].infoTempOutside}
          productInfoTemp={NOMENCLATURE_DISC_DRIVES.discription[0].productInfoTemp}
          productInfoControl={NOMENCLATURE_DISC_DRIVES.discription[0].productInfoControl}
          infoControl={NOMENCLATURE_DISC_DRIVES.discription[0].infoControl}
          infoTempEnv={NOMENCLATURE_DISC_DRIVES.discription[0].infoTempEnv}
          productTightnesses={NOMENCLATURE_DISC_DRIVES.discription[0].productTightnesses}
        />
        <OptionsProductsBlock
          title={OPTIONS_PRODUCTS_BLOCK_DRIVES.title}
          items={OPTIONS_PRODUCTS_BLOCK_DRIVES.items}
        />
        <AdvantagesProductsBlock
          title={ADVANTAGES_PRODUCTS_BLOCK_DRIVES.title}
          accordionItems={ADVANTAGES_PRODUCTS_BLOCK_DRIVES.accordionItems}
        />

        <DocsCard docsItems={DETAILED_DRIVES.docsItems} url={DETAILED_DRIVES.url} />
        <RequestProductsBlock
          title={REQUEST_PRODUCTS_BLOCK.title}
          titleDescription={''}
          button={[]}
        />
      </Page>
    </div>
  );
}
