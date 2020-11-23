import { useState, useEffect } from 'react'
import { FormControl, Select, MenuItem } from '@material-ui/core';
import './App.css'
import axios from 'axios'
import Banner from './components/banner/Banner'

function App() {

  const [countries, setCountries] = useState([]);

  const [country, setCountry] = useState('Monde Entier');

  useEffect(() => {

    const getCountriesData = async () => {
      /* axios.get('https://api.covid19.maritim.go.id/v3/covid-19/countries')
        .then(response => {
          console.log(response);
          /* const countries = response.map((country) => (
            {
              name: country.country,
              value: country.countryInfo.iso2
            }
          ));
          setCountries(countries);
        }) */


      await fetch('https://api.covid19.maritim.go.id/v3/covid-19/countries')
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => (
            {
              name: country.country,
              value: country.countryInfo.iso2
            }
          ));
          setCountries(countries);
        })
    }
    getCountriesData();

  }, []);

  const onCountryChange = (event) => {
    //setCountry(event.target.value);
    console.log(event.target.value)
  }

  return (
    <div className="App">
      <Banner />
      <div className="app__header">
        <FormControl className="app__dropdown">
          <Select variant="outlined" value={country} onChange={onCountryChange}>
            <MenuItem value="monde">Monde entier</MenuItem>
            {countries.map(country => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {/* Header */}
      {/* Title + Select Input */}

      {/* InfoBox */}
      {/* InfoBox */}
      {/* InfoBox */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}

    </div>
  );
}

export default App;
