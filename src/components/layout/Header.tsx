import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { logo } from '../../data/brandAssets';
import { mainNavigation, type NavChild } from '../../data/navigation';
import { useScrollHeader } from '../../hooks/useScrollHeader';
import './Header.css';

interface HeaderProps {
  transparent?: boolean;
}

function renderNavChildLink(
  child: NavChild,
  className: string,
  onNavigate: () => void,
  menuItem = false,
) {
  const menuProps = menuItem ? { role: 'menuitem' as const } : {};

  if (child.external) {
    return (
      <a
        href={child.path}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={child.ariaLabel ?? child.label}
        onClick={onNavigate}
        {...menuProps}
      >
        {child.label}
      </a>
    );
  }

  return (
    <NavLink
      to={child.path}
      className={({ isActive }) => `${className}${isActive ? ' is-active' : ''}`}
      onClick={onNavigate}
      {...menuProps}
    >
      {child.label}
    </NavLink>
  );
}

function isNavGroupActive(label: string, pathname: string): boolean {
  if (label === 'Catering') {
    return pathname.startsWith('/noida-catering') || pathname.includes('catering-noida');
  }
  if (label === 'Menus') {
    return pathname.startsWith('/catering-menu') || pathname === '/catering-by-guest-count';
  }
  return false;
}

export function Header({ transparent = false }: HeaderProps) {
  const scrolled = useScrollHeader();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isHome = location.pathname === '/';
  const isTransparent = transparent && isHome && !scrolled && !menuOpen;
  const headerClass = isTransparent ? 'header--transparent' : 'header--solid';

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const closeDropdown = () => {
    clearCloseTimer();
    setOpenDropdown(null);
  };

  const openDropdownMenu = (label: string) => {
    clearCloseTimer();
    setOpenDropdown(label);
  };

  const scheduleCloseDropdown = () => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const toggleDropdown = (label: string) => {
    clearCloseTimer();
    setOpenDropdown((current) => (current === label ? null : label));
  };

  const closeMenu = () => {
    setMenuOpen(false);
    closeDropdown();
  };

  useEffect(() => {
    setMenuOpen(false);
    closeDropdown();
  }, [location.pathname]);

  useEffect(() => {
    if (!openDropdown) return undefined;

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [openDropdown]);

  useEffect(() => () => clearCloseTimer(), []);

  return (
    <>
      <header
        className={`header ${headerClass}${scrolled ? ' header--scrolled' : ''}`}
        role="banner"
      >
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

          <nav className="header__nav" aria-label="Main navigation" ref={navRef}>
            {mainNavigation.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className={`header__nav-group${
                    openDropdown === item.label ? ' is-open' : ''
                  }${isNavGroupActive(item.label, location.pathname) ? ' is-active' : ''}`}
                  onMouseEnter={() => openDropdownMenu(item.label)}
                  onMouseLeave={scheduleCloseDropdown}
                >
                  <button
                    type="button"
                    className="header__nav-label header__nav-label--trigger"
                    id={`nav-${item.label.toLowerCase()}`}
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="menu"
                    onClick={() => toggleDropdown(item.label)}
                  >
                    {item.label}
                    <span className="header__nav-chevron" aria-hidden="true">▾</span>
                  </button>
                  <div
                    className="header__nav-dropdown"
                    role="menu"
                    aria-labelledby={`nav-${item.label.toLowerCase()}`}
                  >
                    <div className="header__nav-dropdown-panel">
                      {item.children.map((child) => (
                        <span key={child.path} role="none">
                          {renderNavChildLink(
                            child,
                            'header__nav-dropdown-link',
                            closeDropdown,
                            true,
                          )}
                        </span>
                      ))}
                    </div>
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
                <details className="mobile-nav__details">
                  <summary
                    className={`mobile-nav__summary${
                      isNavGroupActive(item.label, location.pathname) ? ' is-active' : ''
                    }`}
                  >
                    {item.label}
                  </summary>
                  <ul className="mobile-nav__sub">
                    {item.children.map((child) => (
                      <li key={child.path}>
                        {renderNavChildLink(child, 'mobile-nav__sublink', closeMenu)}
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
