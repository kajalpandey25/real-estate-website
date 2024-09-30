import React from 'react';
import './YoutubeVideos.css'; // Import the CSS file

const YoutubeVideos = () => {
  const videos = [
    {
      thumbnail: 'https://img.youtube.com/vi/BCzYi5pqOP8/hqdefault.jpg',
      title: 'Unlocking Value in Industrial Property Investments',
      description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed Aliquam Convallis Mauris.',
    },
    {
      thumbnail: 'https://img.youtube.com/vi/uFS9eoI7O9k/hqdefault.jpg', 
      title: 'The Potential of Emerging Real Estate Markets',
      description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed Aliquam Convallis Mauris.',
    },
    {
        thumbnail: 'https://img.youtube.com/vi/tXtKzcVDo_k/hqdefault.jpg',
        title: 'Global Opportunities in Commercial Property',
        description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed Aliquam Convallis Mauris.',
      }
  ];
  return (
    <div className="youtube-videos-container">
      <h2>YOUTUBE VIDEOS</h2>
      <p>Featured Residential Projects Across India</p>
      <div className="video-slider">
        <button className="slider-arrow left-arrow">{'<'}</button>
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
            <div className="play-button">&#9658;</div>
            <div className="video-title">{video.title}</div>
            <div className="video-description">{video.description}</div>
          </div>
        ))}
        <button className="slider-arrow right-arrow">{'>'}</button>
      </div>
      <div className="slider-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default YoutubeVideos;
