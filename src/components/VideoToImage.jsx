import React, { useEffect, useRef, useState } from 'react';

export const VideoToImage = ({ videoSrc, imgSrc }) => {
  const [showImage, setShowImage] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleVideoEnd = () => {
        setShowImage(true);
      };

      videoElement.addEventListener('ended', handleVideoEnd);

      return () => {
        videoElement.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, []);

  return (
    <div>
      {showImage ? (
        <img src={imgSrc} alt="Illustration" />
      ) : (
        <video ref={videoRef} src={videoSrc} autoPlay muted playsInline />
      )}
    </div>
  );
};