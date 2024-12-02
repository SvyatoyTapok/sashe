import type { Metadata } from "next";
import { Cormorant } from './utils/fonts'
import './utils/null.css'
import styles from './styles.module.css'

export const metadata: Metadata = {
  title: "Sashè",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html className={Cormorant.className}>
      <body className={styles.mainContainer}>
        {children}
      </body>
    </html>
  );
}