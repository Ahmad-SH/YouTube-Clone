import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./RecommendedVids.css";
import VideoCard from "./VideoCard";
const RecommendedVids = () => {
  const [vids, setVids] = useState([]);
  useEffect(() => {
    const fetchVids = async () => {
      const fetchedVids = await fetch(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=AIzaSyDeLDySfQvw1otgh9UZZSB_QKSzjtavJmE"
      ).then((result) => result.json());
      setVids(fetchedVids.items);
    };

    fetchVids();
  }, []);

 

  return (
    <div className="recommendedVids">
      <h2>Recommended</h2>
      <div className="recommendedVids__vids">
        {vids && vids.map((items) => {
          return (
            <VideoCard
              title={items.snippet.title}
              timestamp={items.snippet.publishedAt}
              channel={items.snippet.channelTitle}
              image={items.snippet.thumbnails.high}
              id={items.id}
              key={items.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RecommendedVids;
