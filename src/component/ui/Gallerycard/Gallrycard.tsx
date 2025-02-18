import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCard() {
  const cards = [
    {
      title: "Forest Adventure",
      src: "/images/frame.webp",
    },
    {
      title: "Valley of life",
      src: "/images/frame_two.webp",
    },
    {
      title: "Galaxy",
      src: "/images/frame_three.webp",
    },
    {
        title: "The road not taken",
        src: "/images/frame_two.webp",
      },
    {
      title: "Camping is for pros",
      src: "/images/frame.webp",
    },
   
    {
      title: "The First Rule",
      src: "/images/frame_three.webp",
    },
  ];

  return <FocusCards cards={cards} />;
}
