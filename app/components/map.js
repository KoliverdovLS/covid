export default function map(context) {
  const container = document.createElement('div');
  const mapContainer = document.createElement('div');
  const row = document.createElement('div');
  const column = document.createElement('div');
  container.className = ('map-container container-fluid');
  row.className = ('row justify-content-center align-items-center gx-5');
  column.className = ('gmap col h3 bg-success border');
  mapContainer.id = 'mapId';
  container.id = 'contID';
  container.appendChild(mapContainer);
  container.appendChild(row);
  row.appendChild(column);


  container.addEventListener('mouseenter', (e) => {
    if (e.fromElement.tagName === 'DIV') {
      container.appendChild(context.addPopUpMenu());
      container.appendChild(context.getOverDeathRecovMenu());
      document.querySelector('.menu-recov-container').classList.replace('menu-recov-container', 'map-menu-recov-container');
    };
  });

  container.addEventListener('mouseleave', (e) => {
    if (e.target.tagName === 'DIV') {
      document.querySelectorAll('.menu-container').forEach((i) => i.remove());
      document.querySelectorAll('.map-menu-recov-container').forEach((i) => i.remove());
    };
  });

  return container;
}