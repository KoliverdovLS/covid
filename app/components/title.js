

export default function title(context) {
  const container = document.createElement('div');
  const row = document.createElement('div');
  const column = document.createElement('div');
  container.className = ('title-inner-container container-fluid m-0 p-1 justify-content-center align-items-center');
  // row.className = ('row justify-content-center align-items-center h3');
  // column.className = ('col h3');
  // column.textContent = 'COVID Dashboard';
  // container.appendChild(row);
  // row.appendChild(column);
  container.textContent = 'COVID Dashboard';

  return container;
}