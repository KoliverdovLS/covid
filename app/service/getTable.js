import '../styles/index.css';
import { getCountries, summaryByCountry } from './getData';
import { changeTableOnCountry } from './changeTable';

export default function getTableList(context) {
  const { dataToShow } = context;
  const container = document.createElement('div');
  container.className = ('container-fluid p-3 m-0 height-col2 align-self-stretch');
  const columnNameTitle = document.createElement('div');
  const columnCasesTitle = document.createElement('div'); // Overall
  const columnCasesTitleD = document.createElement('div'); // Deaths
  const columnCasesTitleR = document.createElement('div'); // Recoveries
  columnNameTitle.className = ('col-3 m-0 p-0 fs-6 fw-bold');
  columnCasesTitle.className = dataToShow === 'overall' ? ('col-3 m-0 p-0 ps-1 fs-6 fw-bold') : ('col-3 m-0 p-0 ps-1 fs-6');
  columnCasesTitleD.className = dataToShow === 'deaths' ? ('col-3 m-0 p-0 ps-1 fs-6 fw-bold') : ('col-3 m-0 p-0 ps-1 fs-6');
  columnCasesTitleR.className = dataToShow === 'recov' ? ('col-3 m-0 p-0 ps-1 fs-6 fw-bold') : ('col-3 m-0 p-0 ps-1 fs-6');

  columnNameTitle.textContent = 'Country';
  columnCasesTitle.textContent = 'Overall';
  columnCasesTitleD.textContent = 'Deaths';
  columnCasesTitleR.textContent = 'Recov';

  const rowTitle = document.createElement('div');
  rowTitle.className = ('row justify-content-between p-1 align-items-center');
  rowTitle.appendChild(columnNameTitle);
  rowTitle.appendChild(columnCasesTitle);
  rowTitle.appendChild(columnCasesTitleD);
  rowTitle.appendChild(columnCasesTitleR);
  rowTitle.addEventListener('click', (e) => {
    const text = e.target.textContent.toLowerCase();
    if (text !== 'overall' && text !== 'deaths' && text !== 'recov') {
      return;
    }
    context.dataToShow = text;
    const target = e.target;
    const parent = e.target.parentNode;
    const children = parent.childNodes;
    children.forEach((i) => {
      if (i.textContent === 'Country') {
        return;
      }
      i.classList.remove('fw-bold');
    });
    target.classList.add('fw-bold');

    const dom = context.getTableForList(context);
    const listRow = document.querySelector('.list-row');
    const listRowChildren = document.querySelector('.list-row').children[1];
    // console.log(listRowChildren);
    listRowChildren.remove();
    listRow.appendChild(dom);

  });
  container.appendChild(rowTitle);

  summaryByCountry().then((info) => {
    const { Countries } = info;
    console.log(info);
    try {
      context.getFilteredArrayOfCountries()(Countries).map((i) => {
        const { Country, CountryCode, TotalConfirmed, TotalDeaths, TotalRecovered } = i;
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
        columnCases.textContent = i[context.getCorrectTypeOfData()];
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
    } catch (e) {
      console.log(e);
    }
  });

  return container;
}