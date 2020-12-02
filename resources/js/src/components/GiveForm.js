import React from "react";

const GiveForm = () => {
  return (
    <div className="give-form">
      <div className="get-form__grid-container">
        <div className="title input">
          <label htmlFor="title">あげたもの：</label>
          <input type="text" id="title" />
        </div>
        <div className="brand input">
          <label htmlFor="brand">ブランド / メーカー等：</label>
          <input type="text" id="brand" />
        </div>
        <div className="age input">
          <label htmlFor="age">相手の年齢：</label>
          <input type="number" id="age" />
        </div>
        <div className="relation input">
          <label htmlFor="relation">関係性：</label>
          <select id="relation">
            <option></option>
            <option value="01">夫婦</option>
            <option value="02">恋人</option>
            <option value="03">親子</option>
            <option value="04">兄弟・姉妹</option>
            <option value="05">師弟</option>
            <option value="06">友達</option>
            <option value="07">先輩・後輩</option>
            <option value="08">その他</option>
          </select>
        </div>
        <div className="gender input">
          <label htmlFor="gender">相手の性別：</label>
          <div className="checkbox">
            <input type="checkbox" id="male" />
            <label htmlFor="male">Male</label>
            <input type="checkbox" id="female" />
            <label htmlFor="female">Female</label>
            <input type="checkbox" id="others" />
            <label htmlFor="others">Others</label>
          </div>
        </div>
        <div className="category input">
          <label htmlFor="category">カテゴリー：</label>
          <select id="category">
            <option></option>
            <option value="01">ファッション</option>
            <option value="02">スポーツ・アウトドア</option>
            <option value="03">アクセサリー</option>
            <option value="04">コスメ・健康</option>
            <option value="05">香水・フレグランス</option>
            <option value="06">食品・スイーツ</option>
            <option value="07">インテリア・家具</option>
            <option value="08">本</option>
            <option value="09">財布・小物</option>
            <option value="10">大物</option>
            <option value="11">その他</option>
          </select>
        </div>
        <div className="price input">
          <label htmlFor="price">価格：</label>
          <input type="number" id="price" />
        </div>
        <div className="situation input">
          <label htmlFor="situation">シチュエーション：</label>
          <select id="situation">
            <option></option>
            <option value="01">記念日</option>
            <option value="02">誕生日</option>
            <option value="03">クリスマス</option>
            <option value="04">結婚式</option>
            <option value="05">入学式・卒業式</option>
            <option value="06">バレンタインデー</option>
            <option value="07">ホワイトデー</option>
            <option value="08">新居祝い</option>
            <option value="09">お中元</option>
            <option value="11">その他</option>
          </select>
        </div>
      </div>
      <div className="give-form__bottom">
        <div className="preview-wrapper">
          <label className="preview" htmlFor="preview">
            <div className="preview__bg-img">
              <img src="../storage/img/preview-bg.png" alt="preview bg image" />
            </div>
            <div className="preview__icon">
              <img src="../storage/img/camera.svg" />
            </div>
            <input type="file" id="preview" accept="image/*" />
          </label>
        </div>
        <div className="btn-wrapper">
          <input className="btn give-form-btn" type="button" value="Upload" />
        </div>
      </div>
    </div>
  );
};

export default GiveForm;
