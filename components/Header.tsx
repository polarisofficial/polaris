import React from "react";
import LinkText from "./LinkText";

type Props = {};

export default function Header({}: Props) {
  return (
    <header>
      <div className="pt-6 pb-6 flex justify-around items-center">
        <div className="flex justify-center items-center gap-x-7">
          <LinkText link="/" text="Home" />
          <LinkText link="/tutorial" text="Tutorial" />
        </div>
        <LinkText link="/login" text="Login" />
      </div>
      <div className="w-full thin-line"></div>
    </header>
  );
}
