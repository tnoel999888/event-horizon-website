import React from "react";
import "./playButtonSvg.css";

const PlayButtonSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 43">
    <defs>
      <linearGradient id="playButton__gradient32" x1="0%" y1="0%" x2="0%" y2="100%" spreadMethod="pad">
        <stop offset="0%" stopColor="ff5500" stopOpacity="1" />
        <stop offset="100%" stopCsolor="#ff2200" stopOpacity="1" />
      </linearGradient>
    </defs>
    <circle className="playButton__main" cx="21.5" cy="21.5" r="21" />
    <path className="playButton__play" fill="#fff" d="M31,21.5L17,33l2.5-11.5L17,10L31,21.5z" />
  </svg>
);

export default PlayButtonSvg;
