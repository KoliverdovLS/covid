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
  getGMap,
} from './service/getData';
import table from './components/table';
import list from './components/list';
import map from './components/map';
import graph from './components/graph';
import title from './components/title';
import getTableList from './service/getTable';
import search from './components/search';
import filterCountries from './service/filterContries';
import getCorrectDataType from './service/getCorrectDataType';
import getMap from './service/getMap';
import createGraph from './service/createGraph';
// import { render } from './index';


const dashBoard = {
  table: 'table',
  list: 'list',
  map: 'map',
  graph: 'graph',
  destination: false,
  search: '',
  dataToShow: 'overall', // 'overall', 'deaths', 'recov'

  // init() {
  //   return render(this);
  // },

  addGraphToDom() {
    return createGraph(this);
  },

  getCorrectTypeOfData() {
    return getCorrectDataType(this);
  },

  getSearchField() {
    return search(this);
  },

  getFilteredArrayOfCountries() {
    return filterCountries(this);
  },

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

  getTheMap() {
    return getMap(this);
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