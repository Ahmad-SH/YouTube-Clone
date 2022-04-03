import { TuneOutlined } from "@material-ui/icons";
import React from "react";
import { useAuth } from "./AuthContext/AuthContext";
import "./SearchPage.css";
import VideoCardSearch from "./VideoCardSearch";
const SearchPage = () => {
  const { videoState } = useAuth();
 
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlined className="filter" />
        <p>FILTERS</p>
      </div>
      <hr />
      <div className="searchPage__vids">
          
        {videoState.map((items) => {
          return <VideoCardSearch
            title={items.snippet.title}
            timestamp={items.snippet.publishTime}
            channelTitle={items.snippet.channelTitle}
            description={items.snippet.description}
            image={items.snippet.thumbnails.high.url}
            videoId ={items.id.videoId}
          />;
        })}
      </div>
    </div>
  );
};

export default SearchPage;
