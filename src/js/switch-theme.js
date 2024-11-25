import { getDataLocalStorage, setDataToLocalStorage } from './localStorage-api';
const checkbox = document.querySelector('#switch');
const KEY_SWITCH = 'theme';

checkbox.addEventListener('click', onClick);
// Create link to prevent vite wrong links order
createLink();

const themeLink = document.querySelector('#theme-link');
function toggleTheme() {
  const theme = getDataLocalStorage(KEY_SWITCH);
  themeLink.href =
    theme === 'dark'
      ? new URL('../css/dark-theme.css', import.meta.url).href
      : '';
  checkbox.checked = theme === 'dark';
}

toggleTheme();

function onClick(event) {
  setDataToLocalStorage(KEY_SWITCH, event.target.checked ? 'dark' : '');
  toggleTheme();
}

function createLink() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.id = 'theme-link';
  document.head.append(link);
}
