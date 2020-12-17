import '../styles/menu.css';

export default function showPopUpMenu(context) {
  const container = document.createElement('div');
  container.className = ('menu-container container-fluid justify-content-between align-items-center');

  const columnFirst = document.createElement('div');
  const columnSecond = document.createElement('div');
  const columnThird = document.createElement('div');

  columnFirst.className = 'first-column col-4';
  columnSecond.className = 'first-column col-4';
  columnThird.className = 'first-column col-4';

  container.appendChild(columnFirst);
  container.appendChild(columnSecond);
  container.appendChild(columnThird);

  return container;
}