import "./music.css";
import React, { useState } from "react";
import songs from "./songs";
import IFRAME_CONFIG from "./consts";

function Music() {
  const [playClicked, setPlayClicked] = useState(-1);
  const iframeConfigStr = IFRAME_CONFIG.reduce((acc, val) => `${acc}&${val.key}=${val.value}`, "");

  return (
    <div className="music">
      {songs.map((song, index) => (
        <div className="song" key={song.songUrl}>
          <div className="song-media-container">
            { playClicked === index ? (
              <iframe
                title={song.songTitle}
                width="300"
                height="300"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${song.id}&${iframeConfigStr}`}
              />
            ) : (
              <div>
                <div className="song-media-header">
                  <button
                    onClick={() => {
                      setPlayClicked(index);
                    }}
                    type="button"
                    className="song-media-play-button"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 43">
                      <defs>
                        <linearGradient id="playButton__gradient32" x1="0%" y1="0%" x2="0%" y2="100%" spreadMethod="pad">
                          <stop offset="0%" stopColor="#ff5500" stopOpacity="1" />
                          <stop offset="100%" stopColor="#ff2200" stopOpacity="1" />
                        </linearGradient>
                      </defs>
                      <circle fill="url(#playButton__gradient32)" stroke="#cc4400" cx="21.5" cy="21.5" r="21" />
                      <circle className="playButton__overlay" fill="#000" fillOpacity="0.08" stroke="#cc4400" cx="21.5" cy="21.5" r="21" />
                      <path className="playButton__play" fill="#fff" d="M31,21.5L17,33l2.5-11.5L17,10L31,21.5z" />
                    </svg>
                  </button>
                  <div className="song-media-channel-and-song-name">
                    <a href={song.channelUrl} className="song-media-channel-name" title={song.channelTitle} target="_blank" rel="noreferrer">{song.channelTitle}</a>
                    <a href={song.songUrl} className="song-media-song-name" title={song.songTitle} target="_blank" rel="noreferrer">{song.songTitle}</a>
                  </div>
                  <a href={song.songUrl} target="blank" className="soundcloud-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="14">
                      <defs>
                        <linearGradient id="logo_hover_35" x1="0%" y1="0%" x2="0%" y2="100%" spreadMethod="pad">
                          <stop offset="0%" stopColor="#ff7700" stopOpacity="1" />
                          <stop offset="100%" stopColor="#ff3300" stopOpacity="1" />
                        </linearGradient>
                      </defs>
                      <path className="logo__path" d="M10.517 3.742c-.323 0-.49.363-.49.582 0 0-.244 3.591-.244 4.641 0 1.602.15 2.621.15 2.621 0 .222.261.401.584.401.321 0 .519-.179.519-.401 0 0 .398-1.038.398-2.639 0-1.837-.153-4.127-.284-4.592-.112-.395-.313-.613-.633-.613zm-1.996.268c-.323 0-.49.363-.49.582 0 0-.244 3.322-.244 4.372 0 1.602.119 2.621.119 2.621 0 .222.26.401.584.401.321 0 .581-.179.581-.401 0 0 .081-1.007.081-2.608 0-1.837-.206-4.386-.206-4.386 0-.218-.104-.581-.425-.581zm-2.021 1.729c-.324 0-.49.362-.49.582 0 0-.272 1.594-.272 2.644 0 1.602.179 2.559.179 2.559 0 .222.229.463.552.463.321 0 .519-.241.519-.463 0 0 .19-.944.19-2.546 0-1.837-.253-2.657-.253-2.657 0-.22-.104-.582-.425-.582zm-2.046-.358c-.323 0-.49.363-.49.582 0 0-.162 1.92-.162 2.97 0 1.602.069 2.496.069 2.496 0 .222.26.557.584.557.321 0 .581-.304.581-.526 0 0 .143-.936.143-2.538 0-1.837-.206-2.96-.206-2.96 0-.218-.198-.581-.519-.581zm-2.169 1.482c-.272 0-.232.218-.232.218v3.982s-.04.335.232.335c.351 0 .716-.832.716-2.348 0-1.245-.436-2.187-.716-2.187zm18.715-.976c-.289 0-.567.042-.832.116-.417-2.266-2.806-3.989-5.263-3.989-1.127 0-2.095.705-2.931 1.316v8.16s0 .484.5.484h8.526c1.655 0 3-1.55 3-3.155 0-1.607-1.346-2.932-3-2.932zm10.17.857c-1.077-.253-1.368-.389-1.368-.815 0-.3.242-.611.97-.611.621 0 1.106.253 1.542.699l.981-.951c-.641-.669-1.417-1.067-2.474-1.067-1.339 0-2.425.757-2.425 1.99 0 1.338.873 1.736 2.124 2.026 1.281.291 1.513.486 1.513.923 0 .514-.379.738-1.184.738-.65 0-1.26-.223-1.736-.777l-.98.873c.514.757 1.504 1.232 2.639 1.232 1.853 0 2.668-.873 2.668-2.163 0-1.477-1.193-1.845-2.27-2.097zm6.803-2.745c-1.853 0-2.949 1.435-2.949 3.502s1.096 3.501 2.949 3.501c1.852 0 2.949-1.434 2.949-3.501s-1.096-3.502-2.949-3.502zm0 5.655c-1.097 0-1.553-.941-1.553-2.153 0-1.213.456-2.153 1.553-2.153 1.096 0 1.551.94 1.551 2.153.001 1.213-.454 2.153-1.551 2.153zm8.939-1.736c0 1.086-.533 1.756-1.396 1.756-.864 0-1.388-.689-1.388-1.775v-3.897h-1.358v3.916c0 1.978 1.106 3.084 2.746 3.084 1.726 0 2.754-1.136 2.754-3.103v-3.897h-1.358v3.916zm8.142-.89l.019 1.485c-.087-.174-.31-.515-.475-.768l-2.703-3.692h-1.362v6.894h1.401v-2.988l-.02-1.484c.088.175.311.514.475.767l2.79 3.705h1.213v-6.894h-1.339v2.975zm5.895-2.923h-2.124v6.791h2.027c1.746 0 3.474-1.01 3.474-3.395 0-2.484-1.437-3.396-3.377-3.396zm-.097 5.472h-.67v-4.152h.719c1.436 0 2.028.688 2.028 2.076 0 1.242-.651 2.076-2.077 2.076zm7.909-4.229c.611 0 1 .271 1.242.737l1.26-.582c-.426-.883-1.202-1.503-2.483-1.503-1.775 0-3.016 1.435-3.016 3.502 0 2.143 1.191 3.501 2.968 3.501 1.232 0 2.047-.572 2.513-1.533l-1.145-.68c-.358.602-.718.864-1.329.864-1.019 0-1.611-.932-1.611-2.153-.001-1.261.583-2.153 1.601-2.153zm5.17-1.192h-1.359v6.791h4.083v-1.338h-2.724v-5.453zm6.396-.157c-1.854 0-2.949 1.435-2.949 3.502s1.095 3.501 2.949 3.501c1.853 0 2.95-1.434 2.95-3.501s-1.097-3.502-2.95-3.502zm0 5.655c-1.097 0-1.553-.941-1.553-2.153 0-1.213.456-2.153 1.553-2.153 1.095 0 1.55.94 1.55 2.153.001 1.213-.454 2.153-1.55 2.153zm8.557-1.736c0 1.086-.532 1.756-1.396 1.756-.864 0-1.388-.689-1.388-1.775v-3.794h-1.358v3.813c0 1.978 1.106 3.084 2.746 3.084 1.726 0 2.755-1.136 2.755-3.103v-3.794h-1.36v3.813zm5.449-3.907h-2.318v6.978h2.211c1.908 0 3.789-1.037 3.789-3.489 0-2.552-1.565-3.489-3.682-3.489zm-.108 5.623h-.729v-4.266h.783c1.565 0 2.21.706 2.21 2.133.001 1.276-.707 2.133-2.264 2.133z" />
                    </svg>
                  </a>
                </div>
                <div
                  className="song-media-img"
                  style={{ backgroundImage: `url(${song.artworkUrl})` }}
                />
              </div>
            )}
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
