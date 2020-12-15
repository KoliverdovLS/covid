

export default function table(context) {
  const container = document.createElement('div');
  const row = document.createElement('div');
  const column = document.createElement('div');
  container.className = ('container-fluid px-4');
  row.className = ('row justify-content-center align-items-center gx-5');
  column.className = ('col h3 bg-success border');
  column.textContent = context.table;
  container.appendChild(row);
  row.appendChild(column);
  return container;
}