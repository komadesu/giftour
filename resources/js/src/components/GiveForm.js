import React from "react";

const GiveForm = () => {
  return (
    <div className="give-form">
      <div className="give-form__title">
        <label htmlFor="title">あげたもの：</label>
        <input type="text" id="title" />
      </div>
      <div className="give-form__brand">
        <label htmlFor="brand">ブランド / メーカー等：</label>
        <input type="text" id="brand" />
      </div>
      <div className="give-form__age">
        <label htmlFor="age">相手の年齢：</label>
        <input type="number" id="age" />
      </div>
      <div className="give-form__relation">
        <label htmlFor="relation">相手との関係：</label>
        <select id="relation">
          <option></option>
          <optio value="01">夫婦</optio>
          <optio value="02">恋人</optio>
          <optio value="03">親子</optio>
          <optio value="04">兄弟・姉妹</optio>
          <optio value="05">師弟</optio>
          <optio value="06">友達</optio>
          <optio value="07">先輩・後輩</optio>
          <optio value="08">その他</optio>
        </select>
      </div>
      <div className="give-form__gender">
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
      <div className="give-form__category">
        <label htmlFor="category">カテゴリー：</label>
        <select id="category">
          <option></option>
          <optio value="01">ファッション</optio>
          <optio value="02">スポーツ・アウトドア</optio>
          <optio value="03">アクセサリー</optio>
          <optio value="04">コスメ・健康</optio>
          <optio value="05">香水・フレグランス</optio>
          <optio value="06">食品・スイーツ</optio>
          <optio value="07">インテリア・家具</optio>
          <optio value="08">本</optio>
          <optio value="09">財布・小物</optio>
          <optio value="10">大物</optio>
          <optio value="11">その他</optio>
        </select>
      </div>
      <div className="give-form__price">
        <label htmlFor="price">価格：</label>
        <input type="number" id="price" />
      </div>
      <div className="give-form__situation">
        <label htmlFor="situation">シチュエーション：</label>
        <select id="situation">
          <option></option>
          <optio value="01">記念日</optio>
          <optio value="02">誕生日</optio>
          <optio value="03">クリスマス</optio>
          <optio value="04">結婚式</optio>
          <optio value="05">入学式・卒業式</optio>
          <optio value="06">バレンタインデー</optio>
          <optio value="07">ホワイトデー</optio>
          <optio value="08">新居祝い</optio>
          <optio value="09">お中元</optio>
          <optio value="11">その他</optio>
        </select>
      </div>
      <div className="give-form__preview">
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
      <div className="give-form__btn-wrapper">
        <input className="btn give-form-btn" type="button" value="Upload" />
      </div>
    </div>
  );
};

export default GiveForm;
