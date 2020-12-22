// import Chart from 'chart.js';
import * as Graph from './createGraph';
import Chart from 'chart.js';
import { getWorldStatistics, getByCountryTotalAllStatus, summaryByCountry } from './getData';
import 'chartjs-plugin-zoom/dist/chartjs-plugin-zoom';
import 'moment/dist/moment';

function convertToPer100Format(context, arr) {
    summaryByCountry().then((data) => {
        const { Date, Countries } = data;
        if (!context.destination) {
            const { destination, optAllLastDay, optTotalPer100, getPer100Data, worldPopulation } = context;
            arr.map((day, index) => {
                arr[index] = (arr[index] / (worldPopulation / 100000)).toFixed(1);
            });
        } else {
            const info = Countries.filter(({ Country }) => Country === context.destination)[0];
            const { Premium: { CountryStats: { Population } }, TotalConfirmed, TotalDeaths, TotalRecovered, NewConfirmed, NewDeaths, NewRecovered } = info;
            arr.map((day, index) => {
                arr[index] = (arr[index] / (Population / 100000)).toFixed(1);
            });
        }
    });
    return arr;
}

export default function updateGraph(context) {
    const { dataToShow, destination, optAllLastDay, optTotalPer100, getPer100Data, worldPopulation } = context;
    const totalConfirmed = [];
    const totalDeaths = [];
    const totalRecovered = [];
    const dailyCases = [];
    const dailyDeaths = [];
    const dailyRecovered = [];
    const days = [];
  
    //если для всего мира, то
    if (!context.destination) {
      getWorldStatistics().then((i) => {
        const data = i;
        data.sort((a,b) => a.TotalConfirmed - b.TotalConfirmed);
        data.map((day) => {
          totalConfirmed.push(day.TotalConfirmed);
          totalDeaths.push(day.TotalDeaths);
          totalRecovered.push(day.TotalRecovered);
          dailyCases.push(day.NewConfirmed);
          dailyDeaths.push(day.NewDeaths);
          dailyRecovered.push(day.NewRecovered);
        });
        let today = new Date();
        for(let dt=0; dt<totalConfirmed.length; dt++){
          days.push(today.toLocaleDateString());
          today.setDate(today.getDate() - 1)
        }
      days.reverse();
    });
    } else { // иначе, если выбрана какая-то страна
      getByCountryTotalAllStatus(context.slug).then((i) => {
        const data = i;
        console.log('data', data);
        data.map((day, index) => {
            totalConfirmed.push(day.Confirmed);
            totalDeaths.push(day.Deaths);
            totalRecovered.push(day.Recovered);
            if (index !== 0) {
                dailyCases.push(data[index].Confirmed-data[index - 1].Confirmed);
                dailyDeaths.push(data[index].Deaths-data[index - 1].Deaths);
                dailyRecovered.push(data[index].Recovered-data[index - 1].Recovered);
            } else {
                dailyCases.push(day.Confirmed);
                dailyDeaths.push(day.Deaths);
                dailyRecovered.push(day.Recovered);
            }
            day.Date = day.Date.split('-').join('.');
            day.Date = day.Date.slice(0, 10);
            days.push(day.Date);
        });
      })
    }
    setTimeout(() => {
      let elem = document.getElementsByClassName("graph-cont")[0];
      if (Graph.chart.length !== 0) {
        Graph.chart[0].destroy();
        Graph.chart.length = 0;
      }
      elem.style.height = '320px';

      if (dataToShow === 'overall') {
        if (optAllLastDay === 'all') {
          if (optTotalPer100 === 'total') {
            Graph.chart.push(new Chart(elem, Graph.setOptionsForgraphics(context, days, totalConfirmed)));
          } else Graph.chart.push(new Chart(elem, Graph.setOptionsForgraphics(context, days, convertToPer100Format(context, totalConfirmed))));
        }
        if (optAllLastDay === 'day') {
          if (optTotalPer100 === 'total') {
            Graph.chart.push(new Chart(elem, Graph.setOptionsForgraphics(context, days, dailyCases)));
          } else Graph.chart.push(new Chart(elem, Graph.setOptionsForgraphics(context, days, convertToPer100Format(context, dailyCases))));
        }
      }
      if (dataToShow === 'deaths') {
        if (optAllLastDay === 'all') {
          if (optTotalPer100 === 'total') {
            Graph.chart.push(new Chart(elem, Graph.setOptionsForgraphics(context, days, totalDeaths)));
          } else Graph.chart.push(new Chart(elem, Graph.setOptionsForgraphics(context, days, convertToPer100Format(context, totalDeaths))));
        }
        if (optAllLastDay === 'day') {
          if (optTotalPer100 === 'total') {
            Graph.chart.push(new Chart(elem, Graph.setOptionsForgraphics(context, days, dailyDeaths)));
          } else Graph.chart.push(new Chart(elem, Graph.setOptionsForgraphics(context, days, convertToPer100Format(context, dailyDeaths))));
        }
      }
      if (dataToShow === 'recov') {
        if (optAllLastDay === 'all') {
          if (optTotalPer100 === 'total') {
            Graph.chart.push(new Chart(elem, Graph.setOptionsForgraphics(context, days, totalRecovered)));
          } else Graph.chart.push(new Chart(elem, Graph.setOptionsForgraphics(context, days, convertToPer100Format(context, totalRecovered))));
        }
        if (optAllLastDay === 'day') {
          if (optTotalPer100 === 'total') {
            Graph.chart.push(new Chart(elem, Graph.setOptionsForgraphics(context, days, dailyRecovered)));
          } else Graph.chart.push(new Chart(elem, Graph.setOptionsForgraphics(context, days, convertToPer100Format(context, dailyRecovered))));
        }
      }
      Graph.chart[0].render();
    }, 2000);
}