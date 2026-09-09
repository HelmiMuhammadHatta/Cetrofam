export function JavaMap() {
  return (
    <svg viewBox="0 0 800 300" className="w-full h-auto drop-shadow-2xl" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Abstract Java Island Shape */}
      <path 
        d="M 100 150 C 150 120, 250 140, 300 160 C 350 180, 450 190, 550 160 C 650 130, 700 150, 750 180 C 720 220, 600 240, 500 220 C 400 200, 300 230, 200 200 C 150 180, 80 180, 100 150 Z" 
        fill="#2F7A45" 
        stroke="#C9A227" 
        strokeWidth="2"
      />
      
      {/* Bandung (Rep) */}
      <g transform="translate(250, 160)">
        <circle cx="0" cy="0" r="8" fill="#E08A2B" className="animate-pulse" />
        <circle cx="0" cy="0" r="16" fill="#E08A2B" opacity="0.4" className="animate-ping" />
        <text x="-20" y="-15" fill="#FAF7EF" fontSize="14" fontWeight="bold" className="drop-shadow-md">Bandung</text>
      </g>
      
      {/* Semarang (HQ) */}
      <g transform="translate(450, 175)">
        <circle cx="0" cy="0" r="10" fill="#C9A227" className="animate-pulse" />
        <circle cx="0" cy="0" r="20" fill="#C9A227" opacity="0.4" className="animate-ping" />
        <text x="-30" y="-18" fill="#FAF7EF" fontSize="16" fontWeight="bold" className="drop-shadow-md">Semarang (HQ)</text>
      </g>
    </svg>
  )
}
