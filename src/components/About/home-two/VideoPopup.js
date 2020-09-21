import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const VideoPopup = () => {
  const [modalStatus, isOpen] = useState(false);
  return (
 
        <div className="about-right-img" style={{'backgroundImage': `url(../../../assets/images/about_2.JPG)`}}> 
          <div className="video-container">
          <ModalVideo
              channel="youtube"
              isOpen={modalStatus}
              videoId="BDYUV7tx_pM"
              onClose={() => isOpen(false)}
          />
          <button onClick={() => isOpen(true)} className="play-video">
              <i className="fa fa-play"></i>
          </button>
          </div>
        </div>
 
  );
};

export default VideoPopup;
