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

function countCharacter() {
  const textarea = document.getElementById('textarea');
  const count = document.getElementById('counter');
  const text = textarea.value;
  count.innerText = (500 - text.length);
}
function enviar(event) {
  const agree = document.getElementById('agreement');
  if (agree.checked === false) {
    event.preventDefault();
  }
}

function initialize() {
  const enviarForm = document.querySelector('#login');
  const textarea = document.getElementById('textarea');
  const buttonEnviar = document.getElementById('submit-btn');
  enviarForm.addEventListener('click', click);
  textarea.addEventListener('keyup', countCharacter);
  buttonEnviar.addEventListener('click', enviar);
}
initialize();
