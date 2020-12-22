

export default function title(context) {
  const container = document.createElement('div');
  const row = document.createElement('div');
  const column = document.createElement('div');
  container.className = ('container-fluid');
  row.className = ('row justify-content-center align-items-center');
  column.className = ('col h3 bg-success border');
  column.textContent = 'COVID Dashboard';
  container.appendChild(row);
  row.appendChild(column);
  return container;
}