import '../styles/overDeathRecovMenu.css';

export default function overDeathRecovMenu(context) {
  const container = document.createElement('div');
  container.className = ('menu-recov-container p-0 justify-content-around align-items-center');

  const columnFirst = document.createElement('div');
  const columnSecond = document.createElement('div');
  const columnThird = document.createElement('div');

  columnFirst.className = 'rotate first-column m-0 p-0 col-2 fs-6';
  columnSecond.className = 'rotate second-column m-0 p-0 col-5 fs-6';
  columnThird.className = 'rotate third-column m-0 p-0 col-5 fs-6';

  const all = context.dataToShow === 'overall' ? '<span><b>Overall</b></span>' : '<span>Overall</span>';
  const deaths = context.dataToShow === 'deaths' ? '<span><b>Deaths</b></span>' : '<span>Deaths</span>';
  const recov = context.dataToShow === 'recov' ? '<span><b>Recoveries</b></span>' : '<span>Recoveries</span>';

  columnFirst.innerHTML = `${all}`;
  columnSecond.innerHTML = `${deaths}`;
  columnThird.innerHTML = `${recov}`;

  container.appendChild(columnThird);
  container.appendChild(columnSecond);
  container.appendChild(columnFirst);

  container.addEventListener('click', (e) => {
    const value = e.target.textContent;
    context.changeFilterOptions()(value);
    const parentContainer = document.querySelector('.list-container');
    return;
  });

  return container;
}