import 'chartjs-plugin-zoom/dist/chartjs-plugin-zoom';
import 'moment/dist/moment';
let title, colour;

function setTitleAndColour(context) {
  if (context.dataToShow === 'overall') {
    title = 'Overall';
    colour = '255,165,0';
  }
  else   if (context.dataToShow === 'deaths') {
    title = 'Deaths';
    colour = '255, 0, 0';
  }
  if (context.dataToShow === 'recov') {
    title = "Recoveries";
    colour = '0,128,0';
  }
}

export function setOptionsForgraphics(context, days, data) {
  setTitleAndColour(context);
  let timeFormat = 'MM/DD/YYYY HH:mm';
  const options = {
    type: 'bar',
    data: {
        labels: days,
        datasets: [{
            label: title,
            data: data,
            backgroundColor: `rgba(${colour}, 0.8)`,
            borderColor: `rgba(${colour}, 1)`,
            borderWidth: 1,
        }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: context.destination || 'In the World',
      },
      scales: {
        x: {
          type: 'time',
          time: {
            format: timeFormat,
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
          speed: 0.000001,
          threshold: 0,
          sensitivity: 0
        }
    },
  };
  return options;
}

export const chart = [];