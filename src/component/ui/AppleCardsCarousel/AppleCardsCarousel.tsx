"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function AppleCardsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full">
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
            className="border border-white rounded-lg bg-white bg-opacity-5"
          >
            <h3 className="font-semibold text-2xl tracking-tighter">
              Power Management, Notification and Geofencing
            </h3>
            <p className="text-base">
              Our mobile application development services optimize your app's
              effeciency with advanced power management timely notification, and
              precise geofencing features.
            </p>
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Power Management, Notification and Geofencing",
    title:
      "Our mobile application development services optimize your app's effeciency with advanced power management timely notification, and precise geofencing features.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Power Management, Notification and Geofencing",
    title: "Our mobile application development services optimize your app's effeciency with advanced power management timely notification, and precise geofencing features.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Power Management, Notification and Geofencing",
    title: "Our mobile application development services optimize your app's effeciency with advanced power management timely notification, and precise geofencing features.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },

  {
    category: "Power Management, Notification and Geofencing",
    title: "Our mobile application development services optimize your app's effeciency with advanced power management timely notification, and precise geofencing features.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Power Management, Notification and Geofencing",
    title: "Our mobile application development services optimize your app's effeciency with advanced power management timely notification, and precise geofencing features.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Power Management, Notification and Geofencing",
    title: "Our mobile application development services optimize your app's effeciency with advanced power management timely notification, and precise geofencing features.",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];
