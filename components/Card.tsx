import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

export default function Card({ src, alt, title, description }: Props) {
  return (
    <div className="w-1/3 aspect-square flex flex-col justify-evenly items-center">
      {/* Image */}
      <div className="relative w-12 h-12">
        <Image src={src} alt={alt} fill={true}></Image>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="text-white font-medium">{title}</div>
        <div className="text-white text-sm">{description}</div>
      </div>
    </div>
  );
}
