export default function FAQ() {
  return (
    <section id="faq" className="section section-tint">
      <div className="page-container page-container-narrow">
        <h2>Pertanyaan yang sering diajukan</h2>

        <div className="faq-list">
          <details className="faq-item">
            <summary>Apakah Cloud Engineer sama dengan programmer?</summary>
            <p>
              Berhubungan, tetapi tidak sama. Programmer fokus menulis kode
              aplikasi. Cloud Engineer mengurus infrastruktur tempat aplikasi
              itu berjalan. Banyak Cloud Engineer bisa menulis script, tetapi
              peran utamanya adalah menjaga sistem tetap jalan, aman, dan
              efisien.
            </p>
          </details>
          <details className="faq-item">
            <summary>Apakah harus jago matematika?</summary>
            <p>
              Tidak perlu matematika tingkat tinggi untuk mulai. Matematika
              membantu cara berpikir logis dan memecahkan masalah, tetapi itu
              bisa dipelajari seiring waktu.
            </p>
          </details>
          <details className="faq-item">
            <summary>Apakah harus bisa coding?</summary>
            <p>
              Tidak harus mahir sejak awal. Namun scripting atau programming
              dasar sangat berguna, terutama untuk automation dan memahami
              cara kerja sistem.
            </p>
          </details>
          <details className="faq-item">
            <summary>Apakah anak SMP bisa belajar cloud?</summary>
            <p>
              Bisa. Fokus pada fundamental dan project kecil seperti membuat
              halaman website atau memahami internet. Jangan buru-buru mengejar
              topik advanced atau sertifikasi.
            </p>
          </details>
          <details className="faq-item">
            <summary>Apakah harus punya laptop mahal?</summary>
            <p>
              Tidak untuk mulai. Teori, Linux dasar, networking, dan Git bisa
              dipelajari di laptop biasa. Untuk praktik cloud, pakai free tier
              dengan hati-hati dan periksa harga resminya.
            </p>
          </details>
          <details className="faq-item">
            <summary>Apakah cloud itu gratis?</summary>
            <p>
              Sebagian layanan punya free usage atau credits, tetapi tidak
              semua aktivitas gratis. Selalu perhatikan potensi biaya dan
              hentikan resource setelah selesai dipakai.
            </p>
          </details>
          <details className="faq-item">
            <summary>
              Apakah harus belajar AWS, Azure, dan Google Cloud sekaligus?
            </summary>
            <p>
              Tidak. Pilih satu dulu, pahami konsep yang bisa dipindahkan
              (transferable), baru eksplor provider lain. Konsepnya mirip, nama
              layanannya yang berbeda.
            </p>
          </details>
          <details className="faq-item">
            <summary>Sertifikasi apa yang paling bagus?</summary>
            <p>
              Tidak ada yang universal. Pilih sesuai tujuan, pengalaman, dan
              platform yang ingin kamu dalami. Sertifikasi adalah alat
              validasi, bukan tiket wajib masuk.
            </p>
          </details>
          <details className="faq-item">
            <summary>Apakah Cloud Engineer akan digantikan AI?</summary>
            <p>
              AI mengubah cara kerja, bukan menghilangkan profesinya. Kemampuan
              memahami sistem, keamanan, biaya, reliability, dan problem
              solving tetap dibutuhkan manusia.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}