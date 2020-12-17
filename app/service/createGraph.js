import ApexCharts from 'apexcharts';

export default function createGraph(context) {
  const options = {
    chart: {
      type: 'line'
    },
    series: [{
      name: 'sales',
      data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
    }],
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  };

  setTimeout(() => {
    const elem = document.querySelector(".graph-cont");
    console.log(elem);
    const chart = new ApexCharts(elem, options);
    chart.render();
  }, 1000)
}


