import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { logo } from '../../data/brandAssets';
import { navigation } from '../../data/heritage';
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
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `header__nav-link${isActive ? ' is-active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="header__actions">
            <Link to="/menu" className="btn btn--primary btn--compact header__cta">
              View Menu
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
          {navigation.map((item) => (
            <li key={item.path}>
              <Link to={item.path} className="mobile-nav__link" onClick={closeMenu}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mobile-nav__actions">
          <Link to="/menu" className="btn btn--primary btn--compact" onClick={closeMenu}>
            View Menu
          </Link>
          <Link to="/contact" className="btn btn--outline-dark" onClick={closeMenu}>
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
}
