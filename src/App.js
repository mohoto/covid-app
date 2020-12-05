import { useState, useEffect } from 'react'
import { FormControl, Select, MenuItem, Card, CardContent } from '@material-ui/core';
import './App.css'
import Banner from './components/banner/Banner'
import InfoBox from './components/infoBox/InfoBox'
import MapLeaft from './components/map/MapLeaflet'
import "leaflet/dist/leaflet.css";
import { sortData } from './utility/sortUtil'
import Table from './components/table/Table'
import LineGraph from './components/lineGraph/LineGraph'
import useCountries from './utility/useCountries'
import { actionTypes } from './reducer/reducer'
import { useStateValue } from './context/StateProvider'


function App() {

  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});

  const { countries } = useCountries();

  const [{ countryCode }, dispatch] = useStateValue();

  const [mapCenter, setMapCenter] = useState([48.499998, 23.3833318]);
  const [mapZoom, setMapZomm] = useState(4);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
      .then(response => response.json())
      .then(data => {
        setCountryInfo(data);
      })
  }, []);

  const onCountryChange = (event) => {
    /* const countryCode = event.target.value;
    /* dispatch({
      type: actionTypes.SET_COUNTRY_CODE,
      country: countryCode
    }); 
    //setCountry(countryCode);

    const url = countryCode === 'worldwide' ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${countryCode}?strict=true`;*/
    //https://api.covid19.maritim.go.id/v3/covid-19/all
    //https://api.covid19.maritim.go.id/v3/covid-19/countries/[COUNTRY_CODE]
    /*await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
        setMapCenter([35, -25]);
        setMapZomm(8);
      }); */
    setMapCenter([35, -25]);
    setMapZomm(8);
  };


  return (
    <div className="app">
      <Banner />
      <div className="app__body">
        <div className="app__left">
          <div className="app__header">
            <h1>COVID-19 TRACKER</h1>
            <FormControl className="app__dropdown">
              <Select variant="outlined" value={country} onChange={onCountryChange}>
                <MenuItem value="worldwide">Monde entier</MenuItem>
                {countries.map(({ country, countryInfo }) => (
                  <MenuItem value={countryInfo.iso2}>{country}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="app__stats">
            <InfoBox title="Cas recensés" cases={countryInfo.todayCases} total={countryInfo.cases} country={countryInfo.country} flag={countryInfo.countryInfo?.flag} pourcentage={(countryInfo.cases / countryInfo.population).toFixed(4) * 100} />
            <InfoBox title="Guerisons" cases={countryInfo.todayRecovered} total={countryInfo.recovered} country={countryInfo.country} flag={countryInfo.countryInfo?.flag} pourcentage={(countryInfo.recovered / countryInfo.population).toFixed(3) * 100} />
            <InfoBox title="Décès" cases={countryInfo.todayDeaths} total={countryInfo.deaths} country={countryInfo.country} flag={countryInfo.countryInfo?.flag} pourcentage={(countryInfo.deaths / countryInfo.population).toFixed(4) * 100} />
          </div>
          <MapLeaft center={mapCenter} zoom={mapZoom} />
        </div>
        <div className="app__right">
          <Card>
            <CardContent>
              <h3>Cas resensés par pays</h3>
              <Table countries={sortData(countries)} />
            </CardContent>
            <LineGraph />
          </Card>
        </div>
      </div>

      {/* InfoBox title= "coronavirus cases*/}
      {/* InfoBox */}
      {/* InfoBox */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}

    </div>
  );
}

export default App;
