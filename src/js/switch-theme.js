import { getDataLocalStorage, setDataToLocalStorage } from './localStorage-api';
const checkbox = document.querySelector('#switch');
const KEY_SWITCH = 'theme';
const THEME_DARK = 'dark';

checkbox.addEventListener('click', onClick);

function toggleTheme() {
  const isDark = getDataLocalStorage(KEY_SWITCH) === THEME_DARK;
  if (isDark) {
    document.body.classList.add(THEME_DARK);
  } else {
    document.body.classList.remove(THEME_DARK);
  }
  checkbox.checked = isDark;
}

toggleTheme();

function onClick(event) {
  setDataToLocalStorage(KEY_SWITCH, event.target.checked ? THEME_DARK : '');
  toggleTheme();
}
