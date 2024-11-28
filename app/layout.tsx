import type { Metadata } from "next";
import { Cormorant, RalewayFont } from './utils/fonts'

export const metadata: Metadata = {
  title: "Sashè",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html className={`${Cormorant.className, RalewayFont.className}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
