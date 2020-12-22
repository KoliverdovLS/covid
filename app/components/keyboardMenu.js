import '../styles/keyboardMenu.css';
import img from '../assets/keyboard.svg';
import Keyboard from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';

export default function menuToShowKeyboard(context) {
  const container = document.createElement('div');
  container.className = ('keyboard-menu-container p-0 justify-content-between align-items-center');
  container.style.backgroundImage = `url(${img})`;
  container.style.backgroundRepeat = 'no-repeat';
  container.style.backgroundPosition = 'center';
  container.style.backgroundSize = 'contain';
  container.addEventListener('click', (e) => {
    const containerForKeybord = document.querySelector('.list-container');
    containerForKeybord.appendChild(context.getKeyBoard());

    let newKeyboard = new Keyboard({
      onChange: input => onChange(input),
      onKeyPress: button => onKeyPress(button)
    });
    function onChange(input) {
      document.querySelector(".input-search").value = input;
      context.search = e.target.value;
      const evt = new Event("input", { "bubbles": false, "cancelable": false });
      document.querySelector(".input-search").dispatchEvent(evt);
    };
    function onKeyPress(button) {
      console.log("Button pressed", button);
    }
  });

  return container;
}