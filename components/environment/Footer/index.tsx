import React from 'react';

import Qlab from 'images/footer/qlab.svg';
import MailIcon from 'images/footer/mailicon.svg';
import PhoneIcon from 'images/footer/phoneicon.svg';
import GeoIcon from 'images/footer/geoicon.svg';
import Link from 'next/link';
import Container from '../Container';

import cn from 'classnames/bind';
import styles from './styles.module.scss';
const cx = cn.bind(styles);

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <div className={cx('Footer')}>
        <Container className={cx('Footer__container')}>
          <div className={cx('Footer__list__grid')}>
            <div className={cx('Footer__listHeader')}>
              <Link href="/">Главная</Link>
            </div>
            <div className={cx('Footer__listHeader')}>
              <Link href="/history">История</Link>
            </div>
            <div className={cx('Footer__listHeader')}>
              <Link href="/about-us">Самараволгомаш сегодня</Link>
            </div>
            <div className={cx('Footer__listHeader')}>
              <Link href="/products">Серийная продукция </Link>
            </div>
            <div className={cx('Footer__listHeader')}>
              <Link href="/career">Вакансии</Link>
            </div>
            <div className={cx('Footer__listHeader')}>
              <Link href="/contacts">Контакты</Link>
            </div>
          </div>
          <div className={cx('Footer__wrapper')}>
            <div className={cx('Footer__listWrapp')}>
              <div className={cx('Footer__list')}>
                <div className={cx('Footer__listHeader')}>
                  <MailIcon />
                  <Link href="/products">mail@samaravolgomash.ru</Link>
                </div>
                <div className={cx('Footer__listHeader')}>
                  <PhoneIcon />
                  <div className={cx('Footer__listHeaderPhone')}>
                    <Link href="/products">+7 846 309-07-47</Link>
                    <Link href="/products">+7 846 309-23-08</Link>
                  </div>
                </div>
              </div>
              <div className={cx('Footer__listHeader')}>
                <GeoIcon />
                <Link href="/products">443042, Россия, г.Самара, ул. Белорусская, 88</Link>
              </div>
            </div>
            <div className={cx('Footer__trademarkWrapper')}>
              <div className={cx('Footer__trademark')}>
                <div className={cx('Footer__trademark-list')}>
                  <div className={cx('Footer__trademark-listItem')}>
                    Политика обработки персональных данных
                  </div>
                  <div className={cx('Footer__trademark-listItem')}>
                    Политика конфиденциальности
                  </div>
                  <div className={cx('Footer__trademark-listItem')}>
                    Пользовательское соглашение
                  </div>
                </div>
              </div>
              <div className={cx('Footer__trademark')}>
                <div className={cx('Footer__trademark-list')}>
                  <div
                    className={cx(
                      'Footer__trademark-listItem',
                      'Footer__trademark-listItemNoHover',
                    )}
                  >
                    © 1991–2022 «Самараволгомаш»
                  </div>
                  <div
                    className={cx(
                      'Footer__trademark-listItem',
                      'Footer__trademark-listItemNoHover',
                      'Footer__trademark-listLogoWrap',
                    )}
                  >
                    Сайт разработан в
                    <div className={cx('Footer__trademark-listLogo')}>
                      <Qlab />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
