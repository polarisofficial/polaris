import React from "react";
import YouTubeVideo from "./YouTubeVideo";

export default function Demo() {
  return (
    <div className="w-full flex flex-col justify-between items-center gap-y-5">
      {/* Title */}
      <div className="text-white text-lg">Demos</div>

      {/*Video*/}
      <div className="w-full flex flex-row justify-evenly items-center">
        <div className="w-2/5 aspect-video">
          <YouTubeVideo id="jJzw1h5CR-I" width="100%" height="100%" />
        </div>
        <div className="w-2/5 aspect-video">
          <YouTubeVideo id="jJzw1h5CR-I" width="100%" height="100%" />
        </div>
      </div>
    </div>
  );
}
