import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CustomWebCards() {
  return (
    <div className="w-full">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Cost-Effective Process",
    description:
      "At Zygobit, our custom web app development solutions are designed for cost-effectiveness, ensuring your project is executed efficiently without compromising quality",
    link: "https://stripe.com",
  },
  {
    title: "All Under One Roof",
    description:
      "We are a one-stop web application development company, offering a comprehensive range of services, from concept to deployment, all conveniently available under one roof.",
    link: "https://netflix.com",
  },
  {
    title: "Creative Team",
    description:
      "Creative web app developers at Zygobit are committed to turning your vision into innovative web solutions, infusing creativity into every aspect of your project.",
    link: "https://google.com",
  },
  {
    title: "24/7 Help Desk",
    description:
      "With a commitment to assistance, our website application development company ensures that you have support whenever you need it, guaranteeing a seamless development experience.",
    link: "https://meta.com",
  },
  {
    title: "New Technology Integration",
    description:
      "Being one of the top web application development companies Zygobit stays at the forefront of technology, integrating new advancements into your web apps, keeping you ahead of the curve.",
    link: "https://amazon.com",
  },
  {
    title: "Post-Deployment Services",
    description:
      "Our web development services go beyond launch by ensuring the ongoing success of your web application with regular updates, maintenance, and support.",
    link: "https://microsoft.com",
  },
];
