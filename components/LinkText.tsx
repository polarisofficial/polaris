import React from "react";
import Link from "next/link";

type Props = {
  link: string;
  text: string;
};

export default function LinkText({ link, text }: Props) {
  return (
    <Link href={link}>
      <div className="font-normal text-sm text-white hover:text-white/50">{text}</div>
    </Link>
  );
}
