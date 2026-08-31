export const metadata = { title: "Tentang Kami — Cetrofarm" };

export default function Tentang() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm text-soil">Tentang Kami</p>
      <h1 className="mt-3 max-w-2xl font-display text-4xl text-forest md:text-5xl">
        Kami memulai dari satu pertanyaan sederhana: siapa yang menanam makanan kita?
      </h1>

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <div className="space-y-5 text-ink/80 leading-relaxed">
          <p>
            Cetrofarm berdiri di Bergas, Kabupaten Semarang, dari kegelisahan
            yang sama dengan banyak keluarga Indonesia: sulit tahu dari mana
            sebenarnya sayur, susu, dan telur yang sampai di meja makan
            berasal.
          </p>
          <p>
            PT. Cetro Tama Indonesia — nama resmi di balik Cetrofarm — memilih
            jalan yang lebih lambat namun lebih jujur: mendampingi petani
            sayur, peternak domba dan sapi perah, serta peternak ayam di
            sekitar Bergas secara langsung, alih-alih membeli hasil panen
            dari pasar tanpa jejak.
          </p>
          <p>
            Hasilnya adalah ekosistem tertutup — dari lahan, ke gudang
            standarisasi, ke rantai distribusi dingin, sampai ke keranjang
            belanja pelanggan — yang bisa kami pertanggungjawabkan di setiap
            titiknya.
          </p>
        </div>

        <div className="space-y-8">
          <div className="border-l-2 border-gold pl-6">
            <p className="font-display text-xl text-forest">Yang kami percaya</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">
              Pertanian yang sehat untuk konsumen harus dimulai dari petani
              yang sejahtera dan lahan yang dirawat, bukan sebaliknya.
            </p>
          </div>
          <div className="border-l-2 border-soil pl-6">
            <p className="font-display text-xl text-forest">Bagaimana kami bekerja</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">
              Pendampingan teknis, standar organik bersertifikat, dan kontrol
              mutu di setiap tahap — bukan sekadar label di kemasan.
            </p>
          </div>
          <div className="border-l-2 border-forest pl-6">
            <p className="font-display text-xl text-forest">Ke mana kami menuju</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">
              Memperluas jaringan petani binaan ke luar Jawa Tengah, dengan
              mitra yang punya visi jangka panjang yang sama.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
