import React from "react";
import Image from "next/image";
import LinkText from "./LinkText";

type Props = {};

export default function Header({}: Props) {
  return (
    <header>
      <div className="pt-6 pb-6 flex justify-between items-center">
        <div className="flex justify-center items-center gap-7">
          <LinkText link="/" text="ホーム" />
          <LinkText link="/tutorial" text="遊び方" />
        </div>
        <LinkText link="/login" text="ログイン" />
      </div>
    </header>
  );
}
