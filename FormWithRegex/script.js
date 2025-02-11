// Função para buscar e-mails
function findEmails() {
  const text = document.getElementById('email-text').value;
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  const emails = text.match(emailRegex);
  document.getElementById('email-result').innerHTML = emails ? emails.join(', ') : 'Nenhum e-mail encontrado.';
}

//função para validar um cpf
function validateCPF() {
  let cpf = document.getElementById('cpf').value;

  // Remover caracteres não numéricos
  cpf = cpf.replace(/[^\d]/g, '');

  if (cpf.length !== 11) {
    document.getElementById('cpf-result').innerHTML = 'CPF inválido. Tem caracteres não numéricos ou insuficientes.';
    return;
  }

  // Verifica se todos os dígitos são iguais 
  if (/^(\d)\1+$/.test(cpf)) {
    document.getElementById('cpf-result').innerHTML = 'CPF inválido. Todos digitos são iguais';
    return;
  }

  function calculateDigit(cpf, factor) {
    let total = 0;
    for (let i = 0; i < factor - 1; i++) {
      total += parseInt(cpf.charAt(i)) * (factor - i);
    }
    let remainder = (total * 10) % 11;
    return remainder === 10 ? 0 : remainder;
  }

  const digit1 = calculateDigit(cpf, 10);
  const digit2 = calculateDigit(cpf, 11);

  if (digit1 !== parseInt(cpf.charAt(9)) || digit2 !== parseInt(cpf.charAt(10))) {
    document.getElementById('cpf-result').innerHTML = 'CPF inválido. Digitos verificadores não condizem.';
    return;
  }

  document.getElementById('cpf-result').innerHTML = 'CPF válido';
}


// Função para substituir datas no formato DD/MM/AAAA para AAAA-MM-DD
function replaceDates() {
  const text = document.getElementById('date-text').value;
  const dateRegex = /\b(\d{2})\/(\d{2})\/(\d{4})\b/g;

  const newText = text.replace(dateRegex, (match, day, month, year) => {
    if (isValidDate(day, month, year)) {
      return `${year}-${month}-${day}`; // Formato AAAA-MM-DD
    } else {
      alert(`A data "${match}" não é válida.`);
      return match; // Mantém a data original caso não seja válida
    }
  });

  if (text.match(dateRegex) === null) {
    alert("Nenhuma data válida foi encontrada no texto.");
  }

  document.getElementById('date-result').innerHTML = newText;
}

// Função para verificar se a data é válida
function isValidDate(day, month, year) {
  // Converte os valores para números
  const dayNum = parseInt(day, 10);
  const monthNum = parseInt(month, 10);
  const yearNum = parseInt(year, 10);

  // Verifica se o mês está no intervalo correto
  if (monthNum < 1 || monthNum > 12) return false;

  // Verifica os dias no mês considerando anos bissextos
  const daysInMonth = [31, (isLeapYear(yearNum) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return dayNum >= 1 && dayNum <= daysInMonth[monthNum - 1];
}

// Função auxiliar para verificar se um ano é bissexto
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}


// Função para validar senha complexa
function validatePassword() {
  const password = document.getElementById('password').value;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
  const result = passwordRegex.test(password) ? 'Senha válida' : 'Senha inválida';
  document.getElementById('password-result').innerHTML = result;
}

// Vsibilidade da senha
function togglePasswordVisibility() {
  const passwordField = document.getElementById('password');
  const showPasswordCheckbox = document.getElementById('show-password');
  passwordField.type = showPasswordCheckbox.checked ? 'text' : 'password';
}
