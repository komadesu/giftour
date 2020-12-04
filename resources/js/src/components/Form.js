import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData: null
    };
    this.onFileChange = this.onFileChange.bind(this);
  }

  onFileChange(event) {
    const files = event.target.files;
    const file = files[0];
    if (!file.type.startsWith("image/")) return;

    if (!files.length) {
      this.setState({ imageData: null });
    }
    this.previewFile(file);
  }

  previewFile(file) {
    const reader = new FileReader();

    reader.onload = e => {
      this.setState({ imageData: e.target.result });
    };
    reader.readAsDataURL(file);
  }

  render() {
    return (
      <form className="form">
        <div className="form__grid-container">
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
          <div className="gender input">
            <label htmlFor="gender">相手の性別：</label>
            <div className="radio-wrapper">
              <input type="radio" id="male" name="gender" />
              <label htmlFor="male">Male</label>
              <input type="radio" id="female" name="gender" />
              <label htmlFor="female">Female</label>
              <input type="radio" id="others" name="gender" />
              <label htmlFor="others">Others</label>
            </div>
          </div>
          <div className="category input">
            <label htmlFor="category">カテゴリー：</label>
            <select id="category">
              <option></option>
              <option value="1">ファッション</option>
              <option value="2">スポーツ・アウトドア</option>
              <option value="3">アクセサリー</option>
              <option value="4">コスメ・健康</option>
              <option value="5">香水・フレグランス</option>
              <option value="6">食品・スイーツ</option>
              <option value="7">インテリア・家具</option>
              <option value="8">本</option>
              <option value="9">財布・小物</option>
              <option value="10">大物</option>
              <option value="11">その他</option>
            </select>
          </div>
          <div
            className={
              this.props.formState
                ? "price input price-appeared"
                : "price input"
            }
          >
            <label htmlFor="price">価格：</label>
            <input type="number" id="price" />
          </div>
          <div className="situation input">
            <label htmlFor="situation">シチュエーション：</label>
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
        </div>
        <div className="form__bottom">
          <div className="preview-wrapper">
            <label className="preview" htmlFor="preview">
              <div className="preview__bg-img">
                <img
                  src="../storage/images/preview-bg.png"
                  alt="preview bg image"
                />
              </div>
              <div className="preview__img">
                <img src={this.state.imageData} />
              </div>
              <div className="preview__icon">
                <img src="../storage/images/camera.svg" />
              </div>
              <input
                className="preview__input"
                onChange={this.onFileChange}
                type="file"
                id="preview"
                accept="image/*"
              />
            </label>
          </div>
          <div
            className={
              this.props.formState
                ? "btn-wrapper give-btn is-appeared"
                : "btn-wrapper give-btn"
            }
          >
            <input className="btn form-btn" type="button" value="Upload" />
          </div>
          <div
            className={
              this.props.formState
                ? "btn-wrapper get-btn"
                : "btn-wrapper get-btn is-appeared"
            }
          >
            <input className="btn form-btn" type="button" value="Upload" />
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
