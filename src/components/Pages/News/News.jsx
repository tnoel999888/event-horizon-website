import React, { useState, useEffect } from "react";
import "./news.css";
import { getMediaIcon, getMediaAlt } from "./consts";
import fetchInstaFeed from "../../../api/instagram";

function News() {
  const [hoverCaption, setHoverCaption] = useState("");
  const [hoverIndex, setHoverIndex] = useState(null);
  const [mediaData, setMediaData] = useState([]);
  const [afterQueryParam, setAfterQueryParam] = useState("");
  const [showMoreButtonVisible, setShowMoreButtonVisible] = useState(true);
  const [dataLoading, setDataLoading] = useState(true);

  async function getInstaData() {
    setDataLoading(true);
    const data = await fetchInstaFeed(afterQueryParam);
    const dataJson = JSON.parse(data).json;
    const dataObj = JSON.parse(dataJson);
    const newMediaData = [...mediaData].concat(dataObj.data);
    setMediaData(newMediaData);
    setDataLoading(false);

    const { next } = dataObj.paging;

    if (next) {
      const nextQueryString = next.substring(next.indexOf("&"));
      const nextQueryParams = new URLSearchParams(nextQueryString);
      const after = nextQueryParams.get("after");
      setAfterQueryParam(after);
    } else {
      setShowMoreButtonVisible(false);
    }
  }

  useEffect(async () => {
    getInstaData();

    const interval = setInterval(async () => {
      getInstaData();
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
      {showMoreButtonVisible && <div className="button-container"><button type="button" className="btn btn-primary" onClick={() => getInstaData()}>{dataLoading ? "Loading" : "Show more"}</button></div>}
    </h1>
  );
}

export default News;
