import React from "react";
import { Link } from "react-router-dom";

import Search from "./Search";

const Index = () => {
  return (
    <div className="index">
      <h2 className="index__app-name">GIFTOUR</h2>
      <Search />
      <div className="index__categories">
        <div className="category price">
          <div className="choices">
            <Link className="choice" to="/timeline?price=1">
              〜¥5,000
            </Link>
            <Link className="choice" to="/timeline?price=2">
              〜¥10,000
            </Link>
            <Link className="choice" to="/timeline?price=3">
              〜¥15,000
            </Link>
            <Link className="choice" to="/timeline?price=4">
              〜¥20,000
            </Link>
            <Link className="choice" to="/timeline?price=5">
              ¥20,000〜
            </Link>
          </div>
          <h3 className="title">Price</h3>
          <h4 className="sub-title">価格帯から探す</h4>
          <div className="img-wrapper">
            <img src="../storage/images/preview-bg.png" />
          </div>
        </div>
        <div className="category age">
          <div className="choices">
            <Link className="choice" to="/timeline?age=1">
              〜19
            </Link>
            <Link className="choice" to="/timeline?age=2">
              20〜29
            </Link>
            <Link className="choice" to="/timeline?age=3">
              30〜39
            </Link>
            <Link className="choice" to="/timeline?age=4">
              40〜49
            </Link>
            <Link className="choice" to="/timeline?age=5">
              50〜59
            </Link>
            <Link className="choice" to="/timeline?age=6">
              60〜
            </Link>
          </div>
          <h3 className="title">Age</h3>
          <h4 className="sub-title">年齢から探す</h4>
          <div className="img-wrapper">
            <img src="../storage/images/preview-bg.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
