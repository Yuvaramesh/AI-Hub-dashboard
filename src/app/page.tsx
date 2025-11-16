"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/image.png";
import LightRays from "../components/LightRays";
import PixelCard from "../components/PixelCard";

const projects = [
  {
    title: "Loan Chat",
    description:
      "Automate loan pre-qualification, risk assessment, and document checks using conversational AI.",
    link: "https://admirable-semolina-6026a9.netlify.app/",
  },
  {
    title: "Web Search Agent",
    description:
      "AI-powered web assistant that retrieves, summarizes, and presents web information intelligently for user queries.",
    link: "https://ai-web-search-agent.netlify.app/",
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
      "Conversational AI assistant designed for showrooms to engage customers, recommend products, and answer FAQs.",
    link: "https://adisales-agent.netlify.app/",
  },
  {
    title: "Face Vital Monitor",
    description:
      "Camera-based vitals estimation and trend tracking with privacy-first processing and insights.",
    link: "https://github.com/Yuvaramesh/Face-Vital-Streamlit/tree/Testing",
  },
  {
    title: "AI Receptionist Agent",
    description:
      "An intelligent conversational AI receptionist that greets visitors, engages customers, answers FAQs, and recommends products or services in real time.",
    link: "https://10qbit-ai-receptionist.netlify.app/",
  },
  {
    title: "AI RAG Application",
    description:
      "An advanced Retrieval-Augmented Generation (RAG) application that delivers precise, context-aware answers by combining real-time data lookup with intelligent AI responses.",
    link: "https://10qbit-rag-app.vercel.app/",
  },
];

export default function Dashboard() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* 🌟 Foreground Content */}
      <div className="relative z-10 px-10 py-10">
        <header className="relative flex items-center gap-4 mb-12">
          {/* 💚 Green Ribbon Animation */}
          <div
            style={{
              position: "absolute",
              top: "-150px",
              left: "0",
              width: "100%",
              height: "300px",
              overflow: "hidden",
              zIndex: 1,
              pointerEvents: "none",
            }}
          ></div>

          {/* 💫 Light Rays Above Title */}
          <div
            style={{
              position: "absolute",
              top: "-100px",
              left: "-17%",
              width: "70%",
              height: "130px",
              zIndex: 10,
              pointerEvents: "none",
            }}
          >
            <LightRays
              raysOrigin="top-center"
              raysColor="#d4ffcc"
              raysSpeed={1.5}
              lightSpread={0.8}
              rayLength={1.2}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0.1}
              distortion={0.05}
            />
          </div>

          {/* 🔰 Logo & Title */}
          <Image
            src={Logo}
            alt="10QBIT Logo"
            width={160}
            height={55}
            className="rounded-lg relative z-10"
          />
          <h1 className="text-3xl font-bold text-green-400 tracking-tight relative z-10">
            AI Hub Dashboard
          </h1>
        </header>

        {/* 🟩 Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-start">
          {projects.map((p) => (
            <Link
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <PixelCard
                variant="yellow"
                className="w-[280px] h-[180px] relative"
              >
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  {/* Watermark */}
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
                    <h2 className="text-lg font-semibold text-green-400 mb-2 group-hover:text-yellow-400">
                      {p.title}
                    </h2>
                    <p className="text-sm text-white leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  {/* Animated Footer Line */}
                  <div className="mt-3 h-[2px] w-1/3 bg-gradient-to-r from-green-400 to-yellow-400 group-hover:w-1/2 transition-all duration-300"></div>
                </div>
              </PixelCard>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
