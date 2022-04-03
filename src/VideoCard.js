import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./VideoCard.css";
const VideoCard = ({
  id,
  title,
  channel,
  timestamp,
  channelImage,
}) => {
  const [seed,setSeed]=useState()
    useEffect(() => {
        setSeed(Math.random() * 5000);
      }, []);
  const videoSrc = `https://www.youtube.com/embed/${id}`
  return (
    <div className="videoCard">
      <iframe
     frameBorder="0"
     height="200px"
     width="300px"
     src={videoSrc}
     title="video player"
     className="videoCard__vid"
     />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={channel}
          src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`}
        />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            Published in : <br/>{timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
