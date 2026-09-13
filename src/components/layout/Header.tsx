import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { logo } from '../../data/brandAssets';
import { mainNavigation } from '../../data/navigation';
import { useScrollHeader } from '../../hooks/useScrollHeader';
import './Header.css';

interface HeaderProps {
  transparent?: boolean;
}

export function Header({ transparent = false }: HeaderProps) {
  const scrolled = useScrollHeader();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isTransparent = transparent && isHome && !scrolled && !menuOpen;
  const headerClass = isTransparent ? 'header--transparent' : 'header--solid';

  const closeMenu = () => setMenuOpen(false);

  const isCateringActive = location.pathname.startsWith('/noida-catering')
    || location.pathname.includes('catering-noida');

  return (
    <>
      <header className={`header ${headerClass}`} role="banner">
        <div className="header__inner">
          <Link
            to="/"
            className="header__logo"
            aria-label="Khidmat — The Spirit of Delhi"
            onClick={closeMenu}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="header__logo-img"
              width={125}
              height={42}
            />
          </Link>

          <nav className="header__nav" aria-label="Main navigation">
            {mainNavigation.map((item) =>
              item.children ? (
                <div key={item.label} className="header__nav-group">
                  <NavLink
                    to={item.path!}
                    className={`header__nav-label header__nav-label--link${
                      item.label === 'Catering' && isCateringActive ? ' is-active' : ''
                    }`}
                    id={`nav-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </NavLink>
                  <span className="header__nav-chevron" aria-hidden="true">▾</span>
                  <div
                    className="header__nav-dropdown"
                    role="menu"
                    aria-labelledby={`nav-${item.label.toLowerCase()}`}
                  >
                    {item.children.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        role="menuitem"
                        className={({ isActive }) =>
                          `header__nav-dropdown-link${isActive ? ' is-active' : ''}`
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path!}
                  className={({ isActive }) =>
                    `header__nav-link${isActive ? ' is-active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="header__actions">
            <Link
              to="/contact?type=catering"
              className="btn btn--primary btn--compact header__cta"
            >
              Get a Quote
            </Link>
            <Link to="/contact" className="btn btn--ghost header__cta-ghost">
              Contact
            </Link>
          </div>

          <button
            type="button"
            className={`header__menu-btn${menuOpen ? ' is-open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <nav
        className={`mobile-nav${menuOpen ? ' is-open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <ul className="mobile-nav__links">
          {mainNavigation.map((item) =>
            item.children ? (
              <li key={item.label} className="mobile-nav__group">
                <Link
                  to={item.path!}
                  className={`mobile-nav__link${item.label === 'Catering' && isCateringActive ? ' is-active' : ''}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
                <details className="mobile-nav__details">
                  <summary className="mobile-nav__subsummary">
                    All {item.label} Services
                  </summary>
                  <ul className="mobile-nav__sub">
                    {item.children.map((child) => (
                      <li key={child.path}>
                        <Link
                          to={child.path}
                          className="mobile-nav__sublink"
                          onClick={closeMenu}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ) : (
              <li key={item.path}>
                <Link to={item.path!} className="mobile-nav__link" onClick={closeMenu}>
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>
        <div className="mobile-nav__actions">
          <Link
            to="/contact?type=catering"
            className="btn btn--primary btn--compact"
            onClick={closeMenu}
          >
            Get a Quote
          </Link>
          <Link to="/contact" className="btn btn--outline-dark" onClick={closeMenu}>
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
}
