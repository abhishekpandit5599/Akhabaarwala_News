import React, { Component } from "react";
import Error from "../Error404/Error";
import NewsComponents from "../NewsComponents/NewsComponents";
import FullNewsInfo from "../FullNewsInfo/FullNewsInfo";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../Spinner/Spinner";
import "./News.css";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pagesRequired: 1,
      isFullNews: false,
    };
    document.title = `AkhabaarWala - ${this.capitalizeFirstLetter(
      this.props.category
    )}`;
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  fetchData = async () => {
    this.updateNews(this.state.page + 1);
  };

  async updateNews(pageNo) {
    const url = `https://newsapi.org/v2/top-headlines?page=${pageNo}&pageSize=${this.props.pageSize}&language=${this.props.language}&country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}`;
    this.setState({ loading: true });
    await fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((parsedData) => {
        this.setState({
          articles: this.state.articles.concat(parsedData.articles),
          page: pageNo,
          totalResult: parsedData.totalResults,
          pagesRequired: Math.ceil(this.state.totalResult / 20),
          loading: false,
        });
      });
  }

  async componentDidMount() {
    this.props.setProgress(0);
    this.updateNews(this.state.page);
    this.props.setProgress(100);
  }

  setHandleFullNews = (newsUrl, status) => {
    this.setState({
      isFullNews: status,
      id: newsUrl,
    });
  };

  render() {
    return (
      <>
        {!this.state.isFullNews && (
          <div className="all-news-container">
            <>
              {this.state.articles.length ? (
                <div className="news-container">
                  <div className="headline">
                    <h2>
                      AkhabaarWala - Top{" "}
                      {this.capitalizeFirstLetter(this.props.category)}{" "}
                      Headlines
                    </h2>
                  </div>
                  <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchData}
                    hasMore={this.state.pagesRequired !== this.state.page}
                    loader={<Spinner />}
                  >
                    {this.state.articles.map((element, i) => {
                      return (
                        <NewsComponents
                          setHandleFullNews={this.setHandleFullNews}
                          key={element.url}
                          newsUrl={element.url}
                          imgUrl={element.urlToImage}
                          publishedAt={element.publishedAt}
                          author={element.author}
                          title={
                            element.title ? element.title.slice(0, 40) : ""
                          }
                          description={
                            element.description
                              ? element.description.slice(0, 75)
                              : ""
                          }
                        />
                      );
                    })}
                  </InfiniteScroll>
                </div>
              ) : this.state.loading ? (
                <Spinner />
              ) : (
                <Error />
              )}
            </>
          </div>
        )}
        {this.state.isFullNews && (
          <div className="fullNews-container">
            {this.state.articles.map((element, i) => {
              return (
                <FullNewsInfo
                  setHandleFullNews={this.setHandleFullNews}
                  key={i}
                  id={this.state.id}
                  source={element.source.name}
                  content={element.content}
                  newsUrl={element.url}
                  imgUrl={element.urlToImage}
                  publishedAt={element.publishedAt}
                  author={element.author}
                  title={element.title}
                  description={
                    element.description
                  }
                />
              );
            })}
          </div>
        )}
      </>
    );
  }
}
