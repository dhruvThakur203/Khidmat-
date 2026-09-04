import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

interface LayoutProps {
  transparentHeader?: boolean;
}

export function Layout({ transparentHeader = false }: LayoutProps) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header transparent={transparentHeader} />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
}
