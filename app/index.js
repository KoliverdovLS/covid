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
container.appendChild(rowlow);


document.body.appendChild(container);

// console.log(window.outerHeight);
// console.log(window.screen.availHeight);

// function d() {
//   // return (getByCountryTotalAllStatus('belgium', 'confirmed', new Date('2020-03-01T00:00:00Z'), new Date('2020-11-01T00:00:00Z')));
//   // return getByCountryTotalAllStatus('belgium');
//   // return 'fff';
//   const ar = [];
//   getCountries().then((data) => {
//     let index = 0;
//     const array = data.map(({ Slug }) => Slug);
//     const key = setInterval(() => {
//       ar.push(getDayOneAllStatus(array[index]));
//       index += 1;
//       console.log(ar);
//       if (index === 50) {
//         window.clearInterval(key);
//       }
//     }, 600);
//   });
//   Promise.all(ar).then((ii) => {
//     console.log(ii);
//   });
// }
// d();