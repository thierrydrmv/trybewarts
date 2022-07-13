function click(event) {
  event.preventDefault();
  const email = document.querySelector('#email');
  const senha = document.querySelector('#senha');
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function countCharecter() {
  const textarea = document.getElementById('text-area');
  const count = document.getElementById('counter');
  const text = textarea.value;
  count.innerText = (500 - text.length);
}

function initialize() {
  const enviarForm = document.querySelector('#login');
  const textarea = document.getElementById('text-area');
  enviarForm.addEventListener('click', click);
  textarea.addEventListener('keyup', countCharecter);
}
initialize();
