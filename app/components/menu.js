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

  columnFirst.textContent = 'Widen';
  columnSecond.textContent = 'Option 1/2';
  columnThird.textContent = 'Option 3/4';

  container.appendChild(columnFirst);
  container.appendChild(columnSecond);
  container.appendChild(columnThird);

  return container;
}