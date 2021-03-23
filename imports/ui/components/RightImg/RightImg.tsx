import React from 'react';
import StyledRightImg from './StyledRightImg';

const RightImg = (props: any): JSX.Element => {
  return (
    <StyledRightImg right={props.right}>
      <img
        src="./images/whatsapp-bg-1.jpg"
        alt="fond d'écran"
        className="rightImg_image"
      />
      <h3 className="rightImg_title">Gardez votre téléphone connecté</h3>
      <div className="rightImg_div">
        <p className="rightImg_text">{props.messageText}</p>
        <div className="rightImg_divider" />
      </div>
    </StyledRightImg>
  );
};

export default RightImg;
