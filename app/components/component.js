
// this is a template

export default function table(context) {
  const container = document.createElement('div');
  const row = document.createElement('div');
  const column = document.createElement('div');
  container.className = ('container-fluid');
  row.className = ('row justify-content-center align-items-center');
  column.className = ('col h3 bg-success border');
  column.textContent = 'table';
  container.appendChild(row);
  row.appendChild(column);
  return container;
}