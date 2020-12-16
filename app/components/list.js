

export default function list(context) {
  const container = document.createElement('div');
  const row = document.createElement('div');
  const column = document.createElement('div');
  container.className = ('container-fluid m-0 p-0 bg-light');
  row.className = ('row list-row justify-content-center align-items-center m-0 p-0');
  column.className = ('col h3 bg-success border m-0 p-0');
  column.textContent = context.list;
  container.appendChild(row);
  row.appendChild(context.getSearchField());
  row.appendChild(context.getTableForList());
  return container;
}