import { Avatar } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./VideoCardSearch.css";

const VideoCardSearch = ({
  videoId,
  title,

  timestamp,
  description,
  channelTitle,

}) => {
const [seed,setSeed]=useState()
    useEffect(() => {
        setSeed(Math.random() * 5000);
      }, []);

      const videoSrc = `https://www.youtube.com/embed/${videoId}`
  return (
    <div className="videoCardSearch">
     <iframe
     frameBorder="0"
     height="200px"
     width="300px"
     src={videoSrc}
     title="video player"
     />
      <div className="videoCardSearch__thumbnail">
        <h2>{title}</h2>
        <p>
        date published :  {timestamp} 
        </p>
        <div className="videoCardSearch__row">
          <Avatar alt={channelTitle} src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`}/>
          <p>{channelTitle}</p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoCardSearch;
