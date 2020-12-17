import '../styles/graph.css';

export default function graph(context) {
  const container = document.createElement('div');
  const row = document.createElement('div');
  const column = document.createElement('div');
  container.className = ('graph-container container-fluid');
  row.className = ('row justify-content-center align-items-center');
  column.className = ('col graph-cont');
  row.appendChild(column);
  container.appendChild(row);

  container.addEventListener('mouseenter', (e) => {
    if (e.fromElement.tagName === 'DIV') {
      container.appendChild(context.addPopUpMenu());
    };
  });

  container.addEventListener('mouseleave', (e) => {
    if (e.target.tagName === 'DIV') {
      container.removeChild(document.querySelector('.menu-container'));
    };
  });

  return container;
}