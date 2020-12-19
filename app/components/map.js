import { Loader } from "@googlemaps/js-api-loader";

export default function map(context) {
  const container = document.createElement('div');
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