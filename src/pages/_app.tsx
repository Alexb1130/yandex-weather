import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'

import dayjs from 'dayjs';
import 'dayjs/locale/ru';

import store from '../store';

import './global.css';

dayjs.locale('ru')

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
