import './globals.css';
import Header from '@modules/Header/Header';
import Footer from '@modules/Footer/Footer';
import SmoothScroll from '@/SmoothScroll';
import TransitionOverlay from '@/TransitionOverlay';

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl">
      <SmoothScroll />
      <body className="font-primary font-medium text-black">
        <Header />
        <main className="relative">
          <TransitionOverlay />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
