import React from 'react';
import Head from 'next/head';

import Page from 'components/environment/Page';

import NomenclatureProductsBlock from 'components/sections/NomenclatureProductsBlock';
import AdvantagesProductsBlock from 'components/sections/AdvantagesProductsBlock';
import DocsCard from 'components/sections/DocsCard';
import ProductionCard from 'components/sections/ProductsCard';
import RequestProductsBlock from 'components/sections/RequestProductsForm';
import NomenclatureDisc from 'components/sections/NomenclatureDisc';

import {
  MAIN_SEO,
  NOMENCLATURE_BALL_VALVES,
  NOMENCLATURE_DISC_BALL_VALVES,
  ADVANTAGES_PRODUCTS_BLOCK_BALL_VALVES,
  MAIN_PRODUCTS_BLOCK,
  DETAILED_BALL_VALVES,
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
          productName={MAIN_PRODUCTS_BLOCK.items[2].productName}
          productUsage={MAIN_PRODUCTS_BLOCK.items[2].productUsage}
          productUsages={MAIN_PRODUCTS_BLOCK.items[2].productUsages}
          image={MAIN_PRODUCTS_BLOCK.items[2].image}
          classNameProduct={'MainProductsItem__imageWrap__product3'}
        />
        <NomenclatureProductsBlock
          title={NOMENCLATURE_BALL_VALVES.title}
          items={NOMENCLATURE_BALL_VALVES.items}
        />
        <NomenclatureDisc
          productTightness={NOMENCLATURE_DISC_BALL_VALVES.discription[0].productTightness}
          productTightnesses={NOMENCLATURE_DISC_BALL_VALVES.discription[0].productTightnesses}
          productInfoTempOutside={
            NOMENCLATURE_DISC_BALL_VALVES.discription[0].productInfoTempOutside
          }
          infoTempOutside={NOMENCLATURE_DISC_BALL_VALVES.discription[0].infoTempOutside}
          productInfoControl={NOMENCLATURE_DISC_BALL_VALVES.discription[0].productInfoControl}
          infoControl={NOMENCLATURE_DISC_BALL_VALVES.discription[0].infoControl}
          infoTempEnv={NOMENCLATURE_DISC_BALL_VALVES.discription[0].infoTempEnv}
          productInfoTemp={NOMENCLATURE_DISC_BALL_VALVES.discription[0].productInfoTemp}
        />

        <NomenclatureDisc
          productTightness={NOMENCLATURE_DISC_BALL_VALVES.discription[1].productTightness}
          productTightnesses={NOMENCLATURE_DISC_BALL_VALVES.discription[1].productTightnesses}
          productInfoTempOutside={
            NOMENCLATURE_DISC_BALL_VALVES.discription[1].productInfoTempOutside
          }
          infoTempOutside={NOMENCLATURE_DISC_BALL_VALVES.discription[1].infoTempOutside}
          productInfoControl={NOMENCLATURE_DISC_BALL_VALVES.discription[1].productInfoControl}
          infoControl={NOMENCLATURE_DISC_BALL_VALVES.discription[1].infoControl}
          infoTempEnv={NOMENCLATURE_DISC_BALL_VALVES.discription[1].infoTempEnv}
          productInfoTemp={NOMENCLATURE_DISC_BALL_VALVES.discription[1].productInfoTemp}
        />
        <AdvantagesProductsBlock
          title={ADVANTAGES_PRODUCTS_BLOCK_BALL_VALVES.title}
          accordionItems={ADVANTAGES_PRODUCTS_BLOCK_BALL_VALVES.accordionItems}
        />
        <DocsCard docsItems={DETAILED_BALL_VALVES.docsItems} url={DETAILED_BALL_VALVES.url} />
        <RequestProductsBlock
          title={REQUEST_PRODUCTS_BLOCK.title}
          titleDescription={''}
          button={[]}
        />
      </Page>
    </div>
  );
}
