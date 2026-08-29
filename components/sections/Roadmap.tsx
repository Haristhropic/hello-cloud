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
            <ol className="roadmap-list roadmap-linear" data-reveal>
              <li>Computer</li>
              <li>Networking</li>
              <li>Linux</li>
              <li>Git</li>
              <li>Programming</li>
              <li>Cloud</li>
              <li>IAM / Security</li>
              <li>IaC</li>
              <li>Docker</li>
              <li>CI/CD</li>
              <li>Monitoring</li>
              <li>Projects</li>
              <li className="roadmap-goal" data-reveal>Internship / Junior Role</li>
            </ol>
            <p className="roadmap-note">
              Setelah itu, kamu bisa pilih spesialisasi sesuai minat.
            </p>
            <div className="special-grid" data-reveal data-reveal-grid>
              <span>Cloud Infrastructure Engineer</span>
              <span>DevOps Engineer</span>
              <span>Site Reliability Engineer (SRE)</span>
              <span>Cloud Security Engineer</span>
              <span>Platform Engineer</span>
              <span>Cloud / Infrastructure Architect</span>
              <span>FinOps / Cloud Cost Specialist</span>
              <span>Cloud Data / AI Infrastructure</span>
            </div>
            <p className="roadmap-note">
              Nama role bisa berbeda di tiap perusahaan. Fokus pada kemampuan,
              bukan hanya judulnya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}