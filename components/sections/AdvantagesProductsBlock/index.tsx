import React, { useState } from 'react';

import HTMLParse from 'react-html-parser';

import Container from 'components/environment/Container';
import Heading from 'components/environment/Heading';
import Accordion from 'components/environment/Accordion';

import cn from 'classnames/bind';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

type DescriptionItemsProps = {
  id: number | string;
  descriptionItem: string[];
};
type DescriptionPhotoProps = {
  id: number | string;
  img: string | undefined;
};
interface AdvantagesProductsBlockProps {
  title: string;
  className?: string;
  accordionItems: {
    id: number | string;
    number: string;
    title: string;
    body: string;
    descriptionItems: Array<DescriptionItemsProps>;
    img: Array<DescriptionPhotoProps>;
  }[];
}

const AdvantagesProductsBlock: React.FC<AdvantagesProductsBlockProps> = ({
  title,
  accordionItems,
}) => {
  const [openedAccordionItem, setOpenedAccordionItem] = useState<number | string | null>(null);

  const accordionClickHandler = (id: number | string) => {
    if (openedAccordionItem === id) setOpenedAccordionItem(null);
    else setOpenedAccordionItem(id);
  };

  return (
    <div className={cx('AdvantagesProductsBlock')}>
      <Container className={cx('AdvantagesProductsBlock__container')}>
        <div className={cx('AdvantagesProductsBlock__titleWrap')}>
          <Heading className={cx('AdvantagesProductsBlock__title')} level="2">
            {HTMLParse(title)}
          </Heading>
        </div>

        <div className={cx('AdvantagesProductsBlock__contentWrap')}>
          {accordionItems.map((accordionItem) => (
            <Accordion
              key={accordionItem.id}
              number={accordionItem.number}
              title={accordionItem.title}
              isOpened={openedAccordionItem === accordionItem.id}
              onClick={() => accordionClickHandler(accordionItem.id)}
            >
              <div className={cx('AdvantagesProductsBlock__descriptionItemWrapp')}>
                {accordionItem.body}
                {/* title={} */}
                {accordionItem.descriptionItems.map((descriptionItem) => (
                  <div
                    className={cx('AdvantagesProductsBlock__descriptionItem')}
                    key={descriptionItem.id}
                  >
                    {descriptionItem.descriptionItem}
                  </div>
                ))}
              </div>
              {accordionItem.img.map(
                (img: { id: React.Key | null | undefined; img: string | undefined }) => (
                  <img src={img.img} key={img.id}></img>
                ),
              )}
            </Accordion>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AdvantagesProductsBlock;
