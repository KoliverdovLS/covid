import { dashBoard } from './dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@babel/polyfill";
import './styles/index.css';
// import { getCountries, getDayOneAllStatus } from './service/getData';


const container = document.createElement('div');
container.className = ('container-fluid p-0 height align-items-stretch the-most-container');

const rowtitle = document.createElement('div');
rowtitle.className = ('row justify-content-end bg-light');

const rowtop = document.createElement('div');
rowtop.className = ('row justify-content-end bg-light');

const rowadaptivemenu = document.createElement('div'); // adptive menu
rowadaptivemenu.className = ('row row-adaptive-menu justify-content-around bg-light');
rowadaptivemenu.appendChild(dashBoard.getAdaptiveMenuLastDayTotal());

const rowadaptivemenuSecond = document.createElement('div'); // adptive menu
rowadaptivemenuSecond.className = ('row row-adaptive-menu-second justify-content-around bg-light');
rowadaptivemenuSecond.appendChild(dashBoard.getOverDeathRecovMenuAdaptive());

const rowlow = document.createElement('div');
rowlow.className = ('row justify-content-between bg-light align-items-stretch m-0 p-0 rowHeight');

const columnForTitle = document.createElement('div');
columnForTitle.className = ('p-4 col-12 h3 bg-light border');

const columnForGraph = document.createElement('div');
columnForGraph.className = ('p-0 col-sm-12 col-lg-4 bg-light border');

const columnForMap = document.createElement('div');
columnForMap.className = ('p-0 col-sm-12 col-lg-5 bg-light border');

const columnForList = document.createElement('div');
columnForList.className = ('p-0 m-0 col-sm-12 col-lg-3 h3 bg-light border');

const columnForTable = document.createElement('div');
columnForTable.className = ('p-2 col-12 h3 bg-light border');

columnForTitle.appendChild(dashBoard.getTitle());
columnForGraph.appendChild(dashBoard.getGraph());
columnForList.appendChild(dashBoard.getList());
columnForMap.appendChild(dashBoard.getMap());
columnForTable.appendChild(dashBoard.getTable());
dashBoard.addGraphToDom();
rowtitle.appendChild(columnForTitle);
rowtop.appendChild(columnForTable);
rowlow.appendChild(columnForList);
rowlow.appendChild(columnForMap);
rowlow.appendChild(columnForGraph);

container.appendChild(rowtitle);
container.appendChild(rowtop);
container.appendChild(rowadaptivemenu);
container.appendChild(rowadaptivemenuSecond);
container.appendChild(rowlow);


document.body.appendChild(container);