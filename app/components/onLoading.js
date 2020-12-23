import '../styles/onLoading.css';

export default function onLoading(context) {
  const container = document.createElement('div');
  container.className = ('onLoad-cont d-flex text-dark justify-content-center');

  const row = document.createElement('div');
  row.className = ('spinner-border');
  row.setAttribute('role', 'status');

  const span = document.createElement('span');
  span.className = ('visually-hidden');
  span.textContent = 'Loading...';
  container.appendChild(row);
  row.appendChild(span);
  return container;
}