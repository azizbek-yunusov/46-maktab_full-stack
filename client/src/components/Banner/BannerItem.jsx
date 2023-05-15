import React from "react";

const BannerItem = ({ name, image, href }) => {
  return (
    <div className="w-full overflow-hidden cursor-pointer flex justify-start items-center">
      <img
        src={image.url}
        alt={name}
        className="w-full bg-center object-cover h-[500px] rounded-xl select-none bg-gray-200"
      />
    </div>
  );
};

export default BannerItem;
