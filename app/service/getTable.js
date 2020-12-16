import '../styles/index.css';
import { getCountries, summaryByCountry } from './getData';
import { changeTableOnCountry } from './changeTable';

export default function getTableList(context) {
  const container = document.createElement('div');
  container.className = ('container-fluid p-0 m-0');
  summaryByCountry().then((info) => {
    const { Countries } = info;
    // (context.getFilteredArrayOfCountries()(Countries));
    context.getFilteredArrayOfCountries()(Countries).map((i) => {
      const { Country, CountryCode, TotalConfirmed } = i;
      const row = document.createElement('div');
      row.className = ('row justify-content-center p-0 align-items-center');
      const columnName = document.createElement('div');
      const columnFlag = document.createElement('div');
      const columnCases = document.createElement('div');
      columnName.className = ('col-6 m-0 fs-5');
      columnFlag.className = ('col-2 m-0 p-3');
      columnCases.className = ('col-4 m-0 p-0 ps-1 fs-5');

      columnName.textContent = Country;
      columnFlag.style.backgroundImage = `url(https://www.countryflags.io/${CountryCode}/flat/32.png)`;
      columnFlag.style.backgroundRepeat = 'no-repeat';
      columnFlag.style.backgroundPosition = 'center';
      columnFlag.style.backgroundSize = 'initial';
      columnCases.textContent = TotalConfirmed;
      row.appendChild(columnName);
      row.appendChild(columnFlag);
      row.appendChild(columnCases);
      container.appendChild(row);

      row.addEventListener('mouseenter', (e) => {
        e.target.classList.add('bg-white');
      });
      row.addEventListener('mouseleave', (e) => {
        e.target.classList.remove('bg-white');
      });
      row.addEventListener('click', (e) => {
        // e.stopImmediatePropagation();
        // e.preventDefault();
        // e.stopPropagation();
        // console.log(e.target.parentNode.children[0].textContent);
        // console.log(e.target);
        context.destination = e.target.parentNode.children[0].textContent;
        // context.init();
        changeTableOnCountry(context, e);
      })
    });
  });

  return container;
}