'use client'
import { Cormorant } from './utils/fonts'
import './utils/null.css'
import styles from './styles.module.css'
import Header from "./Components/Header/Header";
import VerticalBar from "./Components/VerticalBar/VerticalBar";
import { store } from './Store/store';
import { Provider } from 'react-redux';

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <>
      <Provider store={store}>
        <head>
          <title>Sashé</title>
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