import React, { useState } from "react";
import songs from "./songs";
import iframeConfig from "./consts";
import PlayButtonSvg from "./PlayButtonSvg";
import SoundcloudLogoSvg from "./SoundcloudLogoSvg";
import "./music.css";

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
      <div className="song-media-header">
        <button
          onClick={() => {
            const newPlayClicked = [...playClicked];
            newPlayClicked.push(index);
            setPlayClicked(newPlayClicked);
          }}
          type="button"
          className="song-media-play-button"
        >
          <PlayButtonSvg />
        </button>
        <div className="song-media-channel-and-song-name">
          <a href={song.channelUrl} className="song-media-channel-name" title={song.channelTitle} target="_blank" rel="noreferrer">{song.channelTitle}</a>
          <a href={song.songUrl} className="song-media-song-name" title={song.songTitle} target="_blank" rel="noreferrer">{song.songTitle}</a>
        </div>
        <a href={song.songUrl} target="blank" className="soundcloud-logo">
          <SoundcloudLogoSvg />
        </a>
      </div>
      <div
        className="song-media-img"
        style={{ backgroundImage: `url(${song.artworkUrl})` }}
      />
    </>
  );

  return (
    <div className="music">
      {songs.map((song, index) => (
        <div className="song" key={song.songUrl}>
          <div className="song-media-container">
            { playClicked.includes(index) ? renderIframe(song) : renderDummyIframe(song, index)}
          </div>
          <div className="song-details">
            <a href={song.songUrl} className="artist-and-song-name" title={song.songTitle} target="_blank" rel="noreferrer">{song.songTitle}</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Music;
