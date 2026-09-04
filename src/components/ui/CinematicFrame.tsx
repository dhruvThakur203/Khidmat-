import type { CSSProperties } from 'react';
import type { CinematicIntroFrame } from '../../data/cinematicIntro';
import { LegacyPicture } from './LegacyPicture';
import './CinematicFrame.css';

interface CinematicFrameProps {
  frame: CinematicIntroFrame;
}

export function CinematicFrame({ frame }: CinematicFrameProps) {
  return (
    <div className="cinematic-frame">
      {frame.type === 'legacy-artwork' && frame.desktopSrc && frame.mobileSrc ? (
        <LegacyPicture
          desktopSrc={frame.desktopSrc}
          mobileSrc={frame.mobileSrc}
          alt={frame.alt ?? ''}
          layout="cinematic"
          loading="eager"
        />
      ) : frame.src ? (
        <div
          className="cinematic-frame__photo"
          style={{
            '--frame-pos-desktop': frame.positions?.desktop ?? 'center center',
            '--frame-pos-tablet': frame.positions?.tablet ?? frame.positions?.desktop ?? 'center center',
            '--frame-pos-mobile': frame.positions?.mobile ?? 'center center',
          } as CSSProperties}
        >
          <img src={frame.src} alt={frame.alt ?? ''} loading="eager" decoding="async" />
          <div className="cinematic-frame__photo-overlay" aria-hidden="true" />
        </div>
      ) : null}
    </div>
  );
}
