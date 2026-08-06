import './globals.css';
import Header from '@modules/Header/Header';
import Footer from '@modules/Footer/Footer';
import SmoothScroll from '@/SmoothScroll';

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl">
      <SmoothScroll />
      <body className="font-primary text-black font-medium">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
