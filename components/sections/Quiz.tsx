"use client";

import { useEffect, useRef, useState } from "react";

const QUESTIONS: { name: string; legend: string }[] = [
  { name: "q1", legend: "1. Suka memecahkan masalah?" },
  {
    name: "q2",
    legend:
      "2. Suka mencoba-coba komputer sampai menemukan penyebab error?",
  },
  { name: "q3", legend: "3. Tertarik bagaimana aplikasi bekerja di balik layar?" },
  { name: "q4", legend: "4. Bersedia belajar sedikit coding?" },
  {
    name: "q5",
    legend: "5. Suka belajar hal baru karena teknologi terus berubah?",
  },
];

export default function Quiz() {
  const [result, setResult] = useState("");
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = resultRef.current;
    if (result && el) {
      el.tabIndex = -1;
      el.focus();
    }
  }, [result]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const yaCount = QUESTIONS.filter((q) => {
      const list = form.elements.namedItem(q.name) as RadioNodeList;
      return list && list.value === "ya";
    }).length;

    let text: string;
    if (yaCount >= 4) {
      text =
        "Kamu mungkin cocok mengeksplorasi Cloud Engineering. Mulai dari hal sederhana dan bangun project kecilmu.";
    } else if (yaCount >= 2) {
      text =
        "Kamu punya ketertarikan yang bisa ditumbuhkan. Coba eksplorasi dengan project kecil dan lihat bagaimana rasanya.";
    } else {
      text =
        "Tidak apa-apa. Cloud Engineering bukan satu-satunya jalur. Kamu tetap bisa belajar kapan saja jika rasa penasarannya muncul.";
    }
    setResult(text);
  }

  return (
    <section id="quiz" className="section">
      <div className="page-container page-container-narrow">
        <h2 data-reveal>Apakah Cloud Engineer cocok untuk kamu?</h2>
        <p className="lead" data-reveal>
          Self-check informal, bukan tes karier ilmiah. Jawab jujur dan lihat
          hasilnya.
        </p>

        <form className="quiz-form" data-reveal onSubmit={handleSubmit}>
          {QUESTIONS.map((q) => (
            <fieldset className="quiz-item" key={q.name}>
              <legend>{q.legend}</legend>
              <label>
                <input type="radio" name={q.name} value="ya" /> Ya
              </label>
              <label>
                <input type="radio" name={q.name} value="tidak" /> Belum
              </label>
            </fieldset>
          ))}
          <button type="submit" className="btn btn-primary">
            Lihat Hasil
          </button>
        </form>

        <div
          ref={resultRef}
          className="quiz-result"
          role="status"
          aria-live="polite"
          hidden={!result}
        >
          {result}
        </div>
      </div>
    </section>
  );
}