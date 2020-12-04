import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="search__title">
        <h4>Who is this present for?</h4>
        <span>誰へのプレゼントですか</span>
      </div>
      <form className="search__form">
        <div className="gender input">
          <input type="radio" id="male" name="gender" />
          <label htmlFor="male">Male</label>
          <input type="radio" id="female" name="gender" />
          <label htmlFor="female">Female</label>
          <input type="radio" id="others" name="gender" />
          <label htmlFor="others">Others</label>
        </div>
        <div className="age input">
          <label htmlFor="age">Age</label>
          <select id="age">
            <option></option>
            <option value="1">〜19</option>
            <option value="2">20〜29</option>
            <option value="3">30〜39</option>
            <option value="4">40〜49</option>
            <option value="5">50〜59</option>
            <option value="6">60〜</option>
          </select>
        </div>
        <div className="price input">
          <label htmlFor="price">Price</label>
          <select id="price">
            <option></option>
            <option value="1">〜¥5,000</option>
            <option value="2">〜¥10,000</option>
            <option value="3">〜¥15,000</option>
            <option value="4">〜¥20,000</option>
            <option value="5">¥20,000〜</option>
          </select>
        </div>
        <div className="relationship input">
          <label htmlFor="relationship">Relationship</label>
          <select id="relationship">
            <option></option>
            <option value="1">夫婦</option>
            <option value="2">恋人</option>
            <option value="3">親子</option>
            <option value="4">兄弟・姉妹</option>
            <option value="5">師弟</option>
            <option value="6">友達</option>
            <option value="7">先輩・後輩</option>
            <option value="8">その他</option>
          </select>
        </div>
        <div className="situation input">
          <label htmlFor="situation">Situation</label>
          <select id="situation">
            <option></option>
            <option value="1">記念日</option>
            <option value="2">誕生日</option>
            <option value="3">クリスマス</option>
            <option value="4">結婚式</option>
            <option value="5">入学式・卒業式</option>
            <option value="6">バレンタインデー</option>
            <option value="7">ホワイトデー</option>
            <option value="8">新居祝い</option>
            <option value="9">お中元</option>
            <option value="10">その他</option>
          </select>
        </div>
        <div className="btn-wrapper">
          <input className="btn" type="button" value="Seach" />
        </div>
      </form>
    </div>
  );
};

export default Search
