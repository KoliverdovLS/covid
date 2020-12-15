

export default function table(context) {
  const container = document.createElement('div');
  const row = document.createElement('div');
  const columnDest = document.createElement('div');
  const columnCases = document.createElement('div');
  const columnDeath = document.createElement('div');
  const columnRecov = document.createElement('div');
  container.className = ('container-fluid px-4');
  row.className = ('row justify-content-center align-items-center gx-5');
  columnDest.className = ('col h3 bg-success border');
  columnCases.className = ('col h3 bg-success border');
  columnDeath.className = ('col h3 bg-success border');
  columnRecov.className = ('col h3 bg-success border');

  columnDest.textContent = 'World';
  columnCases.textContent = 'How many cases';
  columnDeath.textContent = 'Death';
  columnRecov.textContent = 'Recovered';

  container.appendChild(row);
  row.appendChild(columnDest);
  row.appendChild(columnCases);
  row.appendChild(columnDeath);
  row.appendChild(columnRecov);
  return container;
}