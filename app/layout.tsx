import { Bebas_Neue, DM_Sans, Oswald, Paytone_One , Sirin_Stencil } from 'next/font/google';
import './globals.css';

export const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
export const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });
export const oswald = Oswald({ subsets: ["latin"], weight: ["300", "400", "700"] });
export const paytone = Paytone_One({ subsets: ["latin"], weight: ["400"] });
export const sirin = Sirin_Stencil({ subsets: ["latin"], weight: ["400"] });


export const metadata = {
  title: 'Your App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={` ${dmSans.className} bg-black`}>
        {children}
      </body>
    </html>
  );
}
