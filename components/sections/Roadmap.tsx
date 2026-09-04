export default function Roadmap() {
  return (
    <section id="roadmap" className="section">
      <div className="page-container">
        <h2 data-reveal>Roadmap belajar Cloud Engineer</h2>
        <p className="lead" data-reveal>
          Dua jalur sesuai posisimu sekarang. Pilih yang paling mendekati
          keadaanmu.
        </p>

        <div className="roadmap-tabs">
          <input type="radio" name="roadmap" id="tab-smp" defaultChecked />
          <input type="radio" name="roadmap" id="tab-serius" />
          <div className="tab-labels">
            <label htmlFor="tab-smp">Saya masih SMP</label>
            <label htmlFor="tab-serius">Saya sudah SMA / Kuliah</label>
          </div>

          <div className="tab-panel panel-smp">
            <h3 className="block-title" data-reveal>Jalur &quot;Saya masih SMP&quot;</h3>
            <ol className="roadmap-list" data-reveal>
              <li>
                <div className="roadmap-step">
                  <h4>Kenal komputer</h4>
                  <p>
                    Cara kerja komputer, internet, file, sistem operasi, dan
                    troubleshooting dasar.
                  </p>
                  <p className="mini-project">
                    <strong>Mini project:</strong> Buat halaman website sederhana
                    dan pahami alur request/response.
                  </p>
                </div>
              </li>
              <li>
                <div className="roadmap-step">
                  <h4>Kenal jaringan</h4>
                  <p>IP, DNS, HTTP, dan hubungan client/server.</p>
                  <p className="mini-project">
                    <strong>Mini project:</strong> Cari tahu perjalanan data saat
                    kamu membuka sebuah website.
                  </p>
                </div>
              </li>
              <li>
                <div className="roadmap-step">
                  <h4>Kenal Linux</h4>
                  <p>
                    Terminal dan filesystem, cara berinteraksi dengan server
                    lewat perintah teks.
                  </p>
                  <p className="mini-project">
                    <strong>Mini project:</strong> Jalankan web server lokal
                    sederhana.
                  </p>
                </div>
              </li>
              <li>
                <div className="roadmap-step">
                  <h4>Kenal cloud</h4>
                  <p>Cloud fundamentals dan layanan inti dari satu provider.</p>
                  <p className="mini-project">
                    <strong>Mini project:</strong> Deploy website statis ke cloud.
                  </p>
                </div>
              </li>
              <li>
                <div className="roadmap-step">
                  <h4>Automation</h4>
                  <p>
                    Git dan dasar Python atau Bash untuk mengotomatisasi
                    pekerjaan berulang.
                  </p>
                  <p className="mini-project">
                    <strong>Mini project:</strong> Buat script kecil untuk tugas
                    yang berulang.
                  </p>
                </div>
              </li>
              <li>
                <div className="roadmap-step">
                  <h4>Bangun portfolio</h4>
                  <p>
                    Gabungkan semua yang sudah dipelajari dalam 2 sampai 3
                    project kecil.
                  </p>
                  <p className="mini-project">
                    <strong>Mini project:</strong> Dokumentasikan project-projectmu
                    di GitHub.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="tab-panel panel-serius">
            <h3 className="block-title" data-reveal>Jalur &quot;Saya sudah SMA / Kuliah&quot;</h3>
            <p className="roadmap-intro" data-reveal>
              Kamu sudah biasa pakai komputer dan internet. Sekarang tinggal
              menambah kemampuan teknisnya satu per satu — dari fondasi sampai
              siap melamar kerja.
            </p>
            <ol className="roadmap-list" data-reveal>
              <li>
                <div className="roadmap-step">
                  <h4>Dasar komputer &amp; jaringan</h4>
                  <p>
                    IP, DNS, HTTP, dan cara data berpindah dari server ke layar
                    kamu saat membuka sebuah website.
                  </p>
                  <p className="mini-project">
                    <strong>Mini project:</strong> Telusuri perjalanan data saat
                    kamu membuka website favoritmu.
                  </p>
                </div>
              </li>
              <li>
                <div className="roadmap-step">
                  <h4>Linux &amp; terminal</h4>
                  <p>
                    Bekerja dengan server lewat perintah teks, bukan klik-klik —
                    keterampilan harian semua engineer cloud.
                  </p>
                  <p className="mini-project">
                    <strong>Mini project:</strong> Jalankan web server lokal dan
                    buka dari browser.
                  </p>
                </div>
              </li>
              <li>
                <div className="roadmap-step">
                  <h4>Git &amp; pemrograman</h4>
                  <p>
                    Git untuk menyimpan dan melacak perubahan kode; Python atau
                    Bash untuk mengotomatiskan pekerjaan berulang.
                  </p>
                  <p className="mini-project">
                    <strong>Mini project:</strong> Buat script kecil yang
                    mengerjakan tugas berulang untukmu.
                  </p>
                </div>
              </li>
              <li>
                <div className="roadmap-step">
                  <h4>Cloud &amp; keamanan dasar</h4>
                  <p>
                    Layanan inti dari satu provider cloud, plus aturan akses
                    (IAM): siapa boleh melihat dan mengubah apa.
                  </p>
                  <p className="mini-project">
                    <strong>Mini project:</strong> Deploy website statis ke cloud
                    dengan akses yang dibatasi.
                  </p>
                </div>
              </li>
              <li>
                <div className="roadmap-step">
                  <h4>IaC &amp; Docker</h4>
                  <p>
                    IaC (&quot;infrastruktur sebagai kode&quot;) mengatur server
                    lewat file, bukan klik manual. Docker membungkus aplikasi
                    agar jalan konsisten di mana saja.
                  </p>
                  <p className="mini-project">
                    <strong>Mini project:</strong> Definisikan infrastruktur
                    dengan kode dan jalankan aplikasi di dalam container.
                  </p>
                </div>
              </li>
              <li>
                <div className="roadmap-step">
                  <h4>CI/CD &amp; monitoring</h4>
                  <p>
                    Pipeline yang menguji dan mengirim kode secara otomatis, lalu
                    memantau apakah aplikasi tetap sehat.
                  </p>
                  <p className="mini-project">
                    <strong>Mini project:</strong> Buat alur deploy otomatis dan
                    cek kesehatannya secara berkala.
                  </p>
                </div>
              </li>
              <li>
                <div className="roadmap-step">
                  <h4>Proyek &amp; portofolio</h4>
                  <p>
                    Gabungkan semua kemampuan dalam 2 sampai 3 proyek kecil, lalu
                    dokumentasikan di GitHub sebagai bukti kerja.
                  </p>
                  <p className="mini-project">
                    <strong>Mini project:</strong> Rangkai proyek-proyekmu jadi
                    satu portofolio yang bisa ditunjukkan ke recruiter.
                  </p>
                </div>
              </li>
              <li className="roadmap-goal" data-reveal>
                <div className="roadmap-step">
                  <h4>Internship / Junior Role</h4>
                  <p>
                    Kamu sudah punya fondasi dan bukti kerja. Saatnya melamar
                    posisi pertama dan terus belajar di tempat kerja.
                  </p>
                </div>
              </li>
            </ol>
            <div className="special-panel" data-reveal>
              <p className="special-head">
                <span className="special-kicker">Spesialisasi setelah fondasi</span>
              </p>
              <div className="special-grid" data-reveal-grid>
                <span>Cloud Infrastructure Engineer</span>
                <span>DevOps Engineer</span>
                <span>Site Reliability Engineer (SRE)</span>
                <span>Cloud Security Engineer</span>
                <span>Platform Engineer</span>
                <span>Cloud / Infrastructure Architect</span>
                <span>FinOps / Cloud Cost Specialist</span>
                <span>Cloud Data / AI Infrastructure</span>
              </div>
              <p className="special-note">
                Nama role bisa berbeda di tiap perusahaan. Fokus pada kemampuan,
                bukan hanya judulnya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}