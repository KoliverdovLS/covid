
export default function search(context) {
  const container = document.createElement('div');
  const row = document.createElement('div');
  const column = document.createElement('div');
  container.className = ('container-fluid m-0 p-0');
  row.className = ('row justify-content-center align-items-center m-0 p-1');
  column.className = ('col h3 bg-success m-0 p-0');
  container.appendChild(row);
  row.appendChild(column);
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Search');
  input.className = 'form-control input-search'
  row.appendChild(input);
  input.addEventListener('input', (e) => {
    context.search = e.target.value;
    const dom = context.getTableForList(context);
    const listRow = document.querySelector('.list-row');
    const listRowChildren = document.querySelector('.list-row').children[1];
    console.log(listRowChildren);
    listRowChildren.remove();
    listRow.appendChild(dom);

  })

  return container;
}