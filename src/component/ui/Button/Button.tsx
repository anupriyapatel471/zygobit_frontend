import React from "react";
interface ButtonDemoProp {
  title: string;
  className: string;
}
export default function ButtonDemo({ title, className }: ButtonDemoProp) {
  return <button className={className}>{title}</button>;
}
