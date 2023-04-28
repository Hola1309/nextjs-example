import React from 'react';

import HTMLParse from 'react-html-parser';

import Container from 'components/environment/Container';
import Heading from 'components/environment/Heading';
import Arrow from 'components/environment/Arrow';

import cn from 'classnames/bind';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

type DetailedProductsItemStructures = {
  structure: string[] | string;
  id: number | string;
};

type DetailedProductsItemConstructions = {
  construction: string[] | string;
  id: number | string;
};

type DetailedProductsItemSeals = {
  seal: string[] | string;
  id: number | string;
};

type DetailedProductsItemCoverages = {
  coverage: string[] | string;
  id: number | string;
};

type DetailedDocsItems = {
  id: number | string;
  docsTitle: string;
  docsSize: string;
};

interface DetailedProductsItemProps {
  url: string;
  title: string;
  image: string;
  productId: string;
  productStructure?: string;
  productStructures: Array<DetailedProductsItemStructures>;
  productUsage: string;
  productUsages: string;
  productConstruction: string;
  productConstructions: Array<DetailedProductsItemConstructions>;
  productSeal: string;
  productSeals: Array<DetailedProductsItemSeals>;
  productCoverage: string;
  productCoverages: Array<DetailedProductsItemCoverages>;
  docsItems: Array<DetailedDocsItems>;
}

const DetailedProductsItem: React.FC<DetailedProductsItemProps> = ({
  url,
  title,
  productStructure,
  productStructures,
  productUsage,
  productUsages,
  productConstruction,
  productConstructions,
  productSeal,
  productSeals,
  productCoverage,
  productCoverages,
}) => {
  return (
    <div className={cx('DetailedProductsItem')}>
      <Container className={cx('DetailedProductsItem__container')}>
        <a href={url} className={cx('DetailedProductsItem__arrowWrap')}>
          <Arrow
            className={cx('DetailedProductsItem__arrow', 'DetailedProductsItem__arrow_prev')}
            type="left"
          />
          <div className={cx('DetailedProductsItem__breadcrumbText')}>Вся продукция</div>
        </a>

        <div className={cx('DetailedProductsItem__titleWrap')}>
          <Heading className={cx('DetailedProductsItem__title')} level="2">
            {HTMLParse(title)}
          </Heading>
        </div>

        <div className={cx('DetailedProductsItem__contentWrap')}>
          <div className={cx('DetailedProductsItem__infoWrap')}>
            <div className={cx('DetailedProductsItem__content')}>
              <div className={cx('DetailedProductsItem__productStructure')}>{productStructure}</div>
              <div className={cx('DetailedProductsItem__productStructureWrap')}>
                {productStructures.map((structures) => (
                  <div key={structures.id}>
                    <div className="DetailedProductsItem__productStructures__point"></div>
                    <div
                      className={cx(
                        'DetailedProductsItem__productStructures',
                        structures.structure == undefined
                          ? 'DetailedProductsItem__productStructuresNone'
                          : 'DetailedProductsItem__productStructures',
                      )}
                    >
                      {structures.structure}
                    </div>
                  </div>
                ))}
              </div>
              <div className={cx('DetailedProductsItem__productUsage')}>{productUsage}</div>
              <div className={cx('DetailedProductsItem__productUsages')}>{productUsages}</div>
            </div>
            <div className={cx('DetailedProductsItem__content')}>
              <div className={cx('DetailedProductsItem__productConstruction')}>
                {productConstruction}
              </div>
              <div className={cx('DetailedProductsItem__productConstructionWrap')}>
                {productConstructions.map((constructions) => (
                  <div
                    className={cx(
                      'DetailedProductsItem__productConstructions',
                      constructions.construction == undefined
                        ? 'DetailedProductsItem__productConstructionsNone'
                        : 'DetailedProductsItem__productConstructions',
                    )}
                    key={constructions.id}
                  >
                    {constructions.construction}
                  </div>
                ))}
              </div>

              <div className={cx('DetailedProductsItem__productSeal')}>{productSeal}</div>
              <div className={cx('DetailedProductsItem__productSealWrap')}>
                {productSeals.map((seals) => (
                  <div
                    className={cx(
                      'DetailedProductsItem__productSeals',
                      seals.seal == undefined
                        ? 'DetailedProductsItem__productSealsNone'
                        : 'DetailedProductsItem__productSeals',
                    )}
                    key={seals.id}
                  >
                    {seals.seal}
                  </div>
                ))}
              </div>

              <div className={cx('DetailedProductsItem__productCoverage')}>{productCoverage}</div>
              <div className={cx('DetailedProductsItem__productCoverageWrap')}>
                {productCoverages.map((сoverage) => (
                  <div
                    className={cx(
                      'DetailedProductsItem__productCoverages',
                      сoverage.coverage == undefined
                        ? 'DetailedProductsItem__productCoverageNone'
                        : 'DetailedProductsItem__productCoverages',
                    )}
                    key={сoverage.id}
                  >
                    {сoverage.coverage}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DetailedProductsItem;
