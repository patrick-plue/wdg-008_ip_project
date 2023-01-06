import Ip from './components/Ip';
import LeafletMap from './components/LeafletMap';
import CountryData from './components/CountryData';
import Time from './components/Time';
import { useEffect, useState } from 'react';
import './styles/app.css';

function App() {
  const [ipData, setIpData] = useState();
  const [countryData, setCountryData] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(process.env.REACT_APP_IPIFY);
        const data = await res.json();
        setIpData(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const res =
          await fetch(`https://restcountries.com/v3.1/alpha/${ipData.location.country}
`);
        const data = await res.json();
        setCountryData(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [ipData]);

  if (!ipData || !countryData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Ip ip={ipData.ip} />
      <Time />
      <LeafletMap />
      <CountryData countryInformation={countryData} />
    </div>
  );
}

export default App;
