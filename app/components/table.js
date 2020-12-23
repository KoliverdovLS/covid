import { getCountries, summaryByCountry } from '../service/getData';
import '../styles/table.css';

export default function table(context) {
  const { destination } = context;
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const container = document.createElement('div');
  container.className = ('table-container container-fluid p-0');
  const row = document.createElement('div');
  const columnDest = document.createElement('div');
  const columnCases = document.createElement('div');
  const columnDeath = document.createElement('div');
  const columnRecov = document.createElement('div');
  row.className = ('row d-flex justify-content-between align-items-center m-0 p-0');
  columnDest.className = ('wrap-col col-12 col-md-3 h3 align-items-center p-0 m-0 align-self-stretch');
  columnCases.className = ('wrap-col col-12 col-md-3 h3 min-h-100 p-0 m-0 align-self-stretch');
  columnDeath.className = ('wrap-col col-12 col-md-3 h3 p-0 m-0 align-self-stretch');
  columnRecov.className = ('wrap-col col-12 col-md-3 h3 p-0 m-0 align-self-stretch');

  const columnDestTop = document.createElement('div');
  const columnDestLow = document.createElement('div');
  columnDestTop.className = ('table-where col-6 col-md-12 h3   p-0 m-0');
  columnDestLow.className = ('table-date col-6 col-md-12 h3 text-danger p-0 m-0');

  columnDestTop.textContent = 'In the world:';
  columnDestLow.textContent = 'Date';

  const columnCasesTop = document.createElement('div');
  const columnCasesLow = document.createElement('div');
  columnCasesTop.className = ('col-6 h3 col-md-12   p-0 m-0');
  columnCasesLow.className = ('col-6 table-case col-md-12 h3 text-danger p-0 m-0');

  const columnDeathTop = document.createElement('div');
  const columnDeathLow = document.createElement('div');
  columnDeathTop.className = ('col-6 h3 col-md-12   p-0 m-0');
  columnDeathLow.className = ('col-6 table-death col-md-12 h3 text-danger p-0 m-0');

  const columnRecovTop = document.createElement('div');
  const columnRecovLow = document.createElement('div');
  columnRecovTop.className = ('col-6 h3 col-md-12   p-0 m-0');
  columnRecovLow.className = ('col-6 table-recov col-md-12 h3 text-danger p-0 m-0');

  columnDest.appendChild(columnDestTop);
  columnDest.appendChild(columnDestLow);
  columnCases.appendChild(columnCasesTop);
  columnCases.appendChild(columnCasesLow);

  columnDeath.appendChild(columnDeathTop);
  columnDeath.appendChild(columnDeathLow);
  columnRecov.appendChild(columnRecovTop);
  columnRecov.appendChild(columnRecovLow);

  columnCasesTop.textContent = 'Overall:';
  columnCasesLow.textContent = '';

  columnDeathTop.textContent = 'Deaths:';
  columnDeathLow.textContent = '';

  columnRecovTop.textContent = 'Recoveries:';
  columnRecovLow.textContent = '';

  container.appendChild(row);
  row.appendChild(columnDest);
  row.appendChild(columnCases);
  row.appendChild(columnDeath);
  row.appendChild(columnRecov);
  summaryByCountry().then((data) => {
    const { Message, Countries, Global: { TotalConfirmed, TotalDeaths, TotalRecovered, NewConfirmed, NewDeaths, NewRecovered } } = data;
    const time = data.Date;
    if (Message === 'Caching in progress' || !data) {
      columnCasesLow.classList.add('pos-relative');
      columnDeathLow.classList.add('pos-relative');
      columnRecovLow.classList.add('pos-relative');
      columnDestLow.classList.add('pos-relative');
      if (!document.querySelector('.error-screen-container')) {
        document.querySelector('.the-most-container').appendChild(context.getErrorScreen());
      }
      columnDestLow.appendChild(context.getOnLoadingScreen());
      columnCasesLow.appendChild(context.getOnLoadingScreen());
      columnDeathLow.appendChild(context.getOnLoadingScreen());
      columnRecovLow.appendChild(context.getOnLoadingScreen());
      return;
    } else {
      columnDestLow.textContent = new Date(time).toLocaleString('en-US', options);
      columnCasesLow.textContent = TotalConfirmed;
      columnDeathLow.textContent = TotalDeaths;
      columnRecovLow.textContent = TotalRecovered;
    }
  })



  container.addEventListener('mouseenter', (e) => {
    if (document.querySelector('.menu-container') || document.querySelector('.keyboard-menu-container')) {
      return;
    }
    try {
      if (e.fromElement.tagName === 'DIV') {
        container.appendChild(context.addPopUpMenu());
      };
    } catch (error) {

    }
  });

  container.addEventListener('mouseleave', (e) => {
    try {
      if (e.target.tagName === 'DIV') {
        document.querySelectorAll('.menu-container').forEach((i) => i.remove());
      };
    } catch (error) {

    }
  });



  return container;
}