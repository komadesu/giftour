import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.setDefaultRelationshipState = this.setDefaultRelationshipState.bind(this)
    this.setOpponentGenderState = this.setOpponentGenderState.bind(this)
    this.setDefaultCategoryState = this.setDefaultCategoryState.bind(this)
    this.setDefaultSituationState = this.setDefaultSituationState.bind(this)

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeBrand = this.onChangeBrand.bind(this);
    this.onChangeOpponentAge = this.onChangeOpponentAge.bind(this);
    this.onChangeRelationship = this.onChangeRelationship.bind(this);
    this.onChangeOpponentGender = this.onChangeOpponentGender.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeSituation = this.onChangeSituation.bind(this);

    this.onFileChange = this.onFileChange.bind(this);
    this.previewFile = this.previewFile.bind(this);

    const gift = props.gift
    this.state = {
      name: '',
      brand: '',
      opponentAge: '',
      relationship: '',
      opponentGender: '',
      category: '',
      price: '',
      situation: '',
      imageData: '',
    };
  }
  componentDidMount() {
    const { gift } = this.props

    if (gift) {
      const { name, brand, opponentAge, defaultBrand, relationship, opponentGender, category, price, situation } = gift
      this.setState({
        name: name,
        brand: brand,
        opponentAge: opponentAge,
        price: price,
      })
      this.setDefaultRelationshipState(relationship)
      this.setOpponentGenderState(opponentGender)
      this.setDefaultCategoryState(category)
      this.setDefaultSituationState(situation)
    }
  }

  setDefaultRelationshipState(value) {
    let relationshipState
    if (value === '夫婦') relationshipState = 1
    if (value === '恋人') relationshipState = 2
    if (value === '家族') relationshipState = 3
    if (value === '兄弟・姉妹') relationshipState = 4
    if (value === '師弟') relationshipState = 5
    if (value === '友達') relationshipState = 6
    if (value === '先輩・後輩') relationshipState = 7
    if (value === 'その他') relationshipState = 8
    this.setState({ relationship: relationshipState })
  }
  setOpponentGenderState(value) {
    let opponentGenderState
    if (value === 'male') opponentGenderState = 1
    if (value === 'female') opponentGenderState = 2
    if (value === 'others') opponentGenderState = 3
    this.setState({ opponentGender: opponentGenderState })
  }
  setDefaultCategoryState(value) {
    let categoryState
    if (value === 'ファッション') categoryState = 1
    if (value === 'スポーツ・アウトドア') categoryState = 2
    if (value === 'アクセサリー') categoryState = 3
    if (value === 'コスメ・健康') categoryState = 4
    if (value === '香水・フレグランス') categoryState = 5
    if (value === '食品・スイーツ') categoryState = 6
    if (value === 'インテリア・家具') categoryState = 7
    if (value === '本') categoryState = 8
    if (value === '財布・小物') categoryState = 9
    if (value === '大物') categoryState = 10
    if (value === 'その他') categoryState = 11
    this.setState({ category: categoryState })
  }
  setDefaultSituationState(value) {
    let situationState
    if (value === '記念日') situationState = 1
    if (value === '誕生日') situationState = 2
    if (value === 'クリスマス') situationState = 3
    if (value === '結婚式') situationState = 4
    if (value === '入学式・卒業式') situationState = 5
    if (value === 'バレンタインデー') situationState = 6
    if (value === 'ホワイトデー') situationState = 7
    if (value === '新居祝い') situationState = 8
    if (value === 'お中元') situationState = 9
    if (value === 'その他') situationState = 10
    this.setState({ situation: situationState })
  }

  onChangeName(e) {
    this.setState({ name: e.target.value })
  }
  onChangeBrand(e) {
    this.setState({ brand: e.target.value })
  }
  onChangeOpponentAge(e) {
    this.setState({ age: e.target.value })
  }
  onChangeRelationship(e) {
    this.setState({ relationship: e.target.value })
  }
  onChangeOpponentGender(e) {
    const opponentGender = e.target.id
    this.setOpponentGenderState(opponentGender)
  }
  onChangeCategory(e) {
    this.setState({ category: e.target.value })
  }
  onChangePrice(e) {
    this.setState({ price: e.target.value })
  }
  onChangeSituation(e) {
    this.setState({ situation: e.target.value })
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
    const { gift } = this.props

    return (
      <form className="form">
        <div className="form__grid-container">
          <div className="title input">
            <label htmlFor="title">あげたもの：</label>
            <input type="text" id="title" value={this.state.name} onChange={this.onChangeName} />
          </div>
          <div className="brand input">
            <label htmlFor="brand">ブランド / メーカー等：</label>
            <input type="text" id="brand" value={this.state.brand} onChange={this.onChangeBrand} />
          </div>
          <div className="age input">
            <label htmlFor="age">相手の年齢：</label>
            <input type="number" id="age" value={this.state.opponentAge} onChange={this.onChangeOpponentAge} />
          </div>
          <div className="relationship input">
            <label htmlFor="relationship">関係性：</label>
            <select id="relationship" value={this.state.relationship} onChange={this.onChangeRelationship}>
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
              <input type="radio" id="male" name="gender" checked={this.state.opponentGender === 1} onChange={this.onChangeOpponentGender} />
              <label htmlFor="male">Male</label>
              <input type="radio" id="female" name="gender" checked={this.state.opponentGender === 2} onChange={this.onChangeOpponentGender} />
              <label htmlFor="female">Female</label>
              <input type="radio" id="others" name="gender" checked={this.state.opponentGender === 3} onChange={this.onChangeOpponentGender} />
              <label htmlFor="others">Others</label>
            </div>
          </div>
          <div className="category input">
            <label htmlFor="category">カテゴリー：</label>
            <select id="category" value={this.state.category} onChange={this.onChangeCategory}>
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
            <input type="number" id="price" value={this.state.price} onChange={this.onChangePrice} />
          </div>
          <div className="situation input">
            <label htmlFor="situation">シチュエーション：</label>
            <select id="situation" value={this.state.situation} onChange={this.onChangeSituation}>
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
            <input className="btn btn__reverse form-btn" type="button" value="Upload" />
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
