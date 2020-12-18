import '../styles/keyboardMenu.css';
import img from '../assets/keyboard.svg';
import Keyboard from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';

export default function menuToShowKeyboard(context) {
  const container = document.createElement('div');
  container.className = ('keyboard-menu-container p-0 justify-content-between align-items-center');
  console.log(img);
  container.style.backgroundImage = `url(${img})`;
  container.style.backgroundRepeat = 'no-repeat';
  container.style.backgroundPosition = 'center';
  container.style.backgroundSize = 'contain';
  container.addEventListener('click', (e) => {
    console.log('hi');
    const containerForKeybord = document.querySelector('.list-container');
    containerForKeybord.appendChild(context.getKeyBoard());

    let newKeyboard = new Keyboard({
      onChange: input => onChange(input),
      onKeyPress: button => onKeyPress(button)
    });
    console.log(newKeyboard);

    document.querySelector(".input-search").addEventListener("input", event => {
      newKeyboard.setInput(event.target.value);
    });

    function onChange(input) {
      document.querySelector(".input-search").value = input;
      console.log("Input changed", input);
      // ======================================
      context.search = e.target.value;
      const dom = context.getTableForList(context);
      const listRow = document.querySelector('.list-row');
      const listRowChildren = document.querySelector('.list-row').children[1];
      console.log(listRowChildren);
      listRowChildren.remove();
      listRow.appendChild(dom);
      // ======================================
    }

    function onKeyPress(button) {
      console.log("Button pressed", button);
    }
  });

  return container;
}