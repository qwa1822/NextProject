import Image from "next/image";
import React from "react";

const PropertyHeaderImage = ({ image }) => {
  return (
    <div className="w-full m-auto">
      <div className="grid grid-cols-1">
        <Image
          src={`/images/properties/${image}`}
          alt=""
          className="object-cover w-full h-[400px]"
          height={0}
          width={0}
          sizes="100vw"
          priority={true}
        />
      </div>
    </div>
  );
};

export default PropertyHeaderImage;
