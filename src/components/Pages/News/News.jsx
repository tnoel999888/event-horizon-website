import React, { useState, useEffect } from "react";
import "./news.css";
import { getMediaIcon, getMediaAlt } from "./consts";
import fetchInstaFeed from "../../../api/instagram";

async function getInstaData() {
  const data = await fetchInstaFeed();
  const dataJson = JSON.parse(data).json;
  const dataObj = JSON.parse(dataJson);
  return dataObj.data;
}

function News() {
  const [hoverCaption, setHoverCaption] = useState("");
  const [hoverIndex, setHoverIndex] = useState(null);
  const [mediaData, setMediaData] = useState(null);

  useEffect(async () => {
    const data = await getInstaData();
    setMediaData(data);

    const interval = setInterval(async () => {
      const newData = await getInstaData();
      setMediaData(newData);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="news">
      {mediaData && mediaData.map((mediaItem, index) => {
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
            key={permalink}
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
