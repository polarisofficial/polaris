import React from "react";

type Props = {
  id: string;
  width: string;
  height: string;
};

export default function YouTubeVideo({ id, width, height }: Props) {
  return (
    <iframe width={width} height={height} src={"https://www.youtube.com/embed/" + id} title="YouTube Video"></iframe>
  );
}
