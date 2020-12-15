import { dashBoard } from './dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@babel/polyfill";
import './styles/index.css';


// function render(context) {
// document.body.innerHTML = '';
const container = document.createElement('div');
container.className = ('container-fluid');

const rowtitle = document.createElement('div');
rowtitle.className = ('row justify-content-end bg-light');

const rowtop = document.createElement('div');
rowtop.className = ('row justify-content-end bg-light');

const rowlow = document.createElement('div');
rowlow.className = ('row justify-content-end bg-light');

const columnForTitle = document.createElement('div');
columnForTitle.className = ('p-4 col-12 h3 bg-light border');

const columnForGraph = document.createElement('div');
columnForGraph.className = ('p-4 col-4 h3 bg-light border');

const columnForMap = document.createElement('div');
columnForMap.className = ('p-4 col-5 h3 bg-light border');

const columnForList = document.createElement('div');
columnForList.className = ('p-3 col-3 h3 bg-light border overflow-auto');

const columnForTable = document.createElement('div');
columnForTable.className = ('p-2 col-12 h3 bg-light border');

columnForTitle.appendChild(dashBoard.getTitle());
columnForGraph.appendChild(dashBoard.getGraph());
columnForList.appendChild(dashBoard.getList());
columnForMap.appendChild(dashBoard.getMap());
columnForTable.appendChild(dashBoard.getTable());

rowtitle.appendChild(columnForTitle);
rowtop.appendChild(columnForTable);
rowlow.appendChild(columnForList);
rowlow.appendChild(columnForMap);
rowlow.appendChild(columnForGraph);

container.appendChild(rowtitle);
container.appendChild(rowtop);
container.appendChild(rowlow);


document.body.appendChild(container);
// }

// window.addEventListener('DOMContentLoaded', () => {
//   dashBoard.init();
// });

// export { render };
