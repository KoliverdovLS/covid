import { getCountries, summaryByCountry } from './getData';

function changeTableOnCountry(context, event) {
  const { destination, optAllLastDay, optTotalPer100, getPer100Data, worldPopulation } = context;
  // console.log(context);
  summaryByCountry().then((data) => {
    const { Date, Countries } = data;
    if (!destination) {
      const { Global: { TotalConfirmed, TotalDeaths, TotalRecovered, NewConfirmed, NewDeaths, NewRecovered } } = data;
      const date = document.querySelector('.table-date');
      const cases = document.querySelector('.table-case');
      const deaths = document.querySelector('.table-death');
      const recoveries = document.querySelector('.table-recov');
      date.textContent = Date.toLocaleString();
      cases.textContent = optAllLastDay === 'all' ? getPer100Data()(context, TotalConfirmed, worldPopulation) : getPer100Data()(context, NewConfirmed, worldPopulation);
      deaths.textContent = optAllLastDay === 'all' ? getPer100Data()(context, TotalDeaths, worldPopulation) : getPer100Data()(context, NewDeaths, worldPopulation);
      recoveries.textContent = optAllLastDay === 'all' ? getPer100Data()(context, TotalRecovered, worldPopulation) : getPer100Data()(context, NewRecovered, worldPopulation);
      return;
    }
    const info = Countries.filter(({ Country }) => Country === destination)[0];
    const { Premium: { CountryStats: { Population } }, TotalConfirmed, TotalDeaths, TotalRecovered, NewConfirmed, NewDeaths, NewRecovered } = info;
    const date = document.querySelector('.table-date');
    const where = document.querySelector('.table-where');
    const cases = document.querySelector('.table-case');
    const deaths = document.querySelector('.table-death');
    const recoveries = document.querySelector('.table-recov');
    date.textContent = Date.toLocaleString();
    where.textContent = destination;
    cases.textContent = optAllLastDay === 'all' ? getPer100Data()(context, TotalConfirmed, Population) : getPer100Data()(context, NewConfirmed, Population);
    deaths.textContent = optAllLastDay === 'all' ? getPer100Data()(context, TotalDeaths, Population) : getPer100Data()(context, NewDeaths, Population);
    recoveries.textContent = optAllLastDay === 'all' ? getPer100Data()(context, TotalRecovered, Population) : getPer100Data()(context, NewRecovered, Population);
  })
}

export { changeTableOnCountry };