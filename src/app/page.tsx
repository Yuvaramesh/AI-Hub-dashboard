"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/image.png";

const projects = [
  {
    title: "Loan Chat",
    description:
      "Automate loan pre-qualification, risk assessment, and document checks using conversational AI.",
    link: "https://example.com/loan-ai-agent",
  },
  {
    title: "Web Search Agent",
    description:
      "Two-way, automated WhatsApp support for FAQs, lead capture, and order updates with smart routing.",
    link: "https://example.com/whatsapp-agent",
  },
  {
    title: "Face Vital Monitor",
    description:
      "Camera-based vitals estimation and trend tracking with privacy-first processing and insights.",
    link: "https://github.com/Yuvaramesh/Face-Vital-Streamlit/tree/Testing",
  },
  {
    title: "Hair Loss Analyser",
    description:
      "Image-driven scalp analysis to detect shedding patterns and recommend evidence-based routines.",
    link: "https://hairanalyser.streamlit.app/",
  },
  {
    title: "Show room Assistant agent",
    description:
      "Image-driven scalp analysis to detect shedding patterns and recommend evidence-based routines.",
    link: "https://example.com/showroom-assistant",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white px-10 py-10">
      {/* Header aligned to top-left */}
      <header className="flex items-center gap-4 mb-12">
        <Image
          src={Logo}
          alt="10QBIT Logo"
          width={160}
          height={55}
          className="rounded-lg"
        />
        <h1 className="text-3xl font-bold text-green-400 tracking-tight">
          AI Hub Dashboard
        </h1>
      </header>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-start">
        {projects.map((p) => (
          <Link
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="relative border-2 border-green-500 rounded-2xl p-6 bg-black hover:bg-[#0f0f0f] transition-all duration-300 hover:shadow-[0_0_15px_#00ff88] hover:scale-[1.02] w-[340px] h-[220px] flex flex-col justify-between">
              {/* Watermark Logo */}
              <div className="absolute top-3 right-3 opacity-10 group-hover:opacity-20 transition-all">
                <Image
                  src={Logo}
                  alt="10QBIT"
                  width={80}
                  height={30}
                  className="pointer-events-none select-none"
                />
              </div>

              {/* Card Content */}
              <div>
                <h2 className="text-lg font-semibold text-green-400 mb-2 group-hover:text-green-300">
                  {p.title}
                </h2>
                <p className="text-sm text-white leading-relaxed">
                  {p.description}
                </p>
              </div>

              {/* Animated Footer Line */}
              <div className="mt-3 h-[2px] w-1/3 bg-green-500 group-hover:w-1/2 transition-all duration-300"></div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
