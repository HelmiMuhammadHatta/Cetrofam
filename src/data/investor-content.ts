export const investorMetrics = {
  farmers: "210+ Petani Binaan",
  farmersSource: "Data internal, Q2 2026",
  landArea: "340 Hektar",
  landAreaSource: "Data internal, Q2 2026",
  harvestVolume: "150 Ton/Bulan",
  harvestVolumeSource: "Data internal, Q2 2026",
  distributionReach: "Jawa & Bali",
  distributionReachSource: "Distribusi B2B 2026",
  growthYoY: "45%",
  growthYoYSource: "Pertumbuhan YoY Q2 2026",
  offtakerRetention: "92%",
  offtakerRetentionSource: "Retensi Kontrak B2B Q2 2026"
};

export const marketSizeData = {
  tam: { value: "Rp 3,2 Triliun", label: "TAM (Total Kebutuhan Sayuran & Beras Jateng)", percent: "100%", source: "BPS Jateng & Riset Internal 2025" },
  sam: { value: "Rp 450 Miliar", label: "SAM (Pasar B2B Premium & Ritel Modern)", percent: "14%", source: "Proyeksi Pasar B2B 2026" },
  som: { value: "Rp 65 Miliar", label: "SOM (Target Penetrasi Cetrofarm 3-5 Tahun)", percent: "2%", source: "Target Rencana Bisnis 2026-2029" }
};

export const businessModelDiagram = [
  {
    stage: "Hulu (Sourcing)",
    title: "Contract Farming & Greenhouses",
    desc: "Mitra binaan di 5 kabupaten & lahan greenhouse terpusat.",
    highlight: "HPP Terkunci (Fix Price)",
    color: "bg-forest/10 text-forest"
  },
  {
    stage: "Tengah (Processing)",
    title: "Sorting, Cold Storage & Packaging",
    desc: "Warehouse terpusat dengan quality control barcode batch.",
    highlight: "Post-Harvest Loss < 5%",
    color: "bg-wheat/20 text-forest"
  },
  {
    stage: "Hilir (Revenue)",
    title: "Distribusi B2B & Modern Retail",
    desc: "70% B2B Offtaker, 20% Modern Retail, 10% Horeca.",
    highlight: "Gross Margin 28-35%",
    color: "bg-forest text-cream"
  }
];

export const tractionData = [
  { quarter: 'Q1 2025', volumeTon: 85, revenue: 1.2 },
  { quarter: 'Q2 2025', volumeTon: 98, revenue: 1.45 },
  { quarter: 'Q3 2025', volumeTon: 110, revenue: 1.7 },
  { quarter: 'Q4 2025', volumeTon: 125, revenue: 1.95 },
  { quarter: 'Q1 2026', volumeTon: 140, revenue: 2.2 },
  { quarter: 'Q2 2026', volumeTon: 150, revenue: 2.45 }
];

export const unitEconomics = [
  {
    metric: "COGS / HPP Petani",
    sayuran: "60%",
    protein: "72%",
    notes: "Termasuk benih unggul, pupuk organik, dan upah tanam."
  },
  {
    metric: "Processing & Logistik",
    sayuran: "12%",
    protein: "10%",
    notes: "Pengemasan higienis, cold chain transport, & toleransi shrink."
  },
  {
    metric: "Gross Margin (Kotor)",
    sayuran: "28%",
    protein: "18%",
    notes: "Margin sebelum biaya operasional umum (OPEX)."
  },
  {
    metric: "Cash Conversion Cycle",
    sayuran: "14-30 Hari",
    protein: "30-45 Hari",
    notes: "Jangka waktu pembayaran (Term of Payment) mitra B2B."
  },
  {
    metric: "Titik Impas (Break-Even)",
    sayuran: "18 Bulan",
    protein: "18 Bulan",
    notes: "Est. pemulihan modal investasi awal pada level fasilitas."
  }
];

export const fundAllocation = [
  { category: "Capex (Cold Storage & Logistics)", percentage: 45, detail: "Pembangunan gudang pendingin 200 ton di Semarang & armada cold chain.", color: "#14532D" },
  { category: "Ekspansi Lahan & Petani Binaan", percentage: 30, detail: "Onboarding 300+ petani binaan baru & akuisisi sewa lahan greenhouse.", color: "#C9A227" },
  { category: "R&D, ERP Traceability & Working Capital", percentage: 25, detail: "Upgrade sistem barcode batch, bridging payment B2B & sertifikasi.", color: "#E08A2B" }
];

export const investorMilestones = [
  { period: "Q3-Q4 2026", title: "Pembangunan Cold Hub Semarang", desc: "Penyelesaian gudang pendingin 200 ton dan penambahan 100 petani binaan." },
  { period: "Q1-Q2 2027", title: "Penetrasi Ritel Jawa Barat", desc: "Ekspansi jaringan distribusi B2B ke Jabodetabek dan wilayah Jawa Barat." },
  { period: "Q3-Q4 2027", title: "Sertifikasi Ekspor & Olahan", desc: "Persiapan varian olahan komoditas dan uji coba ekspor ubi madu ke Asia Tenggara." }
];

export const riskManagement = [
  {
    risk: "Risiko Cuaca Ekstrem & Iklim",
    impact: "Tinggi",
    mitigation: "Diversifikasi geografis lahan binaan di 5 kabupaten berbeda dan migrasi tanaman rentan ke sistem Greenhouse."
  },
  {
    risk: "Fluktuasi Harga Komoditas",
    impact: "Sedang",
    mitigation: "Mengunci kontrak harga beli (HPP Fix Price) dengan petani dan harga jual B2B per 3-6 bulan."
  },
  {
    risk: "Risiko Gagal Bayar Offtaker (NPL)",
    impact: "Sedang",
    mitigation: "Asuransi piutang dagang, due diligence finansial ketat, serta pembatasan exposure maksimal 15% revenue per klien."
  },
  {
    risk: "Kerusakan Rantai Dingin (Cold Chain)",
    impact: "Tinggi",
    mitigation: "Sensor suhu IoT real-time pada kendaraan logistik dan prosedur SOP mitigasi pengiriman cadangan."
  },
  {
    risk: "Perubahan Standar Regulasi & Sertifikasi",
    impact: "Rendah",
    mitigation: "Tim internal khusus compliance yang memantau pembaharuan aturan SNI Organik, NKV, dan Halal MUI secara berkala."
  }
];

export const advisoryBoard = [
  { name: "Dr. Ir. Heru Susanto, M.Sc.", role: "Penasihat Agronomi & Teknologi Lahan", desc: "Pakar ilmu tanah dan sistem pertanian presisi dengan 25+ tahun pengalaman riset agrikultur." },
  { name: "Siti Rahmawati, S.E., M.B.A.", role: "Penasihat Keuangan & M&A Agribisnis", desc: "Mantan eksekutif perbankan yang mengandungi bidang restrukturisasi dan pendanaan sektor riil." }
];
