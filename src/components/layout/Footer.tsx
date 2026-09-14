import { Link } from 'react-router-dom';
import { branchList, formatPhoneLink } from '../../data/branches';
import { brand } from '../../data/brand';
import { contactConfig } from '../../data/site';
import { footerNavigation } from '../../data/navigation';
import { mailtoLink, social } from '../../data/social';
import { logo } from '../../data/brandAssets';
import { PlatformProfiles } from '../trust/PlatformProfiles';
import './Footer.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__ornament" aria-hidden="true">
          <span />
        </div>

        <div className="footer__top">
          <div className="footer__brand">
            <img src={logo.src} alt={logo.alt} className="footer__logo" width={140} height={44} />
            <p className="footer__tagline">
              {brand.since}
              <br />
              {brand.tagline}
            </p>
            <a href={mailtoLink} className="footer__email">
              {social.email}
            </a>
            <a href={formatPhoneLink(contactConfig.phonePrimary)} className="footer__phone">
              {contactConfig.phoneFormatted}
            </a>
            <p className="footer__phone-alt">
              Alternate Number:{' '}
              <a href={formatPhoneLink(contactConfig.phoneAlternate)} className="footer__phone">
                {contactConfig.phoneAlternateFormatted}
              </a>
            </p>
            <PlatformProfiles variant="footer" heading="" />
          </div>

          <div>
            <h3 className="footer__heading">Explore</h3>
            <nav className="footer__links" aria-label="Footer navigation">
              {footerNavigation.map((link) => (
                <Link key={link.path} to={link.path} className="footer__link">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="footer__heading">Locations</h3>
            {branchList.map((branch) => (
              <div key={branch.id} className="footer__location">
                <p className="footer__location-name">
                  {branch.area}, {branch.city}
                </p>
                <p className="footer__location-address">{branch.address}</p>
                {branch.phones.slice(0, 2).map((phone) => (
                  <a key={phone} href={formatPhoneLink(phone)} className="footer__phone">
                    {phone}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} {brand.registered} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
