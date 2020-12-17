import '../styles/keyboardMenu.css';
import img from '../assets/keyboard.svg';

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
    // containerForKeybord.appendChild(context.getKeyBoard());
  });

  return container;
}