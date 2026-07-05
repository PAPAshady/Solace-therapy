import './globals.css';
import Header from '@modules/Header/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body className="font-primary font-medium">
        <Header />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
