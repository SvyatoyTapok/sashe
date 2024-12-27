import type { Metadata } from "next";
import { Cormorant } from './utils/fonts'
import './utils/null.css'
import styles from './styles.module.css'
import Header from "./Components/Header/Header";
import VerticalBar from "./Components/VerticalBar/VerticalBar";

export const metadata: Metadata = {
  title: "Sashè",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html className={Cormorant.className}>
      <body className={styles.mainContainer}>
        <Header />
        <VerticalBar />
        {children}
      </body>

    </html>
  );
}