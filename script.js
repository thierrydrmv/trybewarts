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

function initialize() {
  const enviarForm = document.querySelector('#login');
  enviarForm.addEventListener('click', click);
}
initialize();
