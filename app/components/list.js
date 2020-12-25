
export default function list(context) {
  const container = document.createElement('div');
  const row = document.createElement('div');
  const column = document.createElement('div');
  container.className = ('list-container container-fluid m-0 p-0   align-self-stretch');
  row.className = ('row list-row justify-content-center align-items-center m-0 p-0 align-self-stretch');
  container.appendChild(row);
  row.appendChild(context.getSearchField());
  row.appendChild(context.getTableForList());

  container.addEventListener('mouseenter', (e) => {
    if (context.enlarge) {
      return;
    }
    if (document.querySelector('.menu-container') || document.querySelector('.keyboard-menu-container')) {
      return;
    }
    try {
      if (e.fromElement && e.fromElement.tagName === 'DIV') {
        container.appendChild(context.addPopUpMenu());
        container.appendChild(context.getMenuToShowKeyboard());
        container.appendChild(context.getOverDeathRecovMenu());
      };
    } catch (error) {

    }
  });

  container.addEventListener('mouseleave', (e) => {
    if (e.fromElement && e.target.tagName === 'DIV') {
      document.querySelectorAll('.menu-container').forEach((i) => i.remove());
      document.querySelectorAll('.keyboard-menu-container').forEach((i) => i.remove());
      document.querySelectorAll('.menu-recov-container').forEach((i) => i.remove());
      document.querySelectorAll('.keyboard-container').forEach((i) => i.remove());
    };
  });

  return container;
}