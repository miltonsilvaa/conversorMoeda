const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit)

const inputValue = document.getElementById('value-real');

const selectedCurrency = document.getElementById('currency');

const result = document.getElementById('result');
let valueConverted = 0;

function handleSubmit(e) {
  e.preventDefault();

  const numericValue = parseFloat(inputValue.value);

  if(isNaN(numericValue) || numericValue < 0){
    alert('Informe um valor correto!');
    return;
  } else if(!selectedCurrency.value){
    alert('Escolha uma moeda!');
    return;
  }

  converter();
};

function converter(){
  if(selectedCurrency.value == 'eur'){
    valueConverted = inputValue.value * 5.43;
    result.innerHTML = valueFormatter('pt-br', 'EUR');
    animateResult();
  } else if(selectedCurrency.value == 'dol'){
    valueConverted = inputValue.value * 5.00;
    result.innerHTML = valueFormatter('en-US', 'USD');
    animateResult();
  }

  // Limpar os campos após a conversão
  inputValue.value = '';
  selectedCurrency.value = '';
};

function valueFormatter(locale, currency) {
  const value = valueConverted.toLocaleString(locale, { style: 'currency', currency: currency });
  return `<span>🤑</span> ${value} <span>🤑</span>`;
};

function animateResult(){
  return result.animate([
{ transform: 'translateY(-150px)' },
{ transform: 'translateX(0px)' },
  ], { duration: 500 });
}