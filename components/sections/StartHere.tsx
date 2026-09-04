export default function StartHere() {
  return (
    <section id="mulai" className="section section-tint">
      <div className="page-container">
          <h2 data-reveal>Saya masih SMP: mulai dari mana?</h2>
        <p className="lead" data-reveal>
          Kabar baiknya: kamu tidak perlu langsung belajar AWS selama
          berjam-jam. Mulai dari hal yang dekat dengan kehidupanmu sehari-hari.
        </p>

        <div className="section-photo-card" data-reveal>
          <div className="photo-frame">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt="Siswa muda santai belajar bersama di depan laptop"
              loading="lazy"
            />
          </div>
          <p className="photo-caption">
            <span>[MULAI SANTAI]</span> Memulai tidak harus menegangkan — cukup rasa ingin tahu dan langkah kecil setiap hari.
          </p>
        </div>

        <div className="start-grid" data-reveal data-reveal-grid>
          <article className="card start-card">
            <div className="start-num" aria-hidden="true">
              1
            </div>
            <h3>Explore cara kerja komputermu</h3>
            <p>
              Buka file explorer, lihat folder, pahami apa itu sistem operasi.
              Ini fondasi yang paling sederhana.
            </p>
          </article>
          <article className="card start-card">
            <div className="start-num" aria-hidden="true">
              2
            </div>
            <h3>Pahami perjalanan internet</h3>
            <p>
              Ketika kamu membuka website, apa yang sebenarnya terjadi? Cari
              tahu tentang IP, DNS, dan HTTP.
            </p>
          </article>
          <article className="card start-card">
            <div className="start-num" aria-hidden="true">
              3
            </div>
            <h3>Coba terminal</h3>
            <p>
              Di laptop, coba buka Command Prompt atau terminal. Ketik perintah
              sederhana seperti melihat daftar file.
            </p>
          </article>
          <article className="card start-card">
            <div className="start-num" aria-hidden="true">
              4
            </div>
            <h3>Buat halaman website pertamamu</h3>
            <p>
              HTML dan CSS sederhana saja. Ini cara terbaik memahami bagaimana
              website dibangun.
            </p>
          </article>
          <article className="card start-card">
            <div className="start-num" aria-hidden="true">
              5
            </div>
            <h3>Belajar logika dan scripting ringan</h3>
            <p>
              Python atau Scratch bisa jadi jembatan. Fokus pada pola berpikir,
              bukan menghafal bahasa.
            </p>
          </article>
          <article className="card start-card">
            <div className="start-num" aria-hidden="true">
              6
            </div>
            <h3>Jangan buru-buru sertifikasi</h3>
            <p>
              Fundamental dan project kecil lebih berharga di usiamu. Sertifikasi
              bisa diambil nanti, setelah paham dasar.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}