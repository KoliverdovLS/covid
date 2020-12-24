import '../styles/graph.css';

export default function graph(context) {
  const container = document.createElement('div');
  const row = document.createElement('div');
  const column = document.createElement('canvas');
  container.className = ('graph-container container-fluid');
  row.className = ('row justify-content-center align-items-center');
  column.className = ('col graph-cont');
  row.appendChild(column);
  container.appendChild(row);

  container.addEventListener('mouseenter', (e) => {
    if (context.enlarge) {
      return;
    }
    try {
      if (e.fromElement.tagName === 'DIV') {
        container.appendChild(context.addPopUpMenu());
        container.appendChild(context.getOverDeathRecovMenu());
        document.querySelector('.menu-recov-container').classList.replace('menu-recov-container', 'graph-menu-recov-container');
      };
    } catch (error) {

    }
  });

  container.addEventListener('mouseleave', (e) => {
    try {
      if (e.target.tagName === 'DIV') {
        document.querySelectorAll('.menu-container').forEach((i) => i.remove());
        document.querySelectorAll('.graph-menu-recov-container').forEach((i) => i.remove());
      };
    } catch (error) {

    }
  });

  return container;
}