export default function map(context) {
  const container = document.createElement('div');
  const row = document.createElement('div');
  container.className = ('map-container container-fluid px-4');
  row.className = ('row justify-content-center align-items-center gx-5');
  container.appendChild(row);
  container.id = 'mapId';


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