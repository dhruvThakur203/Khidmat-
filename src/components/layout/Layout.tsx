import { Outlet, ScrollRestoration } from 'react-router-dom';
import { GlobalStructuredData } from '../seo/GlobalStructuredData';
import { Footer } from './Footer';
import { Header } from './Header';
import { StickyMobileCta } from './StickyMobileCta';

interface LayoutProps {
  transparentHeader?: boolean;
}

export function Layout({ transparentHeader = false }: LayoutProps) {
  return (
    <>
      <GlobalStructuredData />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header transparent={transparentHeader} />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <StickyMobileCta />
      <ScrollRestoration />
    </>
  );
}
