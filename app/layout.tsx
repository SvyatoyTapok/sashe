'use client'
import { Cormorant } from './utils/fonts'
import './utils/null.css'
import styles from './styles.module.css'
import Header from "./Components/Header/Header";
import VerticalBar from "./Components/VerticalBar/VerticalBar";
import { store } from './Store/store';
import Script from 'next/script';
import { Provider } from 'react-redux';

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <>
      <Provider store={store}>
        <head>
          <Script src="https://api-maps.yandex.ru/v3/?apikey=53f3275c-568d-4804-be95-330db3dc8651&lang=ru_RU" strategy="afterInteractive" />
        </head>
        <html className={Cormorant.className}>
          <body className={styles.mainContainer}>
            <Header />
            <VerticalBar />
            {children}
          </body>
        </html>
      </Provider >
    </>
  );
}