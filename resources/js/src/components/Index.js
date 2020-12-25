import React from "react";
import { Link } from "react-router-dom";

import Search from "./Search";
import Footer from "./Footer";

const Index = () => {

  return (
    <div className="index">

      <h2 className="index__app-name">GIFTOUR</h2>
      <div className="index__hero-wrapper">
        <img
          src="../storage/images/hero-rose.png"
          className="img rose-img"
          alt="hero"
        />
        <span className="slider slider--left"></span>
        <span className="slider slider--right"></span>
        <img
          src="../storage/images/hero-hands.png"
          className="img hands-img"
          alt="hero"
        />
      </div>

      <Search fromIndex={true} />

      <div className="index__categories">
        <div className="category price">
          <div className="words">
            <h3 className="title">Price</h3>
            <h4 className="sub-title">価格帯から探す</h4>
          </div>

          <div className="choices">
            <Link className="choice" to="/timeline?price=1">
              <span>〜¥5,000</span>
            </Link>
            <Link className="choice" to="/timeline?price=2">
              <span>〜¥10,000</span>
            </Link>
            <Link className="choice" to="/timeline?price=3">
              <span>〜¥15,000</span>
            </Link>
            <Link className="choice" to="/timeline?price=4">
              <span>〜¥20,000</span>
            </Link>
            <Link className="choice" to="/timeline?price=5">
              <span>¥20,000〜</span>
            </Link>
          </div>
          <div className="img-wrapper">
            <img src="../storage/images/price-bg.png" />
          </div>
        </div>

        <div className="category age">
          <div className="words">
            <h3 className="title">Age</h3>
            <h4 className="sub-title">年齢から探す</h4>
          </div>

          <div className="choices">
            <Link className="choice" to="/timeline?opponentAge=1">
              <span>〜19</span>
            </Link>
            <Link className="choice" to="/timeline?opponentAge=2">
              <span>20〜29</span>
            </Link>
            <Link className="choice" to="/timeline?opponentAge=3">
              <span>30〜39</span>
            </Link>
            <Link className="choice" to="/timeline?opponentAge=4">
              <span>40〜49</span>
            </Link>
            <Link className="choice" to="/timeline?opponentAge=5">
              <span>50〜59</span>
            </Link>
            <Link className="choice" to="/timeline?opponentAge=6">
              <span>60〜</span>
            </Link>
          </div>
          <div className="img-wrapper">
            <img src="../storage/images/age-bg.png" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index
