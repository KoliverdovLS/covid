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
  getFlag,
} from './service/getData';
import table from './components/table';
import list from './components/list';
import map from './components/map';
import graph from './components/graph';
import title from './components/title';
import getTableList from './service/getTable';


const dashBoard = {
  table: 'table',
  list: 'list',
  map: 'map',
  graph: 'graph',

  getTableForList() {
    return getTableList(this);
  },

  getTable() {
    return table(this);
  },

  getTitle() {
    return title(this);
  },

  getList() {
    return list(this);
  },

  getMap() {
    return map(this);
  },

  getGraph() {
    return graph(this);
  }

}

export { dashBoard };



// function dashBoard() {
  // return (getByCountryTotalAllStatus('belgium', 'confirmed', new Date('2020-03-01T00:00:00Z'), new Date('2020-11-01T00:00:00Z')));
  // return getByCountryTotalAllStatus('belgium');
//   return 'fff';
// }
// belgium
// confirmed
// export { dashBoard };