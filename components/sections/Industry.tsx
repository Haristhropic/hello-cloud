export default function Industry() {
  return (
    <section id="peluang" className="section">
      <div className="page-container">
        <h2 data-reveal>Peluang industri: global dan Indonesia</h2>

        <div className="split" data-reveal data-reveal-grid>
          <article className="card card-outlook">
            <h3>Apa kata dunia</h3>
            <p>
              Cloud adalah salah satu fondasi infrastruktur digital modern.
              Skill cloud bersinggungan dengan area yang terus berkembang
              seperti software, cybersecurity, data, AI, dan platform
              engineering.
            </p>
            <p>
              World Economic Forum dalam <em>Future of Jobs 2025</em> menyebut
              AI/big data serta networks/cybersecurity sebagai kelompok skill
              teknologi dengan pertumbuhan permintaan tercepat menuju 2030,
              sambil menekankan pentingnya analytical thinking, resilience,
              leadership, dan collaboration.
            </p>
            <p className="source-note">Sumber: WEF Future of Jobs Report 2025.</p>
          </article>
          <article className="card card-outlook">
            <h3>Kabar dari Indonesia</h3>
            <p>
              Indonesia punya ekosistem cloud dan data center yang berkembang.
              Hyperscaler besar sudah memiliki cloud region di Indonesia,
              sehingga kebutuhan skill di bidang cloud infrastructure, platform,
              security, networking, DevOps, data, dan operasi terus tumbuh.
            </p>
            <p>
              Angka market size yang beredar adalah estimasi dari riset pasar
              yang berbeda-beda. Kalau angka dipakai, selalu lihat sumber dan
              tahunnya, jangan dicampur jadi satu angka seolah-olah pasti.
            </p>
            <p className="source-note">
              Sumber: riset industri seperti Forrester, State of Cloud in
              Indonesia 2025.
            </p>
          </article>
        </div>

        <h3 className="block-title" data-reveal>Bekerja untuk tim global</h3>
        <p className="lead" data-reveal>
          Skill cloud bisa dipakai bekerja lintas negara, tetapi bukan jaminan
          otomatis. Perusahaan global biasanya butuh:
        </p>
        <ul className="check-list" data-reveal>
          <li>Komunikasi teknis dalam Bahasa Inggris</li>
          <li>Mampu berkolaborasi lintas time zone</li>
          <li>Portfolio yang bisa diverifikasi</li>
          <li>Pengalaman dan bukti problem solving</li>
          <li>Kemampuan bekerja async</li>
          <li>Kesadaran keamanan informasi</li>
        </ul>
      </div>
    </section>
  );
}