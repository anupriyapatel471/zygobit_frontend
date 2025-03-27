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
      "We deliver high-quality web applications while ensuring cost efficiency, so you get maximum value without compromising on performance.",
    link: "https://stripe.com",
  },
  {
    title: "All Under One Roof",
    description:
      "From ideation to deployment, our end-to-end web app development services cover everything you need, simplifying your journey.",
    link: "https://netflix.com",
  },
  {
    title: "Creative Team",
    description:
      "Our skilled developers and designers bring your ideas to life with innovation, ensuring a unique and engaging web experience.",
    link: "https://google.com",
  },
  {
    title: "Scalability & Performance",
    description:
      "We build web applications with future growth in mind, ensuring seamless scalability and top-notch performance.",
    link: "https://meta.com",
  },
  {
    title: "Security-Driven Development",
    description:
      "We prioritize robust security measures, implementing industry best practices to safeguard your data and user information.",
    link: "https://amazon.com",
  },
  {
    title: "Seamless Integration",
    description:
      "Our web solutions integrate effortlessly with your existing systems, streamlining operations and boosting efficiency.",
    link: "https://microsoft.com",
  },
];
