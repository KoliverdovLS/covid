import '../styles/menu.css';

export default function showPopUpMenu(context) {
  const container = document.createElement('div');
  container.className = ('menu-container container-fluid p-0 justify-content-between align-items-center');

  const columnFirst = document.createElement('div');
  const columnSecond = document.createElement('div');
  const columnThird = document.createElement('div');

  columnFirst.className = 'first-column m-0 p-0 col-2 fs-6';
  columnSecond.className = 'second-column m-0 p-0 col-5 fs-6';
  columnThird.className = 'third-column m-0 p-0 col-5 fs-6';

  const all = context.optAllLastDay === 'all' ? '<span><b>All</b></span>' : '<span>All</span>';
  const day = context.optAllLastDay === 'all' ? '<span>Last day</span>' : '<span><b>Last day</b></span>';
  const total = context.optTotalPer100 === 'total' ? '<span><b>Total</b></span>' : '<span>Total</span>';
  const per100 = context.optTotalPer100 === 'total' ? '<span>per 100 k</span>' : '<span><b>per 100 k</b></span>';

  columnFirst.innerHTML = '<span>Enlarge</span>';
  columnSecond.innerHTML = `${all} | ${day}`;
  columnThird.innerHTML = `${total} | ${per100}`;

  container.appendChild(columnFirst);
  container.appendChild(columnSecond);
  container.appendChild(columnThird);

  container.addEventListener('click', (e) => {
    console.log(e.target);
  });

  return container;
}