import React, { Component } from "react";
import "./About.css";
import img from "./news-vector1.jpg";

export default class About extends Component {
  render() {
    return (
      <>
        <div className="about-container">
          <div className="about-card">
            <div className="image">
              <img className="animated" src={img} alt="" />
            </div>
          </div>
          <div className="about-content">
            <div className="about-heading">AkhabaarWala</div>
            <div className="about-pera">
              <span>
                Keep yourself updated with akhabaarwala.com Hindi News. We are
                first to cover akhabaarwala Latest News and Breaking News as
                they take place. You will get all akhabaarwala Political News
                and Crime News in Hindi Which are Exclusively available on
                AkhabaarWala We publish more than 100
                AkhabaarWala news per day to highlight all current affairs
                Which delivers the ground reality of the news. We understand the
                value of news in our lives and Committed to provide you
                akhabaarwala Samachar in Hindi.
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
