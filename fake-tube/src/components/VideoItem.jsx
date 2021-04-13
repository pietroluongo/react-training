import React from 'react';
import './VideoItem.css';

const VideoItem = ({ videoData, onVideoSelect }) => (
  <div onClick={() => onVideoSelect(videoData)} role="menuitem" className="video-item item">
    <img
      src={videoData.snippet.thumbnails.medium.url}
      alt={videoData.snippet.title}
      className="ui image"
    />
    <div className="content">
      <div className="header">
        {videoData.snippet.title}
      </div>
    </div>
  </div>
//   <div key={videoData.id.videoId}>
//     <img src={videoData.snippet.thumbnails.medium.url} alt="" />
//     <h3>{videoData.snippet.title}</h3>
//     <p>{videoData.snippet.description}</p>
//   </div>
);

export default VideoItem;
