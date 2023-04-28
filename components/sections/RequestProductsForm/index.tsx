import React, { useEffect, useState } from 'react';

import HTMLParse from 'react-html-parser';

import Container from 'components/environment/Container';
import Heading from 'components/environment/Heading';
import Button from 'components/environment/Button';

import cn from 'classnames/bind';
import styles from './styles.module.scss';

const cx = cn.bind(styles);
type buttonProps = {
  button: string[] | string;
  id: number | string;
};
interface RequestProductsFormProps {
  title: string;
  className?: string;
  titleDescription: string;
  button: Array<buttonProps>;
}

const RequestProductsForm: React.FC<RequestProductsFormProps> = ({
  title,
  // titleDescription,
}) => {
  const [checked, setChecked] = useState(true);
  const [filedownload, setFiledownload] = useState([{ id: 1, rewuefile: '', titleDescription: '' }]);

  const handleChange = () => {
    setChecked(!checked);
  };
  useEffect(() => {
    fetch('/apiaboutUsRewueFileViewSet/?format=json')
      .then(response => response.json())
      .then(commits => setFiledownload(commits))
  }, []);

  return (
    <div className={cx('RequestProductsForm')}>
      <Container className={cx('RequestProductsForm__container')}>
        <div className={cx('RequestProductsForm__contentWrap')}>
          <div className={cx('RequestProductsForm__content')}>
            <div className={cx('RequestProductsForm__titleWrap')}>
              <Heading className={cx('RequestProductsForm__title')} level="3">
                {HTMLParse(title)}
              </Heading>
            </div>
            <div className={cx('RequestProductsForm__content__description')}>
              { filedownload[0].titleDescription }
            </div>
            <div className={cx('RequestProductsForm__content__button')} >
              <div className={cx('RequestProductsForm__content__buttonWrap')}>
                <a href={filedownload[0].rewuefile} download>Заполнить анкету</a>
              </div>
            </div>
          </div>
          <div className={cx('RequestProductsForm__content')}>
            <form className={cx('RequestProductsForm__form')}>
              <div className={cx('RequestProductsForm__fields')}>
                <input
                  className={cx('RequestProductsForm__input')}
                  type="email"
                  placeholder="Ваше имя"
                />
                <input
                  className={cx('RequestProductsForm__input')}
                  type="email"
                  placeholder="E-mail/Телефон"
                />
                <input
                  className={cx('RequestProductsForm__input')}
                  type="text"
                  placeholder="Наименование организации"
                />
                <input className={cx('RequestProductsForm__input')} type="file" />
                <textarea
                  className={cx('RequestProductsForm__inputBig')}
                  placeholder="Текст сообщения"
                />
              </div>
              <div className={cx('RequestProductsForm__checkboxWrap')}>
                <input
                  className={cx('RequestProductsForm__checkbox')}
                  type="checkbox"
                  checked={checked}
                  onChange={handleChange}
                />
                <div className={cx('RequestProductsForm__checkboxText')}>
                  Даю согласие на обработку и хранение своих персональных данных и соглашаюсь с
                  Политикой конфиденциальности
                </div>
              </div>
            </form>
            <div className={cx('RequestProductsForm__buttonWrap')}>
              <Button theme="wBorder" className={cx('RequestProductsForm__button')}>
                Отправить
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RequestProductsForm;
