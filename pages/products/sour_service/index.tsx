import React from 'react';
import Head from 'next/head';

import Page from 'components/environment/Page';

import NomenclatureProductsBlock from 'components/sections/NomenclatureProductsBlock';
import AdvantagesProductsBlock from 'components/sections/AdvantagesProductsBlock';
import OptionsProductsBlock from 'components/sections/OptionsProductsBlock';
import RequestProductsBlock from 'components/sections/RequestProductsForm';
import NomenclatureDisc from 'components/sections/NomenclatureDisc';
import ProductionCard from 'components/sections/ProductsCard';
import DocsCard from 'components/sections/DocsCard';
import {
  MAIN_SEO,
  NOMENCLATURE_WELDED_VALVES,
  ADVANTAGES_PRODUCTS_BLOCK,
  NOMENCLATURE_DISC_SOUR_SERVICE,
  DETAILED_SOUR_SERVICE,
  OPTIONS_PRODUCTS_BLOCK,
  REQUEST_PRODUCTS_BLOCK,
  MAIN_PRODUCTS_BLOCK,
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
          productName={MAIN_PRODUCTS_BLOCK.items[1].productName}
          productUsage={MAIN_PRODUCTS_BLOCK.items[1].productUsage}
          productUsages={MAIN_PRODUCTS_BLOCK.items[1].productUsages}
          image={MAIN_PRODUCTS_BLOCK.items[1].image}
          classNameProduct={'MainProductsItem__imageWrap__product2'}
        />
        <NomenclatureProductsBlock
          title={NOMENCLATURE_WELDED_VALVES.title}
          items={NOMENCLATURE_WELDED_VALVES.items}
        />
        <NomenclatureDisc
          productTightness={NOMENCLATURE_DISC_SOUR_SERVICE.discription[0].productTightness}
          productTightnesses={NOMENCLATURE_DISC_SOUR_SERVICE.discription[0].productTightnesses}
          productInfoTempOutside={
            NOMENCLATURE_DISC_SOUR_SERVICE.discription[0].productInfoTempOutside
          }
          infoTempOutside={NOMENCLATURE_DISC_SOUR_SERVICE.discription[0].infoTempOutside}
          productInfoTemp={NOMENCLATURE_DISC_SOUR_SERVICE.discription[0].productInfoTemp}
          productInfoControl={NOMENCLATURE_DISC_SOUR_SERVICE.discription[0].productInfoControl}
          infoControl={NOMENCLATURE_DISC_SOUR_SERVICE.discription[0].infoControl}
          infoTempEnv={NOMENCLATURE_DISC_SOUR_SERVICE.discription[0].infoTempEnv}
        />
        <NomenclatureDisc
          productTightness={NOMENCLATURE_DISC_SOUR_SERVICE.discription[1].productTightness}
          productTightnesses={NOMENCLATURE_DISC_SOUR_SERVICE.discription[1].productTightnesses}
          productInfoTempOutside={
            NOMENCLATURE_DISC_SOUR_SERVICE.discription[1].productInfoTempOutside
          }
          infoTempOutside={NOMENCLATURE_DISC_SOUR_SERVICE.discription[1].infoTempOutside}
          productInfoTemp={NOMENCLATURE_DISC_SOUR_SERVICE.discription[1].productInfoTemp}
          productInfoControl={NOMENCLATURE_DISC_SOUR_SERVICE.discription[1].productInfoControl}
          infoControl={NOMENCLATURE_DISC_SOUR_SERVICE.discription[1].infoControl}
          infoTempEnv={NOMENCLATURE_DISC_SOUR_SERVICE.discription[1].infoTempEnv}
        />
        <OptionsProductsBlock
          title={OPTIONS_PRODUCTS_BLOCK.title}
          items={OPTIONS_PRODUCTS_BLOCK.items}
        />
        <AdvantagesProductsBlock
          title={ADVANTAGES_PRODUCTS_BLOCK.title}
          accordionItems={ADVANTAGES_PRODUCTS_BLOCK.accordionItems}
        />
        <DocsCard docsItems={DETAILED_SOUR_SERVICE.docsItems} url={DETAILED_SOUR_SERVICE.url} />
        <RequestProductsBlock
          title={REQUEST_PRODUCTS_BLOCK.title}
          titleDescription={''}
          button={[]}
        />
      </Page>
    </div>
  );
}
