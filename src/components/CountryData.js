function CountryData({ countryInformation }) {
  return (
    <div>
      <img src={countryInformation[0].flags.png} alt='flag' />
    </div>
  );
}
export default CountryData;
