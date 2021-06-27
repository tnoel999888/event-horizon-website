import React, { useState } from "react";
import "./news.css";
import instagramMedia from "../../../api-responses/instagram-media";

function News() {
  const mediaData = instagramMedia.data;
  const [showCaptionOverlay, setShowCaptionOverlay] = useState(false);
  const [hoverCaption, setHoverCaption] = useState("");
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <h1 className="news">
      {mediaData.map((mediaItem, index) => (
        <a
          href={mediaItem.permalink}
          className="insta-media-container"
          onMouseEnter={() => {
            setShowCaptionOverlay(true);
            setHoverCaption(mediaItem.caption);
            setHoverIndex(index);
          }}
          onMouseLeave={() => {
            setShowCaptionOverlay(false);
          }}
        >
          { (showCaptionOverlay && index === hoverIndex) && <div className="insta-media-caption">{hoverCaption}</div>}
          <div
            className="insta-media-img"
            style={{ backgroundImage: `url(${mediaItem.media_url})` }}
          />
        </a>
      ))}
    </h1>
  );
}

export default News;
