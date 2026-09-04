import './DelhiSilhouette.css';

export function DelhiSilhouette() {
  return (
    <svg
      className="delhi-silhouette"
      viewBox="0 0 800 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <title>Delhi heritage skyline</title>
      {/* India Gate inspired */}
      <path
        d="M60 100V50h8v50M52 58h24M48 66h32M44 74h40M92 100V50h8v50M84 58h24M80 66h32M76 74h40"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.4"
      />
      {/* Mughal arch */}
      <path
        d="M180 100V70c0-12 10-22 22-22s22 10 22 22v30M192 48v-8M212 48v-8"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.35"
      />
      <path
        d="M192 48c-8 0-14 6-14 14M224 48c8 0 14 6 14 14"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.25"
      />
      {/* Qutub Minar inspired */}
      <path
        d="M320 100V20l6-8 6 8v80M326 35h-4M326 50h-4M326 65h-4"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.4"
      />
      {/* Dome */}
      <path
        d="M420 100V65c0-14 12-25 26-25s26 11 26 25v35M446 40c-10 0-18 8-18 18"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.35"
      />
      <ellipse cx="446" cy="40" rx="18" ry="8" stroke="currentColor" strokeWidth="0.6" opacity="0.25" />
      {/* Jama Masjid inspired minarets */}
      <path
        d="M560 100V45l4-6 4 6v55M572 100V45l4-6 4 6v55"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.35"
      />
      <path
        d="M548 100h40M544 75h48"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.25"
      />
      {/* Lotus Temple inspired */}
      <path
        d="M700 100c0-30 8-50 20-60 12 10 20 30 20 60"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.3"
      />
      <path
        d="M688 85c6-8 12-8 18 0M694 70c6-8 12-8 18 0"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.2"
      />
      {/* Ground line */}
      <line x1="20" y1="100" x2="780" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
    </svg>
  );
}
