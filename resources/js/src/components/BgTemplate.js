import React from "react";

const BgTemplate = () => {
  return (
    <div className="bg">
      <div className="bg__catchphrases">
        <p className="catchphrase main">Discover treasure, look for gifts</p>
        <img src="storage/images/wavy-line.svg" alt="line image" />
        <p className="catchphrase sub">
          ギフトをシェアしてギフト探しをより快適に.
        </p>
      </div>
      <div className="bg__cover">
        <img src="storage/images/bg-img.png" alt="background image" />
      </div>
    </div>
  );
};

export default BgTemplate;
