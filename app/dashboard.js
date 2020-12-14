import {
  getByCountryTotalAllStatus,
  getByCountryTotal,
  getByCountryLive,
  getByCountryAllStatus,
  getByCountry,
  getDayOneTotalAllStatus,
  defaultInfo,
  summaryByCountry,
  getCountries,
  getCountryInfoFromDayOne,
  getDayOneAllStatus,
  getDayOneAnyStatusLive,
  getOneTotal,
} from './service/getData';

function dashBoard() {
  // return (getByCountryTotalAllStatus('belgium', 'confirmed', new Date('2020-03-01T00:00:00Z'), new Date('2020-11-01T00:00:00Z')));
  // return getByCountryTotalAllStatus('belgium');
  return 'fff';
}
// belgium
// confirmed
export { dashBoard };