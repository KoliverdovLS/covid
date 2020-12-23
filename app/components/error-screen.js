import '../styles/errorScreen.css';

export default function errorScreen(context) {
  const container = document.createElement('div');
  container.className = ('error-screen-container');
  const column = document.createElement('div');
  column.className = ('error-screen-text');
  column.textContent = 'api.covid19api.com is not available now because of service. Usually it takes up to five minutes. Please restart the application or turn back later.';
  container.appendChild(column);
  container.addEventListener('click', () => {
    document.querySelectorAll('.error-screen-container').forEach((i) => i.remove());
  });
  return container;
}