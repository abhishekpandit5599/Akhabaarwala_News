import React, { Component } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import News from "./Components/News/News";
import SideBar from "./Components/SideBar/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Error from "./Components/Error404/Error";
import LoadingBar from "react-top-loading-bar";

// 952ca89088244b0dbcb11a549b959bdd
// 2e75134bebb6453188ce3e76b64700fc
// f035d5da645f4e5e98773bb503c38859
// 75cae3ccf3914b5eb0abed71522a4122


export default class App extends Component {
  apiKey = '2e75134bebb6453188ce3e76b64700fc';
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    
    const pageSize = 20;

    return (
      <div>
        <BrowserRouter>
          <LoadingBar
            color="red"
            progress={this.state.progress}
            height={3}
          />

          <Navbar/>
          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <News
                    setProgress={this.setProgress}
                    pageSize={pageSize}
                    apiKey={this.apiKey}
                    key="general"
                    category="general"
                    country="in"
                    language="en"
                  />
                }
              />
              <Route
                exact
                path="/business"
                element={
                  <News
                    setProgress={this.setProgress}
                    pageSize={pageSize}
                    apiKey={this.apiKey}
                    key="business"
                    category="business"
                    country="in"
                    language="en"
                  />
                }
              />
              <Route
                exact
                path="/entertainment"
                element={
                  <News
                    setProgress={this.setProgress}
                    pageSize={pageSize}
                    apiKey={this.apiKey}
                    key="entertainment"
                    category="entertainment"
                    country="in"
                    language="en"
                  />
                }
              />
              <Route
                exact
                path="/health"
                element={
                  <News
                    setProgress={this.setProgress}
                    pageSize={pageSize}
                    apiKey={this.apiKey}
                    key="health"
                    category="health"
                    country="in"
                    language="en"
                  />
                }
              />
              <Route
                exact
                path="/science"
                element={
                  <News
                    setProgress={this.setProgress}
                    pageSize={pageSize}
                    apiKey={this.apiKey}
                    key="science"
                    category="science"
                    country="in"
                    language="en"
                  />
                }
              />
              <Route
                exact
                path="/technology"
                element={
                  <News
                    setProgress={this.setProgress}
                    pageSize={pageSize}
                    apiKey={this.apiKey}
                    key="technology"
                    category="technology"
                    country="in"
                    language="en"
                  />
                }
              />
              <Route
                exact
                path="/general"
                element={
                  <News
                    setProgress={this.setProgress}
                    pageSize={pageSize}
                    apiKey={this.apiKey}
                    key="general"
                    category="general"
                    country="in"
                    language="en"
                  />
                }
              />
              <Route
                exact
                path="/sports"
                element={
                  <News
                    setProgress={this.setProgress}
                    pageSize={pageSize}
                    apiKey={this.apiKey}
                    key="sports"
                    category="sports"
                    country="in"
                    language="en"
                  />
                }
              />

              <Route
                exact
                path="/us"
                element={
                  <News
                    setProgress={this.setProgress}
                    pageSize={pageSize}
                    apiKey={this.apiKey}
                    key="us-general"
                    category="general"
                    country="us"
                    language="en"
                  />
                }
              />
              <Route
                exact
                path="/india"
                element={
                  <News
                    setProgress={this.setProgress}
                    pageSize={pageSize}
                    apiKey={this.apiKey}
                    key="india-general"
                    category="general"
                    country="in"
                    language="en"
                  />
                }
              />

              <Route
                exact
                path="/hindi"
                element={
                  <News
                    setProgress={this.setProgress}
                    pageSize={pageSize}
                    apiKey={this.apiKey}
                    key="hindi"
                    category="general"
                    country="in"
                    language="he"
                  />
                }
              />
              <Route
                exact
                path="/english"
                element={
                  <News
                    setProgress={this.setProgress}
                    pageSize={pageSize}
                    apiKey={this.apiKey}
                    key="english"
                    category="general"
                    country="in"
                    language="en"
                  />
                }
              />

              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />

              <Route path="*" element={<Error />} />
            </Routes>

            <SideBar />
          </div>
        </BrowserRouter>

        <Footer />
      </div>
    );
  }
}
