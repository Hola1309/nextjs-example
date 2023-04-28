import React, { FunctionComponent } from 'react';

import cn from 'classnames/bind';
import styles from './styles.module.scss';
const cx = cn.bind(styles);
type infoTempOutsideProps = {
  tempOutside: string[] | string;
  id: number | string;
};
type infoTempEnvProps = {
  temp: string[] | string;
  id: number | string;
};
type infoTempEnvNameProps = {
  temp: string[] | string;
  id: number | string;
};
type infoControlProps = {
  control: string[] | string;
  id: number | string;
};
type productTightnessesProps = {
  temp: string[] | string;
  id: number | string;
};
type NomenclatureDiscProps = {
  productTightness: string;
  productTightnesses: Array<productTightnessesProps>;
  productInfoTempOutside: Array<infoTempEnvNameProps>;
  infoTempOutside: Array<infoTempOutsideProps>;
  productInfoTemp: string;
  productInfoControl: string;
  infoControl: Array<infoControlProps>;
  infoTempEnv: Array<infoTempEnvProps>;
};
const NomenclatureDisc: FunctionComponent<NomenclatureDiscProps> = ({
  productTightness,
  productTightnesses,
  productInfoTempOutside,
  infoTempOutside,
  productInfoTemp,
  productInfoControl,
  infoControl,
  infoTempEnv,
}) => {
  return (
    <div className={cx('NomenclatureProductsDiscItem')}>
      <div className={cx('NomenclatureProductsDiscItem__contentWrap')}>
        <div className={cx('NomenclatureProductsDiscItem__infoWrap')}>
          <div className={cx('NomenclatureProductsDiscItem__info')}>
            <div className={cx('NomenclatureProductsDiscItem__infoTitle')}>{productTightness}</div>
            {productTightnesses.map(
              (temp: {
                id: React.Key | null | undefined;
                temp:
                  | boolean
                  | React.ReactChild
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined;
              }) => (
                <div className={cx('NomenclatureProductsDiscItem__infoItem')} key={temp.id}>
                  {temp.temp}
                </div>
              ),
            )}
          </div>
          <div className={cx('NomenclatureProductsDiscItem__info')}>
            <div className={cx('NomenclatureProductsDiscItem__infoTitle')}>{productInfoTemp}</div>
            <div className={cx('NomenclatureProductsDiscItem__infoItemList')}>
              {infoTempEnv.map(
                (temp: {
                  id: React.Key | null | undefined;
                  temp:
                    | boolean
                    | React.ReactChild
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined;
                }) => (
                  <div className={cx('NomenclatureProductsDiscItem__infoItem')} key={temp.id}>
                    {temp.temp}
                  </div>
                ),
              )}
            </div>
          </div>
          <div className={cx('NomenclatureProductsDiscItem__info')}>
            <div className={cx('NomenclatureProductsDiscItem__infoTitle')}>
              {productInfoControl}
            </div>
            <div className={cx('NomenclatureProductsDiscItem__infoItemList')}>
              {infoControl.map(
                (control: {
                  id: React.Key | null | undefined;
                  control:
                    | boolean
                    | React.ReactChild
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined;
                }) => (
                  <div className={cx('NomenclatureProductsDiscItem__infoItem')} key={control.id}>
                    {control.control}
                  </div>
                ),
              )}
            </div>
          </div>
          <div className={cx('NomenclatureProductsDiscItem__info')}>
            {productInfoTempOutside.map(
              (temp: {
                id: React.Key | null | undefined;
                temp:
                  | boolean
                  | React.ReactChild
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined;
              }) => (
                <div className={cx('NomenclatureProductsDiscItem__infoTitle')} key={temp.id}>
                  {temp.temp}
                </div>
              ),
            )}
            <div className={cx('NomenclatureProductsDiscItem__infoItemList')}>
              {infoTempOutside.map(
                (tempOutside: {
                  id: React.Key | null | undefined;
                  tempOutside:
                    | boolean
                    | React.ReactChild
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined;
                }) => (
                  <div
                    className={cx('NomenclatureProductsDiscItem__infoItem')}
                    key={tempOutside.id}
                  >
                    {tempOutside.tempOutside}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NomenclatureDisc;
