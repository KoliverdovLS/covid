export default function getMap(context) {
  const map = new google.maps.Map(document.querySelector(".gmap"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
  return map;
}