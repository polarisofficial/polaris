import React from "react";
import Image from "next/image";

type Props = {};

export default function Background({}: Props) {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen z-[-1]">
        <Image src={"/background.png"} alt={"background image"} fill={true}></Image>
      </div>
    </>
  );
}
