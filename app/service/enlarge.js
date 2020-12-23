import { reRender } from '../components/getMarkerForMap';

export function enlarge(context) {
  const { enlarge } = context;
  const rowcontainer = document.querySelector('.rowlow');
  const rowlistcontainer = document.querySelector('.rowlowlist');
  const rowmapcontainer = document.querySelector('.rowlowmap');
  const rowgraphcontainer = document.querySelector('.rowlowgraph');
  rowcontainer.innerHTML = '';
  if (!enlarge || enlarge === 'graph') {
    rowcontainer.appendChild(rowgraphcontainer);
    rowgraphcontainer.classList.add('col-sm-12');
    rowgraphcontainer.classList.remove('col-lg-4');
    rowgraphcontainer.appendChild(context.makeSmallButton());
    document.querySelectorAll('.menu-container').forEach((i) => i.remove());
    document.querySelectorAll('.graph-menu-recov-container').forEach((i) => i.remove());

  };

  if (!enlarge || enlarge === 'list') {
    rowcontainer.appendChild(rowlistcontainer);
    rowlistcontainer.classList.add('col-sm-12');
    rowlistcontainer.classList.remove('col-lg-3');
    rowlistcontainer.appendChild(context.makeSmallButton());
    document.querySelectorAll('.menu-container').forEach((i) => i.remove());
    document.querySelectorAll('.keyboard-menu-container').forEach((i) => i.remove());
    document.querySelectorAll('.menu-recov-container').forEach((i) => i.remove());
    document.querySelectorAll('.keyboard-container').forEach((i) => i.remove());
  };

  if (!enlarge || enlarge === 'map') {
    rowcontainer.appendChild(rowmapcontainer);
    rowmapcontainer.classList.add('col-sm-12');
    rowmapcontainer.classList.remove('col-lg-5');
    rowmapcontainer.appendChild(context.makeSmallButton());
    setTimeout(reRender(context), 100);
    document.querySelectorAll('.menu-container').forEach((i) => i.remove());
    document.querySelectorAll('.map-menu-recov-container').forEach((i) => i.remove());

  };
}


export function doSmall(context) {
  context.enlarge = false;
  const container = document.querySelector('.rowlow');
  container.innerHTML = '';

  const columnForGraph = document.createElement('div');
  columnForGraph.className = ('rowlowgraph p-0 col-sm-12 col-lg-4');

  const columnForMap = document.createElement('div');
  columnForMap.className = ('rowlowmap p-0 col-sm-12 col-lg-5');

  const columnForList = document.createElement('div');
  columnForList.className = ('rowlowlist p-0 m-0 col-sm-12 col-lg-3 h3');

  columnForGraph.appendChild(context.getGraph());
  columnForGraph.appendChild(context.getFooter());
  columnForList.appendChild(context.getList());
  columnForMap.appendChild(context.getMapContainer());

  container.appendChild(columnForList);
  container.appendChild(columnForMap);
  container.appendChild(columnForGraph);
  context.addGraphToDom();
  context.getTheMap();
  context.getMarkers();
}