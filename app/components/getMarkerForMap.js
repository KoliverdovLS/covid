import { getDataForMap, getCountries, summaryByCountry } from '../service/getData';
import updateGraph from "../service/updateGraphics";
import {changeTableOnCountry} from "../service/changeTable";


function getPer100(population, count) {
  const divider = population / 100000;
  const result = count / divider;
  return Math.round(result);
}

function clearMarker(context) {
  if (context.arrayMarker.length > 0) {
    context.arrayMarker.forEach((el) => {
      el.remove();
    });
  }
}

function getCordsBySlug(slug, arrCountry, arrCountryWithCoords) {
  let iso2Name = null;
  let coords = null;
  arrCountry.forEach((objCount) => {
    if (objCount['Slug'] === slug) {
      iso2Name = objCount['ISO2'];
    }
  });
  arrCountryWithCoords.forEach((objCount) => {
    if (objCount['countryInfo']['iso2'] === iso2Name) {
      const countryLat = objCount['countryInfo']['lat'];
      const countryLong = objCount['countryInfo']['long'];
      coords = {
        lat: countryLat,
        long: countryLong,
      }
    }
  });
  return coords;
}

function createOneMarker(map, cord, size, country, color, text, arrMarker, index, slug, context) {
  const cords = [cord['lat'], cord['long']]
  const sqrtSize = Math.sqrt(size) * 100;
  const trueSize = (sqrtSize < 5000) ? 5000 : sqrtSize;
  const circle = L.circle(cords, {
    color: color,
    fillColor: color,
    fillOpacity: 1,
    radius: trueSize,
  }).addTo(map);
  circle.textSlug = slug;
  const textPopup = `${country}: ${text}`;
  const popup = circle.bindPopup(textPopup, {
    closeButton: false,
  });
  circle.addEventListener('mouseover', () => {
    popup.openPopup();
  });
  circle.addEventListener('mouseout', () => {
    popup.closePopup();
  });
  circle.addEventListener('click', () => {
    map.setView(cords, 5);
    context.destination = country;
    context.slug = slug;
    updateGraph(context);
    changeTableOnCountry(context);
  });
  arrMarker[index] = circle;
}

export function reRender() {
  const event = new Event('resize');
  window.dispatchEvent(event);
}

export function viewCountry(context, slug) {
  const map = context.map;
  let arrCountryWithCoords = [];
  let arrCountryNoCords = [];
  const promiseCords = getDataForMap().then((arrCountry) => {
    arrCountryWithCoords = arrCountry;
  });
  const promiseCountry = getCountries().then((arrCount) => {
    arrCountryNoCords = arrCount;
  });
  Promise.all([promiseCountry, promiseCords]).then(() => {
    const coords = getCordsBySlug(slug, arrCountryNoCords, arrCountryWithCoords);
    if (coords) map.setView([coords.lat, coords.long], 5);
  })

}

export function createMarkers(context) {
  clearMarker(context);
  const arrayMarker = context.arrayMarker;
  let arrCountryWithCoords = [];
  let arrCountryNoCords = [];
  const promiseCords = getDataForMap().then((arrCountry) => {
    arrCountryWithCoords = arrCountry;
  });
  const promiseCountry = getCountries().then((arrCount) => {
    arrCountryNoCords = arrCount;
  });
  let multiplier = 1;
  const map = context.map;
  const typeData = context.dataToShow;
  const allOrDay = context.optAllLastDay;
  const totalOrPer100 = context.optTotalPer100;
  const isOneDay = (allOrDay === 'day');
  const isPer100 = (totalOrPer100 === 'per');
  const isOneDayText = `${isOneDay ? 'New' : 'Total'}`;
  const isPer100Text = `${isPer100 ? 'Per 100000' : ''}`;
  if (isOneDay) multiplier *= 350;
  if (isPer100) multiplier *= 400;
  let typeText = null;
  let color = null;
  switch (typeData){
    case 'overall':
      typeText = `Confirmed`;
      color = 'orange';
      break;
    case 'deaths':
      typeText = `Deaths`;
      color = 'red';
      multiplier *= 22;
      break;
    case 'recov':
      typeText = `Recovered`;
      color = 'green';
      multiplier *= 1.5
      break;
  }
  summaryByCountry().then((data) => {
    const arrCountry = data['Countries'];
    arrCountry.forEach((countyObj, index) => {
      const countyName = countyObj['Country'];
      const countrySlug = countyObj['Slug'];
      const population = countyObj['Premium']['CountryStats']['Population'];
      let count = countyObj[`${isOneDayText}${typeText}`];
      if (isPer100) count = getPer100(population, count);
      const textToPopup = `${isOneDayText} ${typeText} ${isPer100Text} - ${count}`;
      Promise.all([promiseCountry, promiseCords]).then(() => {
        const coords = getCordsBySlug(countrySlug, arrCountryNoCords, arrCountryWithCoords);
        if (coords) {
          createOneMarker(map, coords, count * multiplier, countyName, color, textToPopup, arrayMarker, index, countrySlug, context);
        }
      })
    })
  });
}