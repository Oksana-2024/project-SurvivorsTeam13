import { getDataLocalStorage, setDataToLocalStorage } from './localStorage-api';

const checkbox = document.querySelector('#switch');
const themeLink = document.querySelector('#theme-link');
const KEY_SWITCH = 'theme';


toggleTheme();

checkbox.addEventListener('click', onClick);

function toggleTheme() {
  const theme = getDataLocalStorage(KEY_SWITCH);
  themeLink.href = theme === 'dark' ? './css/dark-theme.css' : '';
  checkbox.checked = theme === 'dark';
}

function onClick(event) {
  setDataToLocalStorage(KEY_SWITCH, event.target.checked ? 'dark' : '');
  toggleTheme();
}
