import '../styles/keyboardMenu.css';

export default function menuToShowKeyboard(context) {
  const container = document.createElement('div');
  container.className = ('keyboard-menu-container p-0 justify-content-between align-items-center');
  container.style.backgroundImage = "url('/app/assets/keyboard.svg')";
  container.style.backgroundRepeat = 'no-repeat';
  container.style.backgroundPosition = 'center';
  container.style.backgroundSize = 'contain';

  // container.appendChild(columnFirst);

  container.addEventListener('click', (e) => {
    console.log('hi');
    const containerForKeybord = document.querySelector('.list-container');
    // containerForKeybord.appendChild(context.getKeyBoard());
  });

  return container;
}