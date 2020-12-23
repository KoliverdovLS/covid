import '../styles/footerStyles.css';

export default function footerRS(context) {

  const container = document.createElement('div');

  const columnFirst = document.createElement('div');
  const columnFirstOnceMore = document.createElement('div');
  const columnSecond = document.createElement('div');
  const columnThird = document.createElement('div');
  const columnForth = document.createElement('div');
  const columnFifth = document.createElement('div');
  const columnSixth = document.createElement('div');

  container.className = ('footer-container container-fluid');

  columnFirst.className = ('column-footer col-12 p-1 m-0 text-dark');
  columnFirstOnceMore.className = ('column-footer col-12 p-1 m-0 text-dark');
  columnSecond.className = ('column-footer col-12 p-1 m-0 text-dark');
  columnThird.className = ('column-footer col-12 p-1 m-0 text-dark');
  columnForth.className = ('column-footer col-12 p-1 m-0 text-dark');
  columnFifth.className = ('column-footer col-12 p-1 m-0 text-dark');
  columnSixth.className = ('column-footer col-12 p-1 m-0 text-dark');

  columnFirst.innerHTML = '<span>Done in accordance with&nbsp</span> <a href="https://rs.school/">RSScholl</a> <span>&nbsp2020Q3 task COVID-19 Dashboard</span>';
  columnFirstOnceMore.innerHTML = '<a href="https://github.com/rolling-scopes-school/tasks/blob/master/tasks/covid-dashboard.md">COVID-19 Dashboard</a>'
  columnSecond.innerHTML = 'Mentor: <span>Kirill Varikov&nbsp&nbsp</span><a href="https://github.com/kirillvarikow">Github</a>';
  columnThird.textContent = 'Group:';
  columnForth.innerHTML = '<span>Maksim Samorukov&nbsp&nbsp</span><a href="https://github.com/MaximSamorukov">Github</a>';
  columnFifth.innerHTML = '<span>Leonid Koliverdov&nbsp&nbsp</span><a href="https://github.com/KoliverdovLS">Github</a>';
  columnSixth.innerHTML = '<span>Daria Sukhova&nbsp&nbsp</span><a href="https://github.com/Daria-a-s">Github</a>';


  container.appendChild(columnFirst);
  container.appendChild(columnFirstOnceMore);
  container.appendChild(columnSecond);
  container.appendChild(columnThird);
  container.appendChild(columnForth);
  container.appendChild(columnFifth);
  container.appendChild(columnSixth);

  return container;
}