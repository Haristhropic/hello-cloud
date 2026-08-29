export default function Why() {
  return (
    <section id="kenapa" className="section">
      <div className="page-container">
        <h2>Kenapa perusahaan butuh Cloud Engineer?</h2>
        <p className="lead">
          Bukan soal &quot;urus awan&quot;. Ini tentang menjaga layanan digital
          tetap hidup dan bermanfaat.
        </p>

        <div className="grid-6">
          <article className="card card-reason">
            <h3>Website harus bisa diakses banyak pengguna</h3>
            <p>Semakin ramai, server harus tetap sanggup melayani tanpa lemot.</p>
          </article>
          <article className="card card-reason">
            <h3>Aplikasi tetap hidup saat traffic naik</h3>
            <p>
              Sistem bisa menambah kapasitas sendiri saat kebutuhan meningkat.
            </p>
          </article>
          <article className="card card-reason">
            <h3>Data perlu disimpan dan dilindungi</h3>
            <p>Data penting tidak boleh hilang atau bocor ke pihak yang salah.</p>
          </article>
          <article className="card card-reason">
            <h3>Perusahaan ingin meluncurkan produk lebih cepat</h3>
            <p>
              Cloud memungkinkan tim mencoba dan merilis fitur baru dengan
              cepat.
            </p>
          </article>
          <article className="card card-reason">
            <h3>Sistem perlu dipantau dan dipulihkan</h3>
            <p>
              Ketika ada masalah, layanan bisa diperbaiki dan dihidupkan
              kembali.
            </p>
          </article>
          <article className="card card-reason">
            <h3>Biaya infrastruktur harus terkendali</h3>
            <p>
              Menggunakan cloud secara pintar berarti tidak membayar lebih dari
              kebutuhan.
            </p>
          </article>
        </div>

        <h3 className="block-title">Cloud Engineer bekerja di semua industri</h3>
        <ul className="industry-tags" aria-label="Industri yang membutuhkan Cloud Engineer">
          <li>Banking &amp; Fintech</li>
          <li>E-commerce</li>
          <li>Telekomunikasi</li>
          <li>Game</li>
          <li>Media</li>
          <li>Kesehatan</li>
          <li>Manufaktur</li>
          <li>Pendidikan</li>
          <li>Pemerintahan</li>
          <li>Startup / SaaS</li>
        </ul>
      </div>
    </section>
  );
}