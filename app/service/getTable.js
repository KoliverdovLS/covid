export default function getTableList(context) {
  const container = document.createElement('div');
  container.className = ('container-fluid');

  for (let i = 1; i <= 10; i += 1) {
    const row = document.createElement('div');
    row.className = ('row justify-content-around align-items-center');
    const columnName = document.createElement('div');
    const columnFlag = document.createElement('div');
    const columnCases = document.createElement('div');
    columnName.className = ('col-6 h6 bg-light');
    columnFlag.className = ('col-2 h6 bg-light');
    columnCases.className = ('col-4 h6 bg-light');

    columnName.textContent = 'Country';
    columnFlag.textContent = 'Flag';
    columnCases.textContent = 'Cases';
    row.appendChild(columnName);
    row.appendChild(columnFlag);
    row.appendChild(columnCases);
    container.appendChild(row);

  }



  return container;
}