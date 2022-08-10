import '../styles/globals.css'
import type { AppProps } from 'next/app';
import {generateStore} from '../redux/store'
import { Provider } from 'react-redux';

const store = generateStore()

function MyApp({ Component, pageProps }: AppProps) {
  return  (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>)
}

export default MyApp
