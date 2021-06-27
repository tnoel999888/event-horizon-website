import React, { useState } from "react";
import "./news.css";
import instagramMedia from "../../../api-responses/instagram-media";
import { getMediaIcon, getMediaAlt } from "./consts";

function News() {
  const mediaData = instagramMedia.data;
  const [hoverCaption, setHoverCaption] = useState("");
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <h1 className="news">
      {mediaData.map((mediaItem, index) => {
        const itemIsHovered = index === hoverIndex;
        const {
          caption,
          permalink,
          media_type: mediaType,
          thumbnail_url: thumbnailUrl,
          media_url: mediaUrl,
        } = mediaItem;
        const mediaIcon = getMediaIcon(mediaType);
        const mediaAlt = getMediaAlt(mediaType);

        return (
          <a
            href={permalink}
            className="insta-media-container"
            onMouseEnter={() => {
              setHoverCaption(caption);
              setHoverIndex(index);
            }}
            onMouseLeave={() => setHoverIndex(-1)}
          >
            { itemIsHovered && <div className="insta-media-caption">{hoverCaption}</div> }
            { mediaIcon && <img src={mediaIcon} alt={mediaAlt} className="insta-media-icon" /> }
            <div
              className="insta-media-img"
              style={{ backgroundImage: `url(${thumbnailUrl || mediaUrl})` }}
            />
          </a>
        );
      })}
    </h1>
  );
}

export default News;
