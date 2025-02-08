import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Zygobit’s team delivered a highly effective solution for our app. They ensured a user-friendly interface and smooth functionality, helping us meet our business goals in no time. ",
      name: "Sasson Moulavi",
      designation: "ABBSI",
      src: "/images/abbsi_img.png",
    },
    {
      quote:
        "Zygobit’s expertise made the development of our project a seamless experience. They understood our vision and executed it with precision, delivering a fantastic solution.",
      name: "ellered",
      designation: "OPSY",
      src: "/images/opsy.png",
    },
    {
      quote:
        "The Zygobit team helped us transform our website, combining great design with excellent usability. Their approach exceeded expectations and truly captured the essence of our brand.",
      name: "Mark",
      designation: "Inspired Meadows",
      src: "/images/meadows.png",
    },
    {
      quote:
        "Collaborating with Zygobit was a game-changer. Their innovative development strategies helped us create a robust and feature-rich app that perfectly meets the needs of our users.",
      name: "Alan",
      designation: "TIA",
      src: "/images/tia.png",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
