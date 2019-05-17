import React from 'react';
import axios from 'axios';
import logo from '../img/company_logo.png';
import '../css/header.scss';
import getTextData from './getTextData';


const NumberList = (props) => {
  console.log(props.value);

  const itemList = props.value;

  const listItems = itemList.map(number => (
    <li key={number.toString()}>
      {number}
    </li>
  ));
  return (
    <ul>{listItems}</ul>
  );
};

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    axios.get('./data.json')
      .then((res) => {
        this.setState({
          siteData: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    // console.log(this.state);
    const { siteData } = this.state;

    if (siteData) {
      console.log(siteData.data.mainPage.navBar);
    } else {
      return null;
    }

    return (
      <div className="headerWrapper">
        <a href=".../public/index.html"><img src={logo} alt="company_logo" id="companyLogo" /></a>
        <NumberList value={siteData.data.mainPage.navBar} />
      </div>
    );
  }
}
