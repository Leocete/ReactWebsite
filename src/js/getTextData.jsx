import axios from 'axios';

const getTextData = () => {
  axios.get('./data.json')
    .then((res) => {
      this.setState({
        siteData: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getTextData;
