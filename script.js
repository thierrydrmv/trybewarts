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

function formInfo() {
  const name = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  const family = document.querySelector('input[name="family"]:checked').value;
  const content = document.querySelectorAll('input[class="subject"]:checked');
  const rate = document.querySelector('input[name="rate"]:checked').value;
  const contentValue = selectContent(content);
  const textValue = document.getElementById('textarea').value;
  const newInfo = `Nome: ${name} ${lastName}<br>Email: ${email}<br>Casa: ${house}
  <br>Família: ${family}<br>Matérias: ${contentValue}<br>Avaliação: ${rate}
  <br>Observações: ${textValue}`;
  return newInfo;
}

function recolheDados() {
  const newInfo = formInfo();
  const form = document.getElementById('evaluation-form');
  form.style.visibility = 'hidden';
  const main = document.querySelector('main');
  const newConteiner = document.createElement('div');
  newConteiner.setAttribute('id', 'form-data');
  newConteiner.innerHTML = newInfo;
  main.appendChild(newConteiner);
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
