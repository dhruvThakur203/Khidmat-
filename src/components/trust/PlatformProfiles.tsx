import { connectProfiles, verifiedProfiles, type ProfileId } from '../../data/businessEntity';
import { trackConversion } from '../../utils/analytics';
import { PlatformIcon } from '../ui/PlatformIcon';
import './PlatformProfiles.css';

type PlatformProfilesVariant = 'default' | 'compact' | 'footer';

interface PlatformProfilesProps {
  variant?: PlatformProfilesVariant;
  heading?: string;
  /** Override default "Connect with Khidmat" */
  eyebrow?: string;
  profiles?: ProfileId[];
}

const conversionMap: Record<ProfileId, 'google_profile_click' | 'zomato_click' | 'facebook_click' | 'instagram_click'> = {
  google: 'google_profile_click',
  zomato: 'zomato_click',
  facebook: 'facebook_click',
  instagram: 'instagram_click',
};

export function PlatformProfiles({
  variant = 'default',
  heading = 'Connect with Khidmat',
  eyebrow = 'Find Khidmat on',
  profiles = connectProfiles,
}: PlatformProfilesProps) {
  return (
    <div className={`platform-profiles platform-profiles--${variant}`}>
      {variant !== 'footer' && (
        <div className="platform-profiles__header">
          <p className="eyebrow">{eyebrow}</p>
          {heading && <h2 className="platform-profiles__title display-md">{heading}</h2>}
        </div>
      )}
      {variant === 'footer' && (
        <p className="platform-profiles__footer-label">{eyebrow}</p>
      )}
      <ul className="platform-profiles__list">
        {profiles.map((id) => {
          const profile = verifiedProfiles[id];
          return (
            <li key={id}>
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-profiles__link"
                aria-label={profile.ariaLabel}
                onClick={() => trackConversion(conversionMap[id], { label: profile.label })}
              >
                <PlatformIcon platform={id} />
                <span>{profile.linkText}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
