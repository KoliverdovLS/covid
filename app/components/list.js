
export default function list(context) {
  const container = document.createElement('div');
  const row = document.createElement('div');
  const column = document.createElement('div');
  container.className = ('list-container container-fluid m-0 p-0 bg-light align-self-stretch');
  row.className = ('row list-row justify-content-center align-items-center m-0 p-0 align-self-stretch');
  container.appendChild(row);
  row.appendChild(context.getSearchField());
  row.appendChild(context.getTableForList());

  container.addEventListener('mouseenter', (e) => {
    if (e.fromElement.tagName === 'DIV') {
      container.appendChild(context.addPopUpMenu());
      container.appendChild(context.getMenuToShowKeyboard());
    };
  });

  container.addEventListener('mouseleave', (e) => {
    if (e.target.tagName === 'DIV') {
      container.removeChild(document.querySelector('.menu-container'));
      container.removeChild(document.querySelector('.keyboard-menu-container'));
    };
  });

  return container;
}