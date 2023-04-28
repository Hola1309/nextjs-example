import React, { useRef, useEffect, useState } from 'react';

import HTMLParse from 'react-html-parser';

import Plus from 'images/icons/plus.svg';

import cn from 'classnames/bind';
import styles from './styles.module.scss';
const cx = cn.bind(styles);

interface AccordionProps {
  className?: string;
  title: string;
  number: string;
  children: React.ReactNode;
  isOpened?: boolean;
  onClick?: () => void;
}

const Accordion: React.FC<AccordionProps> = ({
  className,
  title,
  children,
  isOpened = false,
  onClick,
}) => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [bodyHeight, setBodyHeight] = useState(0);

  useEffect(() => {
    if (bodyRef && bodyRef.current && isOpened) {
      const height = bodyRef.current.getBoundingClientRect().height;
      setBodyHeight(height);
    } else if (!isOpened) {
      setBodyHeight(0);
    }
  }, [isOpened]);

  return (
    <div className={cx('Accordion', { Accordion_opened: isOpened }, className)}>
      <div className={cx('Accordion__head')} onClick={onClick}>
        <div className={cx('Accordion__title')}>{HTMLParse(title)}</div>
        <div className={cx('Accordion__btn')}>
          <Plus />
        </div>
      </div>
      <div className={cx('Accordion__bodyWrap')} style={{ height: `${bodyHeight}px` }}>
        <div className={cx('Accordion__body')} ref={bodyRef}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
