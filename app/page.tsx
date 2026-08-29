import Hero from "@/components/sections/Hero";
import Cloud from "@/components/sections/Cloud";
import Work from "@/components/sections/Work";
import Why from "@/components/sections/Why";
import Skill from "@/components/sections/Skill";
import StartHere from "@/components/sections/StartHere";
import Roadmap from "@/components/sections/Roadmap";
import Learn from "@/components/sections/Learn";
import Cert from "@/components/sections/Cert";
import Industry from "@/components/sections/Industry";
import AI from "@/components/sections/AI";
import Quiz from "@/components/sections/Quiz";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Sources from "@/components/sections/Sources";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah Cloud Engineer sama dengan programmer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Berhubungan, tetapi tidak sama. Programmer fokus menulis kode aplikasi. Cloud Engineer mengurus infrastruktur tempat aplikasi itu berjalan.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah harus jago matematika?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak perlu matematika tingkat tinggi untuk mulai. Matematika membantu cara berpikir logis, dan itu bisa dipelajari seiring waktu.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah harus bisa coding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak harus mahir sejak awal. Namun scripting atau programming dasar sangat berguna, terutama untuk automation.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah anak SMP bisa belajar cloud?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bisa. Fokus pada fundamental dan project kecil seperti membuat halaman website atau memahami internet.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah cloud itu gratis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sebagian layanan punya free usage atau credits, tetapi tidak semua aktivitas gratis. Selalu perhatikan potensi biaya.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah harus belajar AWS, Azure, dan Google Cloud sekaligus?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak. Pilih satu dulu, pahami konsep yang bisa dipindahkan (transferable), baru eksplor provider lain.",
      },
    },
    {
      "@type": "Question",
      name: "Sertifikasi apa yang paling bagus?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak ada yang universal. Sertifikasi adalah alat validasi, bukan tiket wajib masuk.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah Cloud Engineer akan digantikan AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI mengubah cara kerja, bukan menghilangkan profesinya. Problem solving tetap dibutuhkan manusia.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <Cloud />
      <Work />
      <Why />
      <Skill />
      <StartHere />
      <Roadmap />
      <Learn />
      <Cert />
      <Industry />
      <AI />
      <Quiz />
      <FAQ />
      <CTA />
      <Sources />
    </>
  );
}