import React from "react"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video pb-sm-5">
      <iframe
        src={videoSrcURL}
        title={videoTitle}
        width={640}
        height={385}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      ></iframe>
  </div>
)
export default Video
