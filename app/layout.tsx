import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CookieBanner from './components/CookieBanner';

export const metadata = {
  title: 'Bayraklı Belediyesi Spor Kulübü',
  description: 'Bayraklı Belediyesi Spor Kulübü Resmi Web Sitesi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="font-sans text-gray-900 bg-white">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}