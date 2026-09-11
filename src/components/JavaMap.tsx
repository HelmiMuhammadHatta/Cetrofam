export interface LocationNode {
  name: string;
  type: 'HQ' | 'Rep' | 'Hub Binaan';
  desc: string;
  coordinates: { x: number; y: number };
}

export const activeNodes: LocationNode[] = [
  { name: "Semarang", type: "HQ", desc: "Kantor Utama, R&D & Central Warehouse (100+ Kelompok Tani)", coordinates: { x: 450, y: 165 } },
  { name: "Bandung", type: "Rep", desc: "Perwakilan Komersial & Distribusi Jawa Barat", coordinates: { x: 230, y: 155 } },
  { name: "Kendal & Demak", type: "Hub Binaan", desc: "Sentra Budidaya Sayuran Daun & Root", coordinates: { x: 430, y: 155 } },
  { name: "Magelang & Solo", type: "Hub Binaan", desc: "Sentra Budidaya Ubi Madu & Peternakan Ayam", coordinates: { x: 470, y: 185 } }
];

export function JavaMap() {
  return (
    <div className="w-full relative">
      <svg viewBox="0 0 800 320" className="w-full h-auto drop-shadow-2xl" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Decorative Grid */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FAF7EF" strokeWidth="0.5" opacity="0.1" />
          </pattern>
        </defs>
        <rect width="800" height="320" fill="url(#grid)" />

        {/* Java Island Outline */}
        <path 
          d="M 80 145 
             C 120 120, 200 135, 260 140 
             C 320 145, 380 140, 440 150 
             C 500 160, 560 145, 620 140 
             C 680 135, 740 150, 770 175 
             C 740 215, 660 230, 580 220 
             C 500 210, 420 225, 340 220 
             C 260 215, 180 205, 120 190 
             C 90 175, 70 160, 80 145 Z" 
          fill="#2F7A45" 
          stroke="#C9A227" 
          strokeWidth="2.5"
          className="transition-all duration-300"
        />

        {/* Outer Sea/Region Context Labels */}
        <text x="380" y="90" fill="#FAF7EF" opacity="0.4" fontSize="12" fontWeight="bold" letterSpacing="4">LAUT JAWA</text>
        <text x="380" y="270" fill="#FAF7EF" opacity="0.4" fontSize="12" fontWeight="bold" letterSpacing="4">SAMUDRA HINDIA</text>

        {/* Node 1: Bandung (Rep Office) */}
        <g transform="translate(230, 155)" className="group cursor-pointer">
          <circle cx="0" cy="0" r="18" fill="#E08A2B" opacity="0.25" className="animate-ping" />
          <circle cx="0" cy="0" r="7" fill="#E08A2B" stroke="#FAF7EF" strokeWidth="2" />
          <text x="-25" y="-14" fill="#FAF7EF" fontSize="13" fontWeight="bold" className="drop-shadow-md">Bandung (Rep)</text>
        </g>

        {/* Node 2: Kendal & Demak */}
        <g transform="translate(430, 155)" className="group cursor-pointer">
          <circle cx="0" cy="0" r="5" fill="#FAF7EF" stroke="#C9A227" strokeWidth="1.5" />
          <text x="-35" y="-12" fill="#FAF7EF" fontSize="11" opacity="0.9">Kendal & Demak</text>
        </g>

        {/* Node 3: Semarang (HQ Main Hub) */}
        <g transform="translate(460, 168)" className="group cursor-pointer">
          <circle cx="0" cy="0" r="22" fill="#C9A227" opacity="0.3" className="animate-ping" />
          <circle cx="0" cy="0" r="9" fill="#C9A227" stroke="#14532D" strokeWidth="2" />
          <text x="-40" y="-16" fill="#C9A227" fontSize="15" fontWeight="bold" className="drop-shadow-lg">Semarang (HQ)</text>
        </g>

        {/* Node 4: Magelang & Solo */}
        <g transform="translate(480, 192)" className="group cursor-pointer">
          <circle cx="0" cy="0" r="5" fill="#FAF7EF" stroke="#C9A227" strokeWidth="1.5" />
          <text x="12" y="4" fill="#FAF7EF" fontSize="11" opacity="0.9">Magelang & Solo</text>
        </g>

        {/* Connection Arcs */}
        <path d="M 230 155 Q 345 130 460 168" fill="none" stroke="#C9A227" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.7" />
      </svg>
    </div>
  );
}
