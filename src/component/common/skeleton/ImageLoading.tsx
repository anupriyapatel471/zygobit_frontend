import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ImageLoading = () => {
    console.log("Here is loading")
  return (
    <>
      <Skeleton className="h-[370px] sm:h-[450px] lg:h-[550px] 2xl:h-[600px]" height={500} />
    </>
  );
};

export default ImageLoading;
