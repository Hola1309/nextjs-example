import React, { useState } from 'react';
import Link from 'next/link';

import Container from 'components/environment/Container';
import { slide as Menu } from 'react-burger-menu';
import Arrow from 'public/assets/images/icons/arrow.svg';
import cn from 'classnames/bind';
import styles from './styles.module.scss';
const cx = cn.bind(styles);

type HeaderCategory = {
  title: string;
  url: string;
};

interface HeaderProps {
  categories: Array<HeaderCategory>;
}
const Header: React.FC<HeaderProps> = () => {
  const [openServMenu, setOpenServMenu] = useState('hamburger-main-menu__active__f');
  const toggleServMenu = () =>
    openServMenu == 'hamburger-main-menu__active__f'
      ? setOpenServMenu('hamburger-main-menu__active__t')
      : setOpenServMenu('hamburger-main-menu__active__f');
  return (
    <div className={cx('Header')}>
      <div className={cx('hamburger-main-menu')}>
        <div className={cx('hamburger-main-menu__wrapper')}>
          <Container className={cx('Header__container')}>
            <div className={cx('Header__wrapper')}>
              <Link href="/">
                <div className={cx('Header__logoWrap')}>
                  <div className={cx('Header__logo')}>
                    <svg
                      width="107"
                      height="53"
                      viewBox="0 0 107 53"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1529_5253)">
                        <path
                          d="M100.41 52.8406H107.001V47.9659H106.189V52.0591H104.106V47.9659H103.305V52.0591H101.222V47.9659H100.41V52.8406ZM95.854 51.3894L96.8807 49.0116L97.9074 51.3894H95.854ZM94.344 52.8406H95.2198L95.518 52.1708H98.2509L98.5416 52.8406H99.4174L97.2771 47.9659H96.4844L94.344 52.8406ZM87.6363 52.8406H88.4478V49.3278L90.0861 52.8406H90.8939L92.5473 49.3018V52.8406H93.3551V47.9659H92.3094L90.49 51.8508L88.6781 47.9659H87.6363V52.8406ZM81.1965 50.3958C81.1965 50.911 81.3515 51.4146 81.6418 51.8429C81.9322 52.2713 82.3448 52.6052 82.8277 52.8023C83.3105 52.9995 83.8418 53.0511 84.3543 52.9505C84.8669 52.85 85.3377 52.602 85.7073 52.2377C86.0768 51.8734 86.3285 51.4093 86.4304 50.904C86.5324 50.3987 86.48 49.875 86.28 49.399C86.0801 48.923 85.7414 48.5162 85.3069 48.23C84.8723 47.9438 84.3614 47.791 83.8388 47.791C83.1394 47.791 82.4684 48.0644 81.9731 48.5513C81.4778 49.0382 81.1985 49.6988 81.1965 50.3884V50.3958ZM85.6696 50.3958C85.6711 50.7535 85.565 51.1036 85.3646 51.4018C85.1643 51.7 84.8787 51.9329 84.5441 52.0712C84.2094 52.2094 83.8407 52.2467 83.4846 52.1784C83.1284 52.1101 82.8008 51.9391 82.5432 51.6873C82.2856 51.4354 82.1095 51.1139 82.0373 50.7633C81.965 50.4128 81.9998 50.0491 82.1373 49.7181C82.2748 49.387 82.5087 49.1036 82.8096 48.9037C83.1104 48.7038 83.4647 48.5963 83.8275 48.5948C84.3154 48.5898 84.7854 48.7759 85.1343 49.1121C85.4832 49.4484 85.6825 49.9074 85.6885 50.3884L85.6696 50.3958ZM76.7423 52.8406H77.5576V48.7473H80.4038V47.9547H76.7423V52.8406ZM71.6727 47.9659C71.7218 48.9896 71.6662 50.0157 71.5066 51.0284C71.4718 51.2994 71.3581 51.5547 71.1792 51.7634C71.0004 51.9721 70.764 52.1252 70.4988 52.2043L70.7479 52.9485C71.6048 52.6806 72.0615 52.1261 72.2918 51.207C72.4475 50.3966 72.5095 49.5715 72.4767 48.7473H74.5265V52.8406H75.3418V47.9659H71.6727ZM64.6516 50.3958C64.6516 50.911 64.8066 51.4146 65.0969 51.8429C65.3873 52.2713 65.8 52.6052 66.2828 52.8023C66.7656 52.9995 67.2969 53.0511 67.8095 52.9505C68.322 52.85 68.7929 52.602 69.1624 52.2377C69.5319 51.8734 69.7836 51.4093 69.8855 50.904C69.9875 50.3987 69.9352 49.875 69.7352 49.399C69.5352 48.923 69.1965 48.5162 68.762 48.23C68.3275 47.9438 67.8166 47.791 67.294 47.791C66.5945 47.791 65.9235 48.0644 65.4282 48.5513C64.9329 49.0382 64.6536 49.6988 64.6516 50.3884V50.3958ZM69.1247 50.3958C69.1262 50.7535 69.0201 51.1036 68.8198 51.4018C68.6194 51.7 68.3339 51.9329 67.9992 52.0712C67.6646 52.2094 67.2959 52.2467 66.9397 52.1784C66.5836 52.1101 66.256 51.9391 65.9983 51.6873C65.7407 51.4354 65.5647 51.1139 65.4924 50.7633C65.4202 50.4128 65.455 50.0491 65.5924 49.7181C65.7299 49.387 65.9639 49.1036 66.2647 48.9037C66.5656 48.7038 66.9198 48.5963 67.2826 48.5948C67.7673 48.5947 68.2325 48.783 68.5773 49.1187C68.9221 49.4545 69.1188 49.9106 69.1247 50.3884V50.3958ZM55.1354 51.3894L56.1621 49.0116L57.1927 51.3894H55.1354ZM53.6255 52.8406H54.5012L54.8032 52.1708H57.5324L57.823 52.8406H58.6988L56.5585 47.9659H55.7658L53.6255 52.8406ZM50.0281 50.8609V48.7473H51.3795C51.5284 48.735 51.6782 48.7533 51.8195 48.801C51.9608 48.8488 52.0905 48.9249 52.2005 49.0245C52.3104 49.1242 52.3982 49.2453 52.4583 49.3801C52.5183 49.515 52.5493 49.6606 52.5493 49.8079C52.5493 49.9551 52.5183 50.1008 52.4583 50.2356C52.3982 50.3704 52.3104 50.4915 52.2005 50.5912C52.0905 50.6909 51.9608 50.767 51.8195 50.8147C51.6782 50.8624 51.5284 50.8807 51.3795 50.8684L50.0281 50.8609ZM49.2241 52.8406H50.0281V51.6312H51.3833C51.6345 51.6424 51.8853 51.6032 52.1208 51.5162C52.3562 51.4291 52.5712 51.2959 52.753 51.1246C52.9348 50.9534 53.0794 50.7476 53.1782 50.5196C53.2771 50.2917 53.328 50.0464 53.328 49.7986C53.328 49.5507 53.2771 49.3054 53.1782 49.0775C53.0794 48.8496 52.9348 48.6438 52.753 48.4725C52.5712 48.3012 52.3562 48.168 52.1208 48.081C51.8853 47.9939 51.6345 47.9547 51.3833 47.9659H49.2241V52.8406ZM44.6679 51.3894L45.6947 49.0116L46.7252 51.3894H44.6679ZM43.158 52.8406H44.0338L44.332 52.1708H47.0611L47.3518 52.8406H48.2276L46.0873 47.9659H45.2983L43.158 52.8406ZM36.4465 52.8406H37.258V49.3278L38.9001 52.8406H39.7041L41.3575 49.3018V52.8406H42.1653V47.9659H41.1461L39.3228 51.8508L37.511 47.9659H36.4502L36.4465 52.8406ZM31.8903 51.3894L32.917 49.0116L33.9476 51.3894H31.8903ZM30.3804 52.8406H31.2561L31.5543 52.1708H34.2835L34.5742 52.8406H35.4499L33.3096 47.9659H32.5282L30.3804 52.8406ZM60.824 50.113H62.1037C62.2444 50.101 62.3861 50.118 62.5197 50.1629C62.6534 50.2077 62.7762 50.2795 62.8803 50.3736C62.9844 50.4678 63.0674 50.5822 63.1243 50.7096C63.1811 50.8371 63.2105 50.9748 63.2105 51.114C63.2105 51.2532 63.1811 51.3909 63.1243 51.5184C63.0674 51.6458 62.9844 51.7602 62.8803 51.8543C62.7762 51.9485 62.6534 52.0202 62.5197 52.0651C62.3861 52.11 62.2444 52.1269 62.1037 52.115H60.8315L60.824 50.113ZM62.6095 49.4544C62.7203 49.3043 62.7786 49.1227 62.7756 48.9371C62.7756 48.6707 62.6682 48.4151 62.477 48.2267C62.2859 48.0383 62.0267 47.9324 61.7564 47.9324H60.0615V52.8406H62.1037C62.5817 52.8506 63.0443 52.674 63.3908 52.3491C63.7373 52.0243 63.9395 51.5777 63.9533 51.1065C63.9448 50.7241 63.8097 50.3548 63.5684 50.0551C63.3271 49.7555 62.993 49.5419 62.617 49.4469L62.6095 49.4544ZM60.8127 48.5725H61.5676C61.6667 48.5729 61.7616 48.6116 61.8319 48.6804C61.8977 48.7494 61.9343 48.8405 61.9343 48.9353C61.9343 49.03 61.8977 49.1212 61.8319 49.1902C61.7616 49.2589 61.6667 49.2977 61.5676 49.2981H60.8127V48.5725ZM28.9686 51.2182C28.8179 51.5173 28.5853 51.7688 28.2971 51.9444C28.009 52.12 27.6767 52.2126 27.3379 52.2117C26.8514 52.2117 26.3847 52.0212 26.0407 51.682C25.6967 51.3429 25.5034 50.8829 25.5034 50.4032C25.5034 49.9236 25.6967 49.4636 26.0407 49.1245C26.3847 48.7853 26.8514 48.5948 27.3379 48.5948C27.6763 48.5915 28.0087 48.6823 28.2971 48.8567C28.5855 49.0311 28.8183 49.2821 28.9686 49.5809L29.6934 49.2088C29.4224 48.6914 28.9835 48.2783 28.4465 48.0357C27.9095 47.7931 27.3056 47.7348 26.7311 47.8701C26.1566 48.0055 25.6447 48.3267 25.2771 48.7825C24.9095 49.2383 24.7074 49.8024 24.7031 50.3846C24.7049 50.9679 24.9052 51.5336 25.2719 51.9913C25.6386 52.449 26.1505 52.7721 26.7256 52.9089C27.3008 53.0457 27.9058 52.9883 28.4439 52.7458C28.982 52.5034 29.422 52.0899 29.6934 51.5717L28.9686 51.2182Z"
                          fill="#9B9B9B"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 39.2539H19.6666L21.9579 43.6448H0V39.2539Z"
                          fill="#B90C2F"
                        />
                        <path
                          d="M46.6183 0C53.1277 0.00344323 59.5209 1.70092 65.1515 4.92085C70.7821 8.14077 75.4506 12.769 78.6851 18.3377H73.4306C72.2919 16.7014 71.0031 15.1718 69.5803 13.7682C63.973 8.21299 56.4929 4.87919 48.5581 4.39884C40.6234 3.91849 32.7856 6.325 26.5309 11.1621C20.2763 15.9992 16.0395 22.9306 14.624 30.642C13.2084 38.3535 14.7125 46.3089 18.851 53H13.7475C10.866 47.4499 9.47851 41.2635 9.71787 35.0332C9.95723 28.8029 11.8155 22.7376 15.1145 17.4183C18.4136 12.099 23.043 7.70388 28.5592 4.65398C34.0754 1.60408 40.2937 0.00158005 46.6183 0"
                          fill="#012269"
                        />
                        <path
                          d="M79.273 21.0996H84.9352V36.4009H79.4919V28.2144H79.273L75.166 32.903L71.0666 28.2032H70.8439V36.3897H65.412V21.0996H71.0742L75.1736 25.7994L79.273 21.0996ZM49.9995 32.0286H55.5447V31.809L52.7702 28.7502L55.322 25.6766V25.457H49.9995V32.0286ZM44.5676 36.4009V21.0996H61.4183V25.4719L58.6476 28.7502L61.641 32.0286V36.4009H44.5676ZM22.0586 28.7502L26.0485 21.0996H40.355V27.2209H35.142V25.4719H29.7101L28.0454 28.7502L29.7101 32.0286H35.142V30.2796H40.355V36.4009H26.0485L22.0586 28.7502Z"
                          fill="#B90C2F"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M106.998 43.6448H29.385L27.0938 39.2539H106.998V43.6448Z"
                          fill="#B90C2F"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1529_5253">
                          <rect width="107" height="53" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </Link>
              <div className={cx('Header__list__wrapp')}>
                <div className={cx('Header__list')}>
                  <div className={cx('hamburger-main-menu__item')}>
                    <Link href="/history">История</Link>
                  </div>
                  <div className={cx('hamburger-main-menu__item')}>
                    <Link href="/about-us">Самараволгомаш сегодня</Link>
                  </div>

                  <div className={cx('hamburger-main-menu__hover')}>
                    <div className={cx('hamburger-main-menu__item')}>
                      <Link href="/products">Серийная продукция</Link>
                    </div>
                    <div className={cx('hamburger-main-menu__list')}>
                      <div className={cx('hamburger-main-menu__list__item')}>
                        <Link href="/products/welded_valves">
                          Цельносварные запорные шаровые краны с вращающимися сёдлами
                        </Link>
                      </div>
                      <div className={cx('hamburger-main-menu__list__item')}>
                        <Link href="/products/sour_service">
                          Цельносварные запорные шаровые краны с вращающимися сёдлами для
                          специальных сред
                        </Link>
                      </div>
                      <div className={cx('hamburger-main-menu__list__item')}>
                        <Link href="/products/ball_valves">
                          Цельносварные запорные шаровые краны с уплотнением затвора «металл по
                          металлу»
                        </Link>
                      </div>
                      <div className={cx('hamburger-main-menu__list__item')}>
                        <Link href="/products/drives">
                          Пневматические и пневмогидравлические приводы модульной конструкции
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={cx('hamburger-main-menu__item')}>
                    <Link href="/career">Вакансии</Link>
                  </div>
                  <div className={cx('hamburger-main-menu__item')}>
                    <Link href="/contacts">Контакты</Link>
                  </div>
                </div>
              </div>
              <div className="right">
                <Menu right>
                  <div className={cx('hamburger-main-menu__item')}>
                    <a key="0" href="">
                      <span className={cx('hamburger-main-menu__itemBurger')}>Главная</span>
                    </a>
                  </div>
                  <div className={cx('hamburger-main-menu__item')}>
                    <a key="1" href="">
                      <span className={cx('hamburger-main-menu__itemBurger')}>История</span>
                    </a>
                  </div>
                  <div className={cx('hamburger-main-menu__item')}>
                    <a key="2" href="">
                      <span className={cx('hamburger-main-menu__itemBurger')}>
                        Самараволгомаш сегодня
                      </span>
                    </a>
                  </div>
                  <div className={cx('hamburger-main-menu__listHeader')}>
                    <a key="3" href="">
                      <span className={cx('hamburger-main-menu__itemBurger')}>
                        Серийная продукция
                      </span>
                    </a>
                    <span
                      className={cx('hamburger-main-menu__listHeader__arrow')}
                      onClick={toggleServMenu}
                    >
                      <Arrow />
                    </span>
                    <div className={cx(openServMenu)}>
                      <div className={cx('hamburger-main-menu__listItem')}>Цельносварные краны</div>
                      <div className={cx('hamburger-main-menu__listItem')}>
                        Цельносварные шаровые краны для&nbsp;особых сред
                      </div>
                      <div className={cx('hamburger-main-menu__listItem')}>
                        Шаровые краны с уплотнением затвора «Металл по Металлу»
                      </div>
                      <div className={cx('hamburger-main-menu__listItem')}>
                        Пневматические и пневмогидравлические приводы
                      </div>
                    </div>
                  </div>
                  <div className={cx('hamburger-main-menu__item')}>
                    <a key="4" href="">
                      <span className={cx('hamburger-main-menu__itemBurger')}>Вакансии</span>
                    </a>
                  </div>
                  <div className={cx('hamburger-main-menu__item')}>
                    <a key="5" href="">
                      <span className={cx('hamburger-main-menu__itemBurger')}>Контакты</span>
                    </a>
                  </div>
                </Menu>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Header;