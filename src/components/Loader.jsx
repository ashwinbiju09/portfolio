import React from "react";

const Loader = () => {
  return (
    <div className="h-screen bg-black">
      <div class="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
        <div class="p-2 bg-gradient-to-tr animate-spin from-blue-400 to-blue-800  rounded-full">
          <div class="bg-black rounded-full">
            <div class="w-24 h-24 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
