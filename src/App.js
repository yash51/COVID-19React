import React from "react";
import coronaImage from "./images/image.png";
//import logo from "./images/download.png";
import { Cards, Chart, CountryPicker, FooterPagePro } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    // console.log(country);
    const fetchedData = await fetchData(country);
    //console.log(fetchedData);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data={this.state.data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <FooterPagePro />
      </div>
    );
  }
}

export default App;
