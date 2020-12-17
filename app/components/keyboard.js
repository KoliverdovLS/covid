import Keyboard from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';

export default function keyboard(context) {
  const container = document.createElement('div');
  const row = document.createElement('div');
  const column = document.createElement('div');
  container.className = ('container-fluid');
  row.className = ('row justify-content-center align-items-center');
  column.className = ('col h3 bg-success border simple-keyboard');
  container.appendChild(row);
  row.appendChild(column);
  let keyboard = new Keyboard({
    onChange: input => onChange(input),
    onKeyPress: button => onKeyPress(button)
  });

  function onChange(input) {
    document.querySelector(".input").value = input;
    console.log("Input changed", input);
  }

  function onKeyPress(button) {
    console.log("Button pressed", button);
  }
  return container;
}