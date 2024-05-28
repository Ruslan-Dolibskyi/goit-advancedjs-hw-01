import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

loadFormState();

form.addEventListener('input', throttle(saveFormState, 500));

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formState);

  clearFormState();
});

function saveFormState() {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
}

function loadFormState() {
  const savedState = localStorage.getItem(STORAGE_KEY);
  if (savedState) {
    const formState = JSON.parse(savedState);
    emailInput.value = formState.email || '';
    messageInput.value = formState.message || '';
  }
}

function clearFormState() {
  localStorage.removeItem(STORAGE_KEY);
  emailInput.value = '';
  messageInput.value = '';
}
