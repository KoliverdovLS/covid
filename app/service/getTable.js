import '../styles/index.css';
import { getCountries, summaryByCountry } from './getData';

export default function getTableList(context) {


  const container = document.createElement('div');
  container.className = ('container-fluid p-0 m-0 height');

  summaryByCountry().then((info) => {
    // console.log(info);
    const countries = info.Countries;
    // console.log(countries);
    countries.map((i) => {
      const { Country, CountryCode, TotalConfirmed } = i;
      const row = document.createElement('div');
      row.className = ('row justify-content-around p-0 align-items-center');
      const columnName = document.createElement('div');
      const columnFlag = document.createElement('div');
      const columnCases = document.createElement('div');
      columnName.className = ('col-5 m-0 fs-6 bg-light');
      columnFlag.className = ('col-1 m-0 p-0 fs-6 bg-light');
      columnCases.className = ('col-3 m-0 p-0 ps-1 fs-6 bg-light');

      columnName.textContent = Country;
      columnFlag.innerHTML = `<img src="https://www.countryflags.io/${CountryCode}/flat/32.png">`;
      columnCases.textContent = TotalConfirmed;
      row.appendChild(columnName);
      row.appendChild(columnFlag);
      row.appendChild(columnCases);
      container.appendChild(row);
    });
  });

  return container;
}