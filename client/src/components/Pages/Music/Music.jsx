import React, { useState } from "react";
import { block } from "bem-cn";
import songs from "./songs";
import iframeConfig from "./consts";
import PlayButtonSvg from "./PlayButtonSvg";
import SoundcloudLogoSvg from "./SoundcloudLogoSvg";
import "./music.scss";

const classname = block("music");

function Music() {
  const [playClicked, setPlayClicked] = useState([]);
  const iframeConfigStr = iframeConfig.reduce((acc, val) => `${acc}&${val.key}=${val.value}`, "");

  const renderIframe = (song) => (
    <iframe
      title={song.songTitle}
      width="300"
      height="300"
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${song.id}&${iframeConfigStr}`}
    />
  );

  const renderDummyIframe = (song, index) => (
    <>
      <div className={classname("song-media-header")}>
        <button
          onClick={() => {
            const newPlayClicked = [...playClicked];
            newPlayClicked.push(index);
            setPlayClicked(newPlayClicked);
          }}
          type="button"
          className={classname("song-media-play-button")}
        >
          <PlayButtonSvg />
        </button>
        <div className={classname("song-media-channel-and-song-name")}>
          <a
            href={song.channelUrl}
            className={classname("song-media-channel-name")}
            title={song.channelTitle}
            target="_blank"
            rel="noreferrer"
          >
            {song.channelTitle}
          </a>
          <a
            href={song.songUrl}
            className={classname("song-media-song-name")}
            title={song.songTitle}
            target="_blank"
            rel="noreferrer"
          >
            {song.songTitle}
          </a>
        </div>
        <a href={song.songUrl} target="blank" className={classname("soundcloud-logo")}>
          <SoundcloudLogoSvg />
        </a>
      </div>
      <div
        className={classname("song-media-img")}
        style={{ backgroundImage: `url(${song.artworkUrl})` }}
      />
    </>
  );

  return (
    <div className={classname()}>
      {songs.map((song, index) => (
        <div className={classname("song")} key={song.songUrl}>
          <div className={classname("song-media-container")}>
            { playClicked.includes(index) ? renderIframe(song) : renderDummyIframe(song, index)}
          </div>
          <div className={classname("song-details")}>
            <a
              href={song.songUrl}
              className={classname("artist-and-song-name")}
              title={song.songTitle}
              target="_blank"
              rel="noreferrer"
            >
              {song.songTitle}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Music;
