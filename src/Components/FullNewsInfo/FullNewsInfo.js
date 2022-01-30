import React, { Component } from "react";
import "./FullNewsInfo.css";

export default class FullNewsInfo extends Component {
  render() {
    const {
      id,
      title,
      description,
      imgUrl,
      newsUrl,
      publishedAt,
      author,
      content,
      source,
      setHandleFullNews,
    } = this.props;
    return (
      <div>
        {id === newsUrl && (
          <>
            <div className="detailed-news-container">
              <i
                onClick={() => setHandleFullNews(null, false)}
                className="placeicon fas fa-long-arrow-alt-left"
              ></i>
              <img src={imgUrl} alt="" />
              <div className="full-details-about-news">
                <p className="time-stamp detail">
                  {new Date(publishedAt).toGMTString().slice(0, -3)}
                </p>
                <p className="author detail">{!author ? "Unknow" : author}</p>
                <p className="source detail">{source}</p>
                <div className="news-headline">
                  <h1>{title}</h1>
                </div>
                <div className="news-content">{content}</div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}
