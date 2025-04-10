"use client"

import { HoverEffect } from "../card-hover-effect";

export function MobileTechnology() {
  return (
    <div className="max-w-full mx-auto px-0">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Artificial Intelligence",
    description:
      "Enhance your mobile applications with AI-driven capabilities, including facial recognition, smart text scanning, barcode detection, and predictive analytics, delivering seamless and intelligent user interactions.",
    link: "",
  },
  {
    title: "Machine Learning",
    description:
      "Our AI-powered machine learning models adapt to your business needs, optimizing efficiency, automating key processes, and ensuring cost-effective, scalable solutions for long-term success.",
    link: "",
  },
  {
    title: "Generative AI",
    description:
      "Leverage the power of generative AI to create dynamic content, automate complex workflows, and drive deeper engagement, making your applications smarter and more user-centric.",
    link: "",
  },
  {
    title: "Internet of Things (IoT)",
    description:
      "We develop IoT applications that enable seamless device connectivity, real-time monitoring, and advanced automation. Our solutions help businesses optimize operations, enhance efficiency, and create smarter environments.",
    link: "",
  },
  {
    title: "Blockchain",
    description:
      "We build secure and decentralized blockchain applications designed for modern businesses. From digital transactions to smart contracts and web3 integration, our solutions ensure transparency, reliability, and innovation in every process.",
    link: "",
  },
  {
    title: "AR/VR",
    description:
      "We craft immersive AR/VR applications that transform digital interactions. Whether it's for gaming, training, or enterprise solutions, our apps deliver highly engaging and interactive experiences that redefine user engagement.",
    link: "",
  },
];
