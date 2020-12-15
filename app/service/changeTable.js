import { getCountries, summaryByCountry } from './getData';

function changeTableOnCountry(context, event) {
  const { destination } = context;
  summaryByCountry().then((data) => {
    const { Date, Countries } = data;
    const info = Countries.filter(({ Country }) => Country === destination)[0];
    const { TotalConfirmed, TotalDeaths, TotalRecovered } = info;
    const date = document.querySelector('.table-date');
    const where = document.querySelector('.table-where');
    const cases = document.querySelector('.table-case');
    const deaths = document.querySelector('.table-death');
    const recoveries = document.querySelector('.table-recov');
    date.textContent = Date.toLocaleString();
    where.textContent = destination;
    cases.textContent = TotalConfirmed;
    deaths.textContent = TotalDeaths;
    recoveries.textContent = TotalRecovered;
  })
}

export { changeTableOnCountry };