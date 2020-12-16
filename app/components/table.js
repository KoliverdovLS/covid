import { getCountries, summaryByCountry } from '../service/getData';

export default function table(context) {
  const { destination } = context;
  const container = document.createElement('div');
  container.className = ('container-fluid bg-dark p-0');
  console.log(context.destination);
  summaryByCountry().then((data) => {
    // console.log(data);
    const { Date, Countries, Global: { TotalConfirmed, TotalDeaths, TotalRecovered } } = data;
    // console.log(Date);
    // console.log(TotalConfirmed);
    // console.log(TotalDeaths);
    // console.log(TotalRecovered);
    const row = document.createElement('div');
    const columnDest = document.createElement('div');
    const columnCases = document.createElement('div');
    const columnDeath = document.createElement('div');
    const columnRecov = document.createElement('div');
    row.className = ('row justify-content-between align-items-center p-0 bg-info');
    columnDest.className = ('col h3 align-items-center bg-success border p-0 m-0 align-self-stretch');
    columnCases.className = ('col h3 bg-success border min-h-100 p-0 m-0 align-self-stretch');
    columnDeath.className = ('col h3 bg-success border p-0 m-0 align-self-stretch');
    columnRecov.className = ('col h3 bg-success border p-0 m-0 align-self-stretch');

    const columnDestTop = document.createElement('div');
    const columnDestLow = document.createElement('div');
    columnDestTop.className = ('table-where col-12 h3 bg-transparent p-3 m-0');
    columnDestLow.className = ('table-date col-12 h3 bg-transparent p-3 m-0');

    columnDestTop.textContent = 'In the world';
    columnDestLow.textContent = Date.toLocaleString();

    const columnCasesTop = document.createElement('div');
    const columnCasesLow = document.createElement('div');
    columnCasesTop.className = ('col-12 h3 bg-transparent p-3 m-0');
    columnCasesLow.className = ('table-case col-12 h3 bg-transparent p-3 m-0');

    const columnDeathTop = document.createElement('div');
    const columnDeathLow = document.createElement('div');
    columnDeathTop.className = ('col-12 h3 bg-transparent p-3 m-0');
    columnDeathLow.className = ('table-death col-12 h3 bg-transparent p-3 m-0');

    const columnRecovTop = document.createElement('div');
    const columnRecovLow = document.createElement('div');
    columnRecovTop.className = ('col-12 h3 bg-transparent p-3 m-0');
    columnRecovLow.className = ('table-recov col-12 h3 bg-transparent p-3 m-0');

    columnDest.appendChild(columnDestTop);
    columnDest.appendChild(columnDestLow);
    columnCases.appendChild(columnCasesTop);
    columnCases.appendChild(columnCasesLow);

    columnDeath.appendChild(columnDeathTop);
    columnDeath.appendChild(columnDeathLow);
    columnRecov.appendChild(columnRecovTop);
    columnRecov.appendChild(columnRecovLow);

    columnCasesTop.textContent = 'Overall';
    columnCasesLow.textContent = TotalConfirmed;

    columnDeathTop.textContent = 'Deaths';
    columnDeathLow.textContent = TotalDeaths;

    columnRecovTop.textContent = 'Recoveries';
    columnRecovLow.textContent = TotalRecovered;

    container.appendChild(row);
    row.appendChild(columnDest);
    row.appendChild(columnCases);
    row.appendChild(columnDeath);
    row.appendChild(columnRecov);
  })

  return container;
}