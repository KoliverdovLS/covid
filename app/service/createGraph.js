import Chart from 'chart.js';
import { getWorldStatistics, getByCountryTotalAllStatus } from './getData';
import 'chartjs-plugin-zoom/dist/chartjs-plugin-zoom';
import 'moment/dist/moment';

export function setOptionsForgraphics(context, days, data) {
  console.log('context!', context);
  let timeFormat = 'MM/DD/YYYY HH:mm';
  const options = {
    type: 'bar',
    data: {
        labels: days,
        datasets: [{
            label: context.destination || 'In the World',
            data: data,
            backgroundColor: 'rgba(255, 99, 132, 0.8)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: context.dataToShow || 'Confirmed Cases',
      },
      scales: {
        x: {
          type: 'time',
          time: {
            format: timeFormat,
            // round: 'day'
            tooltipFormat: 'll HH:mm'
          },
          scaleLabel: {
            display: true,
            labelString: 'Date'
          },
          ticks: {
            maxRotation: 0
          }
        },
        y: {
          scaleLabel: {
            display: true,
            labelString: 'value'
          },
          ticks: {
            minTicksLimit: 20,
          },
        }
      },
        pan: {
          enabled: true,
          mode: 'x',
          sensitivity: 0,
          speed: 1,
          threshold: 0
      },
        zoom: {
          enabled: true,
          drag: false,
          mode: 'x',
          speed: 0.0001,
          threshold: 0,
          sensitivity: 0
        }
    },
  };
  return options;
}

export const chart = [];
export default function createGraph(context) {
  const totalCases = [];
  const days = [];

    getWorldStatistics().then((i) => {
      const data = i;
      data.sort((a,b) => a.TotalConfirmed - b.TotalConfirmed);
      data.map((day) => {
        totalCases.push(day.TotalConfirmed);
      });
      let today = new Date();
      for(let dt=0; dt<totalCases.length; dt++){
        days.push(today.toLocaleDateString());
        today.setDate(today.getDate() - 1)
      }
    days.reverse();
  });

  setTimeout(() => {
    let elem = document.getElementsByClassName("graph-cont")[0];
    chart.push(new Chart(elem, setOptionsForgraphics(context, days, totalCases)));
    chart[0].update();
  }, 2000);
};
