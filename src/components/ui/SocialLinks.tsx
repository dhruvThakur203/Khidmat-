import { social } from '../../data/social';
import { InstagramIcon, FacebookIcon } from './SocialIcons';
import './SocialLinks.css';

interface SocialLinksProps {
  variant?: 'footer' | 'page';
}

export function SocialLinks({ variant = 'page' }: SocialLinksProps) {
  return (
    <div className={`social-links social-links--${variant}`}>
      <a
        href={social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="social-links__item"
        aria-label="Khidmat on Instagram"
      >
        <InstagramIcon className="social-links__icon" />
        <span>Instagram</span>
      </a>
      <a
        href={social.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="social-links__item"
        aria-label="Khidmat on Facebook"
      >
        <FacebookIcon className="social-links__icon" />
        <span>Facebook</span>
      </a>
    </div>
  );
}
