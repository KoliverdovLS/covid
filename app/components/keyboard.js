import 'simple-keyboard/build/css/index.css';

export default function keyboard(context) {
  const container = document.createElement('div');
  const row = document.createElement('div');
  const column = document.createElement('div');
  container.className = ('keyboard-container');
  row.className = ('row justify-content-center align-items-center');
  column.className = ('col h3 bg-success border simple-keyboard');
  container.appendChild(row);
  row.appendChild(column);
  return container;
}