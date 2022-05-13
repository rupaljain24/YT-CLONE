import React from "react";
import Videocard from "./Videocard";
import { useState, useEffect } from "react";
import "./Videos.css";
import axios from "axios";

const Videos = () => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=9&regionCode=PK&key=AIzaSyA3eeldWJ_fFubKEdB4M6XaGk-7RIgHOt8"
      )
      .then((response) => {
        setVideoList(response.data.items);
        //console.log(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="videos__main">
      <h2>Recommended videos</h2>
      <div className="recommended_videos">
        {videoList.map((item) => {
          return <Videocard key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Videos;
