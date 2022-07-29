import React, { useEffect, useState } from "react";
import { block } from "bem-cn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Header, Footer, Home, News, Music, Contact,
} from "./components";
import fetchInstaFeed from "./api/instagram";
import "./App.scss";

const classname = block("app");

function App() {
  const [mediaData, setMediaData] = useState([]);
  const [afterQueryParam, setAfterQueryParam] = useState("");
  const [showMoreButtonVisible, setShowMoreButtonVisible] = useState(true);
  const [dataLoading, setDataLoading] = useState(true);

  const MILLIS_IN_SECOND = 1000;
  const SECONDS_IN_MINUTE = 60;
  const MILLIS_IN_MINUTE = SECONDS_IN_MINUTE * MILLIS_IN_SECOND;
  const API_REFRESH_INTERVAL = 10 * MILLIS_IN_MINUTE;

  async function getInstaData() {
    setDataLoading(true);

    let newMediaData = [];
    const data = await fetchInstaFeed(afterQueryParam);

    if (data) {
      const dataJson = JSON.parse(data).json;
      if (dataJson) {
        const dataObj = JSON.parse(dataJson);
        if (dataObj) {
          newMediaData = [...mediaData].concat(dataObj.data);

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
      }
    }
  }

  useEffect(() => {
    getInstaData();

    const interval = setInterval(async () => {
      getInstaData();
    }, API_REFRESH_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div className={classname()}>
        <Header />
        <div>
          <Routes>
            <Route
              exact
              key="/"
              path="/"
              element={<Home />}
            />
            <Route
              exact
              key="/news/"
              path="/news/"
              element={(
                <News
                  mediaData={mediaData}
                  getInstaData={getInstaData}
                  showMoreButtonVisible={showMoreButtonVisible}
                  dataLoading={dataLoading}
                />
              )}
            />
            <Route
              exact
              key="/music/"
              path="/music/"
              element={<Music />}
            />
            <Route
              exact
              key="/contact/"
              path="/contact/"
              element={<Contact />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
