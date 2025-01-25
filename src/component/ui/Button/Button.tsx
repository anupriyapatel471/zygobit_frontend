import React from "react"

export default function ButtonDemo({ title, className }: any) {
  return <button className={className}>
    {title}
    {/* <span className="w-5 h-5 inline-flex rounded-full border-2 border-white"></span> */}
  </button>
}
