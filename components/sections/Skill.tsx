export default function Skill() {
  return (
    <section id="skill" className="section section-tint">
      <div className="page-container">
        <h2 data-reveal>Skill yang perlu dipelajari</h2>
        <p className="lead" data-reveal>
          Bayangkan skill ini seperti pohon: mulai dari akar yang sederhana,
          lalu tumbuh ke cabang yang lebih tinggi.
        </p>

        <div
          className="skill-tree"
          data-reveal data-reveal-grid
          role="list"
          aria-label="Pohon keterampilan Cloud Engineer dari dasar hingga profesional"
        >
          <article className="tree-level" role="listitem">
            <div className="tree-badge" aria-hidden="true">
              9
            </div>
            <div className="tree-body">
              <h3>Professional Skills</h3>
              <p>
                Problem solving, komunikasi, dokumentasi, Bahasa Inggris
                teknis, teamwork, dan kemampuan menjelaskan hal rumit secara
                sederhana.
              </p>
            </div>
          </article>
          <article className="tree-level" role="listitem">
            <div className="tree-badge" aria-hidden="true">
              8
            </div>
            <div className="tree-body">
              <h3>Architecture &amp; Cost</h3>
              <p>
                Scalability, availability, performance, reliability, cost
                optimization, dan cara berpikir trade-off.
              </p>
            </div>
          </article>
          <article className="tree-level" role="listitem">
            <div className="tree-badge" aria-hidden="true">
              7
            </div>
            <div className="tree-body">
              <h3>Security &amp; Reliability</h3>
              <p>
                Least privilege, identitas dan akses, secrets, enkripsi dasar,
                backup, disaster recovery, dan monitoring.
              </p>
            </div>
          </article>
          <article className="tree-level" role="listitem">
            <div className="tree-badge" aria-hidden="true">
              6
            </div>
            <div className="tree-body">
              <h3>Containers &amp; DevOps</h3>
              <p>
                Docker, container image, Kubernetes pada level konsep,
                deployment, pipeline, dan observability.
              </p>
            </div>
          </article>
          <article className="tree-level" role="listitem">
            <div className="tree-badge" aria-hidden="true">
              5
            </div>
            <div className="tree-body">
              <h3>Infrastructure &amp; Automation</h3>
              <p>
                Infrastructure as Code dengan Terraform, CLI provider,
                configuration, Git/GitHub, dan dasar CI/CD.
              </p>
            </div>
          </article>
          <article className="tree-level" role="listitem">
            <div className="tree-badge" aria-hidden="true">
              4
            </div>
            <div className="tree-body">
              <h3>Cloud Fundamentals</h3>
              <p>
                Region, compute, storage, database, networking, IAM,
                monitoring, backup, dan pricing. Pilih satu provider dulu: AWS,
                Azure, atau Google Cloud.
              </p>
            </div>
          </article>
          <article className="tree-level" role="listitem">
            <div className="tree-badge" aria-hidden="true">
              3
            </div>
            <div className="tree-body">
              <h3>Programming / Scripting</h3>
              <p>
                Membaca kode sederhana, membuat script, memahami variabel,
                kondisi, loop, dan function. Python atau Bash untuk automation.
              </p>
            </div>
          </article>
          <article className="tree-level" role="listitem">
            <div className="tree-badge" aria-hidden="true">
              2
            </div>
            <div className="tree-body">
              <h3>Linux &amp; Command Line</h3>
              <p>
                Terminal, filesystem, process, permission, user/group, perintah
                shell dasar, dan membaca logs.
              </p>
            </div>
          </article>
          <article className="tree-level" role="listitem">
            <div className="tree-badge" aria-hidden="true">
              1
            </div>
            <div className="tree-body">
              <h3>Networking Basics</h3>
              <p>
                IP address, DNS, HTTP/HTTPS, port, router, firewall, client vs
                server, dan latency. Bayangkan seperti alamat rumah, jalan, dan
                pintu.
              </p>
            </div>
          </article>
          <article className="tree-level" role="listitem">
            <div className="tree-badge" aria-hidden="true">
              0
            </div>
            <div className="tree-body">
              <h3>Computer Basics</h3>
              <p>
                Sistem operasi, file dan folder, browser, internet, perangkat
                keras dasar, konsep program, dan dasar command line.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}