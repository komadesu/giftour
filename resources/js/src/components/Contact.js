import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__app-name-area">
        <h2 className="app-name">GIFTOUR</h2>
      </div>

      <div className="contact__info-areas">
        <div className="info-area contact">
          <h4 className="title">Contact</h4>
          <div className="content">E-mail:xxxxxx@xxx.com</div>
        </div>
        <div className="info-area creator">
          <h4 className="title">Creators</h4>
          <div className="contents">
            <div className="content">Koma Tsugata</div>
            <div className="content">Hana Inoue</div>
            <div className="content">Sakura Numata</div>
            <div className="content">Mitsuki Habaki</div>
          </div>
        </div>
      </div>
      <div className="bg">
        <div className="bg__cover">
          <img src="../storage/images/bg-img.png" alt="background image" />
        </div>
      </div>
    </div>
  );
};

export default Contact