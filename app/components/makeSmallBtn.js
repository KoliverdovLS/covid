import '../styles/makeSmall.css';


export default function table(context) {
  const container = document.createElement('div');
  container.className = ('make-small');
  container.textContent = 'X';

  container.addEventListener('click', () => {
    context.makeSmall();
  });
  return container;
}