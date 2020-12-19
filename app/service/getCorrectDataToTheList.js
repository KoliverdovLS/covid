export default function getCorrectDataToTheList() {
  return (context, Data) => {
    const { destination, dataToShow, optAllLastDay, optTotalPer100, getPer100Data } = context;
    const { Country, CountryCode, Premium: { CountryStats: { Population } }, TotalConfirmed, TotalDeaths, TotalRecovered, NewConfirmed, NewDeaths, NewRecovered } = Data;
    if (dataToShow === 'overall') {
      if (optAllLastDay === 'all') {
        if (optTotalPer100 === 'total') {
          return TotalConfirmed;
        }
        if (optTotalPer100 === 'per') {
          return (TotalConfirmed / (Population / 100000)).toFixed(2);
        }
      }
      if (optAllLastDay === 'day') {
        if (optTotalPer100 === 'total') {
          return NewConfirmed;
        }
        if (optTotalPer100 === 'per') {
          return (NewConfirmed / (Population / 100000)).toFixed(2);
        }
      }
    }
    if (dataToShow === 'deaths') {
      if (optAllLastDay === 'all') {
        if (optTotalPer100 === 'total') {
          return TotalDeaths;
        }
        if (optTotalPer100 === 'per') {
          return (TotalDeaths / (Population / 100000)).toFixed(2);
        }
      }
      if (optAllLastDay === 'day') {
        if (optTotalPer100 === 'total') {
          return NewDeaths;
        }
        if (optTotalPer100 === 'per') {
          return (NewDeaths / (Population / 100000)).toFixed(2);
        }
      }
    }
    if (dataToShow === 'recov') {
      if (optAllLastDay === 'all') {
        if (optTotalPer100 === 'total') {
          return TotalRecovered;
        }
        if (optTotalPer100 === 'per') {
          return (TotalRecovered / (Population / 100000)).toFixed(2);
        }
      }
      if (optAllLastDay === 'day') {
        if (optTotalPer100 === 'total') {
          return NewRecovered;
        }
        if (optTotalPer100 === 'per') {
          return (NewRecovered / (Population / 100000)).toFixed(2);
        }
      }
    }
  }
}