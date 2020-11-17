import 'antd/dist/antd.css';
import '../styles/globals.css';
import Header from '../components/Layout/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
