import React from "react";
import Image from "next/image";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="flex flex-row justify-center items-start">
      <div className="relative w-full">
        <div className="flex flex-col justify-center items-center">
          <div className="relative w-20 h-20 mt-12 mb-10">
            <Image src={"/polaris.svg"} alt="Logo" fill={true}></Image>
          </div>
          <div className="text-white text-xl">AIを用いた高性能自動生成に対応</div>
          <div className="text-white text-sm">あなたの好きな曲をリズムに乗せて</div>
          <button className="text-white border border-white mt-10 mb-12">今すぐプレイ</button>
        </div>
      </div>
    </div>
  );
}
