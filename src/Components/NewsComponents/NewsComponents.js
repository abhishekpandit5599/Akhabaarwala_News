import React, { Component } from 'react';
import './NewsComponents.css';

export default class NewsComponents extends Component {

  
  render() {
    const {title, description, imgUrl, newsUrl,publishedAt,author,setHandleFullNews} = this.props;
    return (
        <>
            <div onClick={()=> setHandleFullNews(newsUrl,true)} className='news-body'>
                <img src={imgUrl} alt=''/>
                <div className='news-info'>
                  <div className='Headline'><h4>{title}...</h4></div>
                  <div className='description'><span>{description}...</span></div>
                  {/* <a className='button' href={newsUrl} target="_blank">Read more</a> */}

                  <p className='author'>{!author?'Unknow':author}</p>
                  <p className='time-stamp'>{new Date(publishedAt).toGMTString().slice(0,-3)}</p>
                </div>
            </div>
        </>
    );
  }
}
