import { dashBoard } from './dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@babel/polyfill";

const container = document.createElement('div');
container.className = ('container-fluid');

const rowtop = document.createElement('div');
rowtop.className = ('row justify-content-end bg-light');

const rowlow = document.createElement('div');
rowlow.className = ('row justify-content-end bg-light');

const columnForGraph = document.createElement('div');
columnForGraph.className = ('p-4 col h3 bg-light border');

const columnForMap = document.createElement('div');
columnForMap.className = ('p-4 col h3 bg-light border');

const columnForList = document.createElement('div');
columnForList.className = ('p-4 col h3 bg-light border');

const columnForTable = document.createElement('div');
columnForTable.className = ('p-4 col-12 h3 bg-light border');

columnForGraph.appendChild(dashBoard.getGraph());
columnForList.appendChild(dashBoard.getList());
columnForMap.appendChild(dashBoard.getMap());
columnForTable.appendChild(dashBoard.getTable());

rowtop.appendChild(columnForTable);
rowlow.appendChild(columnForList);
rowlow.appendChild(columnForMap);
rowlow.appendChild(columnForGraph);

container.appendChild(rowtop);
container.appendChild(rowlow);


document.body.appendChild(container);