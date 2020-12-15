import '../styles/index.css';
import { getCountries, summaryByCountry } from './getData';

export default function getTableList(context) {


  const container = document.createElement('div');
  container.className = ('container-fluid height overflow-auto');

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
      columnName.className = ('col-6 h6 bg-light');
      columnFlag.className = ('col-2 h6 bg-light');
      columnCases.className = ('col-4 h6 bg-light');

      columnName.textContent = i.Country;
      columnFlag.innerHTML = `<img src="https://www.countryflags.io/${i.CountryCode}/flat/32.png">`;
      columnCases.textContent = i.TotalConfirmed;
      row.appendChild(columnName);
      row.appendChild(columnFlag);
      row.appendChild(columnCases);
      container.appendChild(row);
    });
  });
  // const countries = getCountries();
  // countries.then((data) => {
  // data.map((i) => {
  //   const row = document.createElement('div');
  //   row.className = ('row justify-content-around align-items-center');
  //   const columnName = document.createElement('div');
  //   const columnFlag = document.createElement('div');
  //   const columnCases = document.createElement('div');
  //   columnName.className = ('col-6 h6 bg-light');
  //   columnFlag.className = ('col-2 h6 bg-light');
  //   columnCases.className = ('col-4 h6 bg-light');

  //   columnName.textContent = i.Country;
  //   columnFlag.innerHTML = `<img src="https://www.countryflags.io/${i.ISO2}/flat/32.png">`;
  //   columnCases.textContent = 'Cases';
  //   row.appendChild(columnName);
  //   row.appendChild(columnFlag);
  //   row.appendChild(columnCases);
  //   container.appendChild(row);
  // });
  // });

  // for (let i = 1; i <= 100; i += 1) {
  // const row = document.createElement('div');
  // row.className = ('row justify-content-around align-items-center');
  // const columnName = document.createElement('div');
  // const columnFlag = document.createElement('div');
  // const columnCases = document.createElement('div');
  // columnName.className = ('col-6 h6 bg-light');
  // columnFlag.className = ('col-2 h6 bg-light');
  // columnCases.className = ('col-4 h6 bg-light');

  // columnName.textContent = 'Country';
  // columnFlag.textContent = 'Flag';
  // columnCases.textContent = 'Cases';
  // row.appendChild(columnName);
  // row.appendChild(columnFlag);
  // row.appendChild(columnCases);
  // container.appendChild(row);
  // }



  return container;
}