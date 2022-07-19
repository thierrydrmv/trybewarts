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
function enviar() {
  const agree = document.getElementById('agreement');
  const buttonEnviar = document.getElementById('submit-btn');
  if (agree.checked === false) {
    buttonEnviar.disabled = true;
  } else if (agree.checked === true) {
    buttonEnviar.disabled = false;
  }
}

function selectContent(lista) {
  let texto = '';
  for (let index = 0; index < lista.length; index += 1) {
    texto = `${texto} ${lista[index].value}, `;
  }
  return texto;
}

function recolheDados() {
  const content = document.querySelectorAll('input[class="subject"]:checked');
  const contentValue = selectContent(content);
  console.log(contentValue);
}

function initialize() {
  const enviarForm = document.querySelector('#login');
  const textarea = document.getElementById('textarea');
  const agree = document.getElementById('agreement');
  const buttonEnviar = document.getElementById('submit-btn');
  buttonEnviar.addEventListener('click', recolheDados);
  buttonEnviar.disabled = true;
  enviarForm.addEventListener('click', click);
  textarea.addEventListener('keyup', countCharacter);
  agree.addEventListener('click', enviar);
}

initialize();
