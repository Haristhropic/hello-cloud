export default function Cloud() {
  return (
    <section id="cloud" className="section">
      <div className="page-container">
        <h2>Cloud bukan tempat data melayang di langit</h2>
        <p className="lead">
          Cloud adalah cara{" "}
          <strong>menggunakan komputer dan layanan digital milik penyedia</strong>{" "}
          melalui internet, bukan harus memiliki semua mesin sendiri.
        </p>

        <h3 className="block-title">Kamu sebenarnya sudah memakai cloud</h3>
        <div className="grid-3">
          <article className="card">
            <h4>Google Drive</h4>
            <p>
              File kamu tersimpan di server Google, bukan di hard disk yang
              kamu pegang.
            </p>
          </article>
          <article className="card">
            <h4>Streaming video</h4>
            <p>
              Tidak setiap rumah perlu punya server film sendiri. Videonya
              datang lewat internet.
            </p>
          </article>
          <article className="card">
            <h4>Game online</h4>
            <p>
              Game butuh komputer server yang selalu menyala supaya kamu bisa
              main kapan saja.
            </p>
          </article>
        </div>

        <h3 className="block-title">Enam konsep inti cloud</h3>
        <div className="grid-3">
          <article className="card card-concept">
            <h4>Compute</h4>
            <p>
              <strong>&quot;Tenaga komputer.&quot;</strong> Mesin virtual yang
              menjalankan aplikasi dan website.
            </p>
          </article>
          <article className="card card-concept">
            <h4>Storage</h4>
            <p>
              <strong>&quot;Tempat menyimpan data.&quot;</strong> Seperti hard
              disk raksasa di internet.
            </p>
          </article>
          <article className="card card-concept">
            <h4>Database</h4>
            <p>
              <strong>&quot;Lemari data yang teratur.&quot;</strong> Menyimpan
              informasi agar cepat dicari.
            </p>
          </article>
          <article className="card card-concept">
            <h4>Networking</h4>
            <p>
              <strong>&quot;Jalan yang menghubungkan sistem.&quot;</strong> Cara
              antar komputer saling bicara.
            </p>
          </article>
          <article className="card card-concept">
            <h4>Security / IAM</h4>
            <p>
              <strong>&quot;Siapa boleh masuk dan melakukan apa.&quot;</strong>{" "}
              Aturan akses dan keamanan data.
            </p>
          </article>
          <article className="card card-concept">
            <h4>Monitoring</h4>
            <p>
              <strong>&quot;Melihat kesehatan sistem.&quot;</strong> Memantau
              apakah semuanya berjalan baik.
            </p>
          </article>
        </div>

        <details className="progressive">
          <summary>Kenalan dengan model cloud dan model layanan</summary>
          <div className="progressive-body">
            <div className="mini-grid">
              <div className="mini-card">
                <h4>Public cloud</h4>
                <p>
                  Layanan disediakan lewat internet dan dipakai banyak
                  perusahaan bersamaan.
                </p>
              </div>
              <div className="mini-card">
                <h4>Private cloud</h4>
                <p>
                  Infrastruktur khusus dipakai satu perusahaan saja, bisa
                  dijaga lebih ketat.
                </p>
              </div>
              <div className="mini-card">
                <h4>Hybrid cloud</h4>
                <p>
                  Gabungan public dan private, memakai keduanya sesuai
                  kebutuhan.
                </p>
              </div>
            </div>
            <div className="mini-grid">
              <div className="mini-card">
                <h4>IaaS</h4>
                <p>
                  Sewa &quot;komponen&quot; dasar: server, storage, jaringan.
                  Kamu atur sendiri.
                </p>
              </div>
              <div className="mini-card">
                <h4>PaaS</h4>
                <p>
                  Sewa &quot;tempat membuat dan menjalankan aplikasi&quot;
                  tanpa mengurus server.
                </p>
              </div>
              <div className="mini-card">
                <h4>SaaS</h4>
                <p>
                  Langsung pakai aplikasi jadi lewat internet, seperti Google
                  Drive.
                </p>
              </div>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}