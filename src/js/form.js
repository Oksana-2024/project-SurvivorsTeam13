import axios from 'axios';
import { showModal } from './modal.js';

const form = document.querySelector('.work-form');
const emailInput = document.querySelector('#user-email');
const messageInput = document.querySelector('#user-message');
const errorText = document.querySelector('.work-form-text');

window.addEventListener('DOMContentLoaded', () => {
  form.addEventListener('submit', async event => {
    event.preventDefault();

    const email = emailInput.value;
    const message = messageInput.value;

    try {
      const response = await axios.post(
        'https://portfolio-js.b.goit.study/api-docs',
        {
          email,
          message,
        }
      );

      if (response.status !== 200) {
        errorText.textContent = 'Invalid email, try again';
        errorText.classList.remove('visually-hidden');
        return;
      }

      emailInput.value = '';
      messageInput.value = '';

      const icon = document.querySelector('.work-form-icon');
      icon.classList.add('visually-hidden');

      showModal();
    } catch (error) {
      errorText.textContent = 'Something went wrong. Please check your inputs.';
      errorText.classList.remove('visually-hidden');
    }
  });

  emailInput.addEventListener('input', () => {
    const isValidEmail = emailInput.checkValidity();
    const icon = document.querySelector('.work-form-icon');
    icon.classList.toggle('visually-hidden', !isValidEmail);

    if (!isValidEmail) {
      errorText.textContent = 'Invalid email, try again';
      errorText.classList.remove('visually-hidden');
      emailInput.classList.add('invalid-text');
    } else {
      errorText.classList.add('visually-hidden');
      emailInput.classList.remove('invalid-text');
    }
  });
});
