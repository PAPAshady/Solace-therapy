import './globals.css';
import Header from '@modules/Header/Header';
import SmoothScroll from '@/SmoothScroll';

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl">
      <SmoothScroll />
      <body className="font-primary font-medium">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
