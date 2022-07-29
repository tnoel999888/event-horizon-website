import React, { useState } from "react";
import { CircularProgress } from "@material-ui/core";
import { block } from "bem-cn";
import PropTypes from "prop-types";
import { getMediaIcon, getMediaAlt } from "./consts";
import "./news.scss";

const classname = block("news");

function News({
  mediaData, getInstaData, showMoreButtonVisible, dataLoading,
}) {
  const [hoverCaption, setHoverCaption] = useState("");
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className={classname()}>
      <div className={classname("feed")}>
        {mediaData && !mediaData.includes(undefined) && mediaData.map((mediaItem, index) => {
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
              className={classname("insta-media-container")}
              onMouseEnter={() => {
                setHoverCaption(caption);
                setHoverIndex(index);
              }}
              onMouseLeave={() => setHoverIndex(-1)}
            >
              { itemIsHovered && <div className={classname("insta-media-caption")}>{hoverCaption}</div> }
              { mediaIcon && <img src={mediaIcon} alt={mediaAlt} className={classname("insta-media-icon")} /> }
              <div
                className={classname("insta-media-img")}
                style={{ backgroundImage: `url(${thumbnailUrl || mediaUrl})` }}
              />
            </a>
          );
        })}
        {
          mediaData
          && mediaData.includes(undefined)
          && !dataLoading
          && <span className={classname("error-msg")}>Failed to fetch Instagram data :(</span>
        }
      </div>
      <div className={classname("load-more-and-loading-spinner-container")}>
        { showMoreButtonVisible && !dataLoading && (
          <div className={classname("load-more-btn")}>
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

News.propTypes = {
  mediaData: PropTypes.arrayOf(PropTypes.shape({
    caption: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    media_type: PropTypes.string.isRequired,
    media_url: PropTypes.string.isRequired,
    permalink: PropTypes.string.isRequired,
  })).isRequired,
  getInstaData: PropTypes.func.isRequired,
  showMoreButtonVisible: PropTypes.bool.isRequired,
  dataLoading: PropTypes.bool.isRequired,
};

export default News;
