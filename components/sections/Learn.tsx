export default function Learn() {
  return (
    <section id="belajar" className="section">
      <div className="page-container">
        <h2>Tempat belajar cloud yang aman dan terpercaya</h2>
        <p className="lead">
          Prioritaskan sumber resmi dan gratis. Jangan terburu membeli kursus
          mahal sebelum memahami dasar.
        </p>

        <h3 className="block-title">Sumber resmi penyedia cloud</h3>
        <div className="resource-grid">
          <article className="card resource-card">
            <h4>AWS Skill Builder / AWS Certification</h4>
            <p>
              Fundamental AWS, hands-on practice, Cloud Quest, Builder Labs,
              dan persiapan sertifikasi resmi.
            </p>
            <div className="badges">
              <span className="badge b-official">OFFICIAL</span>
              <span className="badge b-free">GRATIS</span>
              <span className="badge b-hands">HANDS-ON</span>
            </div>
            <a
              className="resource-link"
              href="https://aws.amazon.com/certification/"
              target="_blank"
              rel="noopener"
            >
              Kunjungi situs resmi AWS
            </a>
          </article>
          <article className="card resource-card">
            <h4>Microsoft Learn</h4>
            <p>
              Azure Fundamentals dan learning path untuk pemula, lengkap dengan
              guided projects dan AZ-900.
            </p>
            <div className="badges">
              <span className="badge b-official">OFFICIAL</span>
              <span className="badge b-free">GRATIS</span>
              <span className="badge b-newbie">UNTUK PEMULA</span>
            </div>
            <a
              className="resource-link"
              href="https://learn.microsoft.com/training/azure/"
              target="_blank"
              rel="noopener"
            >
              Kunjungi Microsoft Learn
            </a>
          </article>
          <article className="card resource-card">
            <h4>Google Cloud Skills / Training</h4>
            <p>
              Fundamental cloud, lab interaktif, learning path, dan persiapan
              Associate Cloud Engineer.
            </p>
            <div className="badges">
              <span className="badge b-official">OFFICIAL</span>
              <span className="badge b-free">GRATIS</span>
              <span className="badge b-hands">HANDS-ON</span>
            </div>
            <a
              className="resource-link"
              href="https://cloud.google.com/learn/training"
              target="_blank"
              rel="noopener"
            >
              Kunjungi Google Cloud Training
            </a>
          </article>
        </div>

        <h3 className="block-title">Lingkungan latihan dan dokumentasi</h3>
        <div className="resource-grid">
          <article className="card resource-card">
            <h4>GitHub</h4>
            <p>
              Tempat menyimpan dan membagikan project, belajar Git, dan melihat
              kode orang lain.
            </p>
            <div className="badges">
              <span className="badge b-free">GRATIS</span>
              <span className="badge b-hands">HANDS-ON</span>
            </div>
            <a
              className="resource-link"
              href="https://github.com"
              target="_blank"
              rel="noopener"
            >
              Buka GitHub
            </a>
          </article>
          <article className="card resource-card">
            <h4>Linux Journey</h4>
            <p>
              Belajar Linux dari nol dengan cara santai dan bertahap, cocok
              untuk pemula.
            </p>
            <div className="badges">
              <span className="badge b-free">GRATIS</span>
              <span className="badge b-newbie">UNTUK PEMULA</span>
            </div>
            <a
              className="resource-link"
              href="https://linuxjourney.com"
              target="_blank"
              rel="noopener"
            >
              Buka Linux Journey
            </a>
          </article>
          <article className="card resource-card">
            <h4>Docker Docs</h4>
            <p>Dokumentasi resmi Docker dengan tutorial memulai yang jelas.</p>
            <div className="badges">
              <span className="badge b-official">OFFICIAL</span>
              <span className="badge b-free">GRATIS</span>
            </div>
            <a
              className="resource-link"
              href="https://docs.docker.com"
              target="_blank"
              rel="noopener"
            >
              Buka Docker Docs
            </a>
          </article>
          <article className="card resource-card">
            <h4>Terraform Tutorials</h4>
            <p>
              Tutorial resmi Terraform untuk memahami Infrastructure as Code.
            </p>
            <div className="badges">
              <span className="badge b-official">OFFICIAL</span>
              <span className="badge b-free">GRATIS</span>
            </div>
            <a
              className="resource-link"
              href="https://developer.hashicorp.com/terraform/tutorials"
              target="_blank"
              rel="noopener"
            >
              Buka Terraform Tutorials
            </a>
          </article>
        </div>

        <h3 className="block-title">Komunitas belajar</h3>
        <div className="resource-grid">
          <article className="card resource-card">
            <h4>Komunitas cloud lokal</h4>
            <p>
              Meetup, grup diskusi, dan Discord belajar cloud di Indonesia.
              Bertanya pada orang yang lebih dulu belajar sangat membantu.
            </p>
            <div className="badges">
              <span className="badge b-free">GRATIS</span>
            </div>
          </article>
        </div>

        <div className="note-box note-warn">
          <strong>Perhatian untuk orang tua:</strong> beberapa latihan cloud
          memakai free tier, tetapi tidak semua aktivitas gratis. Awasi akun
          dan pastikan selalu menghentikan atau menghapus resource setelah
          selesai supaya tidak ada biaya tak terduga.
        </div>
      </div>
    </section>
  );
}