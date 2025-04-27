"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function AppleCardsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full relative">
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="border border-[#C4C4C4] rounded-lg bg-transparent relative"
          >
            <h3 className="font-semibold text-2xl tracking-tighter text-black">
              Power Management, Notification and Geofencing
            </h3>
            <p className="text-base text-black">
              Our mobile application development services optimize your
              app&apos;s effeciency with advanced power management timely
              notification, and precise geofencing features.
            </p>
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Custom-Built Mobile Apps",
    title:
      "We develop bespoke mobile applications tailored to your specific business needs, ensuring seamless functionality, an intuitive user interface, and a smooth experience for your customers. Our solutions are designed to enhance engagement and drive efficiency.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Cutting-Edge Technology Integration",
    title:
      "From AI and machine learning to IoT and blockchain, we integrate the latest technologies to future-proof your app. Our innovative approach keeps you ahead of the competition, ensuring high performance, security, and adaptability in an ever-changing digital landscape.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Scalable Solutions",
    title:
      "Our mobile applications are built to grow with your business, ensuring they adapt to evolving demands, market trends, and user expectations. We design flexible architectures that allow seamless upgrades and expansions without compromising performance.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },

  {
    category: "Powerful Notifications & Alerts",
    title:
      "Keep your users engaged with advanced notification services that ensure timely alerts, reminders, and updates. Our solutions leverage AI-driven personalization to send relevant and impactful messages, improving user retention and experience.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Cross-Platform Compatibility",
    title:
      "We develop mobile applications that work seamlessly across multiple devices and platforms, ensuring a consistent experience for all users. Whether it’s iOS, Android, or web-based applications, we deliver high-performance solutions for maximum reach.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Robust Security & Compliance",
    title:
      "Security is at the core of our mobile app development. We implement advanced encryption, secure authentication, and compliance measures to protect user data. Our apps adhere to industry standards, ensuring reliability, privacy, and trustworthiness.",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];
