const L = require('../components/leflet/leaflet.js');
import '../components/leflet/leaflet.css';
import '../styles/map.css';

export default function getMap(context) {
  const map = L.map('mapId').setView([56.326944, 44.0075], 3);
  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a rel="nofollow" href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  context.map = map;
  return map;
}