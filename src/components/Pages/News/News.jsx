import React, { useState, useEffect } from "react";
import "./news.css";
import { CircularProgress } from "@material-ui/core";
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

    if (
      dataObj
      && dataObj.paging
      && dataObj.paging.next
    ) {
      setAfterQueryParam(dataObj.paging.cursors.after);
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
    <div className="news">
      <div className="feed">
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
      </div>
      <div className="load-more-and-loading-spinner-container">
        { showMoreButtonVisible && !dataLoading && (
          <div className="load-more-btn">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => getInstaData()}
            >
              Load More
            </button>
          </div>
        )}
        { dataLoading && <CircularProgress size="2rem" /> }
      </div>
    </div>
  );
}

export default News;
