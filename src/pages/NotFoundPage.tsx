import { Link } from 'react-router-dom';
import { PageMeta } from '../components/seo/PageMeta';
import { pageSeo } from '../data/seo';
import './NotFoundPage.css';

export function NotFoundPage() {
  return (
    <>
      <PageMeta seo={pageSeo.notFound} />
      <section className="not-found">
        <div className="container not-found__inner">
          <p className="eyebrow">Page not found</p>
          <h1 className="display-lg">This page could not be found</h1>
          <p className="body-lg not-found__text">
            The page you are looking for may have moved or no longer exists.
            Explore Khidmat catering services or return to the homepage.
          </p>
          <div className="not-found__actions">
            <Link to="/" className="btn btn--primary">Back to Home</Link>
            <Link to="/noida-catering" className="btn btn--outline-dark">Catering Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
