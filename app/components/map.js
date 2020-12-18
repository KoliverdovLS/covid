import '../styles/map.css';
import { Loader } from "@googlemaps/js-api-loader";

export default function map(context) {
  const container = document.createElement('div');
  const row = document.createElement('div');
  const column = document.createElement('div');
  container.className = ('map-container container-fluid px-4');
  row.className = ('row justify-content-center align-items-center gx-5');
  column.className = ('gmap col h3 bg-success border');
  container.appendChild(row);
  row.appendChild(column);
  const loader = new Loader({
    apiKey: 'AIzaSyCGBLwir5nz5K2UTtZc5c-7NCN2NzVuNoA',
    version: "weekly",
    // callback: 'initMap',
  });
  loader.load().then(() => {
    map = new google.maps.Map(document.querySelector('.gmap'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  });

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