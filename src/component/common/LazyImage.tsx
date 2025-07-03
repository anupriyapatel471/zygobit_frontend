/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import React, { useState } from "react";
import ImageLoading from "./skeleton/ImageLoading";

const LazyImage = ({ src, alt, className }: any) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        // <div className="absolute inset-0 flex items-center justify-center z-10">
          <ImageLoading />
        // </div>
      )}
      <Image
        onLoad={() => setLoading(false)}
        loading="lazy"
        className={`${className} transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
        src={src}
        alt={alt}
        fill
      />
    </>
  );
};

export default LazyImage;
