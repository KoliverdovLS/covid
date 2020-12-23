import '../styles/makeSmall.css';
import close from '../assets/close.svg';


export default function table(context) {
  const container = document.createElement('div');
  container.className = ('make-small');
  // container.textContent = 'X';
  container.style.backgroundImage = `url(${close})`;
  container.style.backgroundRepeat = 'no-repeat';
  container.style.backgroundPosition = 'center';
  container.style.backgroundSize = 'contain';

  container.addEventListener('click', () => {
    context.makeSmall();
  });
  return container;
}