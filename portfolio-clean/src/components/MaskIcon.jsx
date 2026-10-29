export default function MaskIcon({ className = 'w-6 h-6', color = '#E50924' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Hood silhouette */}
      <path
        d="M32 4C20 4 12 14 10 28C8 42 16 58 32 60C48 58 56 42 54 28C52 14 44 4 32 4Z"
        fill="#8E0017"
        opacity="0.3"
      />
      {/* Mask Face Contour */}
      <path
        d="M32 8C22 8 16 17 15 29C14 41 21 54 32 56C43 54 50 41 49 29C48 17 42 8 32 8Z"
        fill="#111317"
        stroke={color}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Eyebrows */}
      <path
        d="M20 22C24 19 28 21 28 21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M44 22C40 19 36 21 36 21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Eyes */}
      <ellipse cx="23" cy="26" rx="3.5" ry="2.2" fill={color} />
      <ellipse cx="41" cy="26" rx="3.5" ry="2.2" fill={color} />
      {/* Nose */}
      <path
        d="M32 24V35L30 37H34L32 35"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Iconic Upturned Salvador Dali Mustache */}
      <path
        d="M17 34C22 37 28 38 32 39C36 38 42 37 47 34C51 31 52 27 50 24C49 27 45 32 38 37C34 38 30 38 26 37C19 32 15 27 14 24C12 27 13 31 17 34Z"
        fill={color}
      />
      {/* Lips */}
      <path
        d="M28 44C30 45.5 34 45.5 36 44"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Chin accent */}
      <path
        d="M30 50C31 50.8 33 50.8 34 50"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
