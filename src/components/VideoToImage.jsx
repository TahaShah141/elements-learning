import React, { useEffect, useRef, useState } from 'react';

export const VideoToImage = ({ videoSrc, imgSrc, className=""}) => {
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
      <img src={imgSrc} alt="Illustration" className={showImage ? "" : "absolute h-0 w-0 " + className} />
      {!showImage && <video ref={videoRef} src={videoSrc}  className={className} autoPlay muted playsInline />}
    </div>
  );
};