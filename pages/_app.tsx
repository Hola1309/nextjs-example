import React from 'react';
import 'styles/document.scss';
import './style.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import getOrInitializeStore from 'store/index';

function MyApp({ Component, pageProps }: AppProps) {
  const store = getOrInitializeStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
