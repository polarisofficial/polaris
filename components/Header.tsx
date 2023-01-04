import React from "react";
import Image from "next/image";
import Text from "./Text";

type Props = {};

export default function Header({}: Props) {
  return (
    <header>
      <div className="pt-6 pb-6 flex justify-between items-center">
        <div className="flex justify-center items-center gap-7">
          <Text link="/" text="ホーム" />
          <Text link="/tutorial" text="遊び方" />
        </div>
        <Text link="/login" text="ログイン" />
      </div>
    </header>
  );
}
