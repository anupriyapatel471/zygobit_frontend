import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-8 w-8 border-4 border-white border-t-transparent"></div>
    </div>
  );
};

export default Loader;
