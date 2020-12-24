import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.setOpponentGenderState = this.setOpponentGenderState.bind(this);

    this.onChangeOpponentGender = this.onChangeOpponentGender.bind(this);
    this.onChangeOpponentAge = this.onChangeOpponentAge.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeRelationship = this.onChangeRelationship.bind(this);
    this.onChangeSituation = this.onChangeSituation.bind(this);

    this.handleSearch = this.handleSearch.bind(this)

    this.state = {
      opponentGender: '',
      opponentAge: '',
      price: '',
      relationship: '',
      situation: '',
    };
  }

  setOpponentGenderState(value) {
    let opponentGenderState
    if (value === 'male') opponentGenderState = 1
    if (value === 'female') opponentGenderState = 2
    if (value === 'others') opponentGenderState = 3
    this.setState({ opponentGender: opponentGenderState })
  }

  onChangeOpponentGender(e) {
    const opponentGender = e.target.id
    this.setOpponentGenderState(opponentGender)
  }
  onChangeOpponentAge(e) {
    this.setState({ opponentAge: e.target.value })
    console.log(e.target.value)
  }
  onChangePrice(e) {
    this.setState({ price: e.target.value })
    console.log(e.target.value)
  }
  onChangeRelationship(e) {
    this.setState({ relationship: e.target.value })
    console.log(e.target.value)
  }
  onChangeSituation(e) {
    this.setState({ situation: e.target.value })
    console.log(e.target.value)
  }

  async handleSearch(e) {
    e.preventDefault()

    const { userId } = this.props
    await Promise.all([this.props.readGifts(), this.props.readBookmarks(userId)])

    console.log('read gifts and read bookmarks!')
  }

  render() {
    return (
      <div className="search">
        <div className="search__title">
          <h4>Who is this present for?</h4>
          <span>誰へのプレゼントですか</span>
        </div>
        <form className="search__form">
          <div className="gender input">
            <input type="radio" id="male" name="gender" checked={this.state.opponentGender === 1} onChange={this.onChangeOpponentGender} />
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" checked={this.state.opponentGender === 2} onChange={this.onChangeOpponentGender} />
            <label htmlFor="female">Female</label>
            <input type="radio" id="others" name="gender" checked={this.state.opponentGender === 3} onChange={this.onChangeOpponentGender} />
            <label htmlFor="others">Others</label>
          </div>
          <div className="age input">
            <label htmlFor="age">Age</label>
            <select id="age" value={this.state.opponentAge} onChange={this.onChangeOpponentAge}>
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
            <select id="price" value={this.state.price} onChange={this.onChangePrice}>
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
          <div className="situation input">
            <label htmlFor="situation">Situation</label>
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
          <div className="btn-wrapper">
            <input className="btn btn__reverse" type="button" value="Seach" onClick={this.handleSearch} />
          </div>
        </form>
      </div>
    );
  }
};

export default Search
