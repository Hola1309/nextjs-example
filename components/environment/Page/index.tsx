import React from 'react';

import cn from 'classnames/bind';
import styles from './styles.module.scss';
const cx = cn.bind(styles);

import { HEADER } from 'constants/data';

import Header from '../Header/index';
import Footer from '../Footer/index';
interface PageProps {
  children: React.ReactNode;
  className?: string;
}

const Page: React.FC<PageProps> = ({ children, className }) => {
  return (
    <React.Fragment>
      <Header categories={HEADER.categories} />
      <main className={cx('Page', className)}>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Page;
