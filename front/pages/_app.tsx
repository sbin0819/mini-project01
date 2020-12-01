import 'antd/dist/antd.css';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import Header from '../components/Layout/Header';
import withReduxSaga from 'next-redux-saga';

import wrapper from '../redux/store/configureStore';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(withReduxSaga(MyApp));
