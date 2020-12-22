import '../styles/overDeathRecovMenuAdaptive.css';
import updateMarker from '../components/getMarkerForMap';

export default function overDeathRecovMenuAdaptive(context) {
  const container = document.createElement('div');
  container.className = ('menu-recov-adaptive-container container-fluid p-0 justify-content-between align-items-center'); //

  const columnFirst = document.createElement('div');
  const columnSecond = document.createElement('div');
  const columnThird = document.createElement('div');

  columnFirst.className = 'first-column m-0 p-0 col-4 fs-6';
  columnSecond.className = 'second-column m-0 p-0 col-4 fs-6';
  columnThird.className = 'third-column m-0 p-0 col-4 fs-6';

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
    // console.log(e.target.textContent);
    let value = e.target.textContent.toLowerCase();
    if (value !== 'overall' && value !== 'deaths' && value !== 'recoveries') {
      return;
    }
    value = value === 'recoveries' ? 'recov' : value;
    context.dataToShow = value;
    const parentContainer = document.querySelector('.list-container');

    const dom = context.getTableForList(context);
    const listRow = document.querySelector('.list-row');
    const listRowChildren = document.querySelector('.list-row').children[1];
    listRowChildren.remove();
    listRow.appendChild(dom);

    const all = context.dataToShow === 'overall' ? '<span><b>Overall</b></span>' : '<span>Overall</span>';
    const deaths = context.dataToShow === 'deaths' ? '<span><b>Deaths</b></span>' : '<span>Deaths</span>';
    const recov = context.dataToShow === 'recov' ? '<span><b>Recoveries</b></span>' : '<span>Recoveries</span>';

    columnFirst.innerHTML = `${all}`;
    columnSecond.innerHTML = `${deaths}`;
    columnThird.innerHTML = `${recov}`;
    updateMarker(context);

    return;
  });

  return container;
}