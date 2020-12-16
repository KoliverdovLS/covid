export default function getCorrectDataType(context) {
  const obj = {
    overall: 'TotalConfirmed',
    deaths: 'TotalDeaths',
    recov: 'TotalRecovered',
  };
  return obj[context.dataToShow];
}