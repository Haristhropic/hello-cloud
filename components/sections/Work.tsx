export default function Work() {
  return (
    <section id="kerja" className="section section-tint">
      <div className="page-container">
        <h2 data-reveal>Cloud Engineer kerjanya ngapain?</h2>
        <p className="lead" data-reveal>
          Singkatnya: membantu perusahaan{" "}
          <strong>menjalankan layanan digital di cloud</strong> agar aman,
          stabil, cepat, dan berkembang.
        </p>

        <div className="section-photo-card" data-reveal>
          <div className="photo-frame">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
              alt="Suasana kerja santai seorang engineer di depan layar"
              loading="lazy"
            />
          </div>
          <p className="photo-caption">
            <span>[KASUS NYATA]</span> Suasana kerja sehari-hari: santai, fokus pada problem solving, tanpa harus mengenakan jas formal.
          </p>
        </div>

        <div className="grid-5" data-reveal data-reveal-grid>
          <article className="card card-work">
            <div className="work-num" aria-hidden="true">
              1
            </div>
            <h3>Membangun</h3>
            <p>
              Menyiapkan server, jaringan, storage, dan layanan cloud supaya
              aplikasi bisa berjalan.
            </p>
          </article>
          <article className="card card-work">
            <div className="work-num" aria-hidden="true">
              2
            </div>
            <h3>Mengamankan</h3>
            <p>
              Mengatur siapa yang boleh akses, mengelola identitas, backup, dan
              praktik keamanan.
            </p>
          </article>
          <article className="card card-work">
            <div className="work-num" aria-hidden="true">
              3
            </div>
            <h3>Mengotomatisasi</h3>
            <p>
              Mengubah pekerjaan berulang menjadi script atau tool yang jalan
              sendiri.
            </p>
          </article>
          <article className="card card-work">
            <div className="work-num" aria-hidden="true">
              4
            </div>
            <h3>Memantau</h3>
            <p>
              Melihat performa sistem dan menemukan masalah sebelum berdampak
              besar.
            </p>
          </article>
          <article className="card card-work">
            <div className="work-num" aria-hidden="true">
              5
            </div>
            <h3>Mengoptimalkan</h3>
            <p>
              Mencari cara agar sistem lebih andal dan biaya cloud lebih
              efisien.
            </p>
          </article>
        </div>

        <h3 className="block-title" data-reveal>Contoh aktivitas, bukan jadwal baku</h3>
        <ol
          className="timeline"
          data-reveal
          aria-label="Contoh aktivitas satu hari Cloud Engineer"
        >
          <li>
            <strong>09:00</strong>
            <span>Cek monitoring dan kondisi sistem</span>
          </li>
          <li>
            <strong>10:00</strong>
            <span>Deploy perubahan aplikasi</span>
          </li>
          <li>
            <strong>11:00</strong>
            <span>Review keamanan dan hak akses</span>
          </li>
          <li>
            <strong>13:00</strong>
            <span>Troubleshooting masalah yang muncul</span>
          </li>
          <li>
            <strong>15:00</strong>
            <span>Menulis automation untuk tugas berulang</span>
          </li>
          <li>
            <strong>16:00</strong>
            <span>Dokumentasi dan review pekerjaan</span>
          </li>
        </ol>
      </div>
    </section>
  );
}