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
import { createMarkers } from './components/getMarkerForMap';
import createGraph from './service/createGraph';
import showPopUpMenu from './components/menu';
import changeFilterOption from './service/changeFilterOption';
import keyboard from './components/keyboard';
import menuToShowKeyboard from './components/keyboardMenu';
import overDeathRecovMenu from './components/overDeathRecovMenu';
import getPer100 from './service/getPer100';
import getCorrectDataToTheList from './service/getCorrectDataToTheList';
import showAdaptiveMenuLastDayTotal from './components/menuAdaptive';
import overDeathRecovMenuAdaptive from './components/overDeathRecovMenuAdaptive';
import { enlarge, doSmall } from './service/enlarge';
import makeSmallBtn from './components/makeSmallBtn';
import onLoading from './components/onLoading';
import footerRS from './components/footer';

const dashBoard = {
  worldPopulation: 7809320722,
  hundredThousand: 100000,
  table: 'table', // - is not important
  list: 'list', // - is not important
  map: 'map',
  arrayMarker: [],
  graph: 'graph', // - is not important
  destination: false, // - what place to show according to the exact choice in the list
  search: '', // the input value in search field in real time
  dataToShow: 'overall', // 'overall', 'deaths', 'recov' - to show what kind of data
  optAllLastDay: 'all', // 'all', 'day' - to show all data or last day data
  optTotalPer100: 'total', // 'total', 'per' - to show total cases or pre 100 k population data
  enlarge: false, // 'map', 'list', 'graph', 'false' indicates if btn 'enlarge' clicked. If 'false' - view in standard

  getOnLoadingScreen() {
    return onLoading(this);
  },

  getFooter() {
    console.log('footer');
    return footerRS(this);
  },

  getAdaptiveMenuLastDayTotal() {
    return showAdaptiveMenuLastDayTotal(this);
  },

  makeSmallButton() {
    return makeSmallBtn(this);
  },

  makeSmall() {
    return doSmall(this);
  },

  makeEnlarge() {
    return enlarge(this);
  },

  changeFilterOptions() {
    return changeFilterOption(this);
  },

  getOverDeathRecovMenuAdaptive() {
    return overDeathRecovMenuAdaptive(this);
  },

  getCorrectDataToTheListFunc() {
    return getCorrectDataToTheList(this);
  },

  getPer100Data() {
    return getPer100(this);
  },

  getOverDeathRecovMenu() {
    return overDeathRecovMenu(this);
  },

  getMenuToShowKeyboard() {
    return menuToShowKeyboard(this);
  },

  getKeyBoard() {
    return keyboard(this);
  },

  addPopUpMenu() {
    return showPopUpMenu(this);
  },

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

  getMapContainer() {
    return map(this);
  },

  getGraph() {
    return graph(this);
  },

  getMarkers() {
    return createMarkers(this);
  },

}


export { dashBoard };



// belgium
// confirmed
// export { dashBoard };