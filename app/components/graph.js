import '../styles/graph.css';

export default function graph(context) {

  const container = document.createElement('div');
  const row = document.createElement('div');
  const column = document.createElement('div');
  container.className = ('container-fluid px-4');
  row.className = ('row justify-content-center align-items-center');
  column.className = ('col h3 h-100 border graph-cont');
  row.appendChild(column);
  container.appendChild(row);
  return container;
}