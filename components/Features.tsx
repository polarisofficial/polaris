import React from "react";
import Card from "./Card";

type Props = {};

export default function Features({}: Props) {
  return (
    <div>
      <div className="flex justify-between items-center">
        {/* 1st element */}
        <Card src="/polaris.svg" alt="image 1" title="Card 1" description="Hello World 1" />

        {/* 2nd element */}
        <Card src="/polaris.svg" alt="image 2" title="Card 2" description="Hello World 2" />

        {/* 3rd element */}
        <Card src="/polaris.svg" alt="image 3" title="Card 3" description="Hello World 3" />
      </div>
    </div>
  );
}
