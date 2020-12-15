import '../styles/index.css';
import { getCountries, summaryByCountry } from './getData';

export default function getTableList(context) {
  const container = document.createElement('div');
  container.className = ('container-fluid p-0 m-0 height');
  summaryByCountry().then((info) => {
    const { Countries } = info;
    Countries.map((i) => {
      const { Country, CountryCode, TotalConfirmed } = i;
      const row = document.createElement('div');
      row.className = ('row justify-content-center p-0 align-items-center');
      const columnName = document.createElement('div');
      const columnFlag = document.createElement('div');
      const columnCases = document.createElement('div');
      columnName.className = ('col-6 m-0 fs-5');
      columnFlag.className = ('col-2 m-0 p-0');
      columnCases.className = ('col-4 m-0 p-0 ps-1 fs-5');

      columnName.textContent = Country;
      columnFlag.innerHTML = `<img src="https://www.countryflags.io/${CountryCode}/flat/32.png">`;
      columnCases.textContent = TotalConfirmed;
      row.appendChild(columnName);
      row.appendChild(columnFlag);
      row.appendChild(columnCases);
      container.appendChild(row);

      row.addEventListener('mouseenter', (e) => {
        e.target.classList.add('bg-white');
        console.log(e.target.children[0].textContent);
      });
      row.addEventListener('mouseleave', (e) => {
        e.target.classList.remove('bg-white');
      });
    });
  });

  return container;
}