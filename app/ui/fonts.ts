import { Inter, Lusitana } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const openSansBold = localFont({
  src: '../../public/fonts/OpenSans-Bold.ttf',
  display: 'swap',
});

export const openSansExtraBold = localFont({
  src: '../../public/fonts/OpenSans-ExtraBold.ttf',
  display: 'swap',
});
export const openSansSemiBold = localFont({
  src: '../../public/fonts/OpenSans-Semibold.ttf',
  display: 'swap',
});
