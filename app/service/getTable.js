import '../styles/index.css';
import { getCountries, summaryByCountry } from './getData';
import { changeTableOnCountry } from './changeTable';
import updateGraph from './updateGraphics';
import { viewCountry } from '../components/getMarkerForMap';

export default function getTableList(context) {
  const { dataToShow } = context;
  const container = document.createElement('div');
  container.className = ('container-fluid p-3 m-0 height-col2 align-self-stretch');
  const columnNameTitle = document.createElement('div');
  const columnCasesTitle = document.createElement('div'); // Overall
  columnNameTitle.className = 'col-3 m-0 p-0 fs-6 fw-bold';
  columnCasesTitle.className = 'col-9 m-0 p-0 ps-1 fs-6 fw-bold text-center';

  columnNameTitle.textContent = 'Country';
  let strTitle = "Overall";
  if (dataToShow === 'deaths') {
    strTitle = 'Deaths';
  }
  if (dataToShow === 'recov') {
    strTitle = "Recoveries";
  }
  columnCasesTitle.textContent = strTitle;

  const rowTitle = document.createElement('div');
  rowTitle.className = ('row justify-content-between p-1 align-items-center');
  rowTitle.appendChild(columnNameTitle);
  rowTitle.appendChild(columnCasesTitle);

  container.appendChild(rowTitle);

  summaryByCountry().then((info) => {
    // console.log(info);
    const { Countries } = info;
    if (!Countries) {
      container.classList.add('pos-relative');
      container.appendChild(context.getOnLoadingScreen());
      if (!document.querySelector('.error-screen-container')) {
        document.querySelector('.the-most-container').appendChild(context.getErrorScreen());
      }
      return;
    }
    context.getFilteredArrayOfCountries()(Countries).map((i) => {
      const { Country, CountryCode, Slug, Premium: { CountryStats: { Population } }, TotalConfirmed, TotalDeaths, TotalRecovered, NewConfirmed, NewDeaths, NewRecovered } = i;
      // console.log(i);
      const row = document.createElement('div');
      row.className = ('row justify-content-center p-0 align-items-center');
      const columnName = document.createElement('div');
      const columnFlag = document.createElement('div');
      const columnCases = document.createElement('div');
      columnName.className = ('col-6 m-0 fs-6');
      columnFlag.className = ('col-2 m-0 p-3');
      columnCases.className = ('col-4 m-0 p-0 ps-1 fs-6');

      columnName.textContent = Country;
      columnFlag.style.backgroundImage = `url(https://www.countryflags.io/${CountryCode}/flat/32.png)`;
      columnFlag.style.backgroundRepeat = 'no-repeat';
      columnFlag.style.backgroundPosition = 'center';
      columnFlag.style.backgroundSize = 'initial';
      columnCases.textContent = context.getCorrectDataToTheListFunc()(context, i);
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
        context.slug = Slug;
        context.destination = e.target.parentNode.children[0].textContent;
        updateGraph(context);
        // context.init();
        changeTableOnCountry(context, e);
        viewCountry(context, Slug);
      })
    });
  });
  return container;
}