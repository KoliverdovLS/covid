import '../styles/index.css';
import { getCountries, summaryByCountry } from './getData';

export default function getTableList(context) {


  const container = document.createElement('div');
  container.className = ('container-fluid height overflow-scroll');

  summaryByCountry().then((info) => {
    // console.log(info);
    const countries = info.Countries;
    // console.log(countries);
    countries.map((i) => {
      const row = document.createElement('div');
      row.className = ('row justify-content-around align-items-center');
      const columnName = document.createElement('div');
      const columnFlag = document.createElement('div');
      const columnCases = document.createElement('div');
      columnName.className = ('col-6 fs-6 bg-light');
      columnFlag.className = ('col-2 fs-6 bg-light');
      columnCases.className = ('col-4 fs-6 bg-light');

      columnName.textContent = i.Country;
      columnFlag.innerHTML = `<img src="https://www.countryflags.io/${i.CountryCode}/flat/32.png">`;
      columnCases.textContent = i.TotalConfirmed;
      row.appendChild(columnName);
      row.appendChild(columnFlag);
      row.appendChild(columnCases);
      container.appendChild(row);
    });
  });

  return container;
}