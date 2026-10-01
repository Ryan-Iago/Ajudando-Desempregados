// Função para Filtrar os Cards por Categoria
function filterCards(category) {
  const cards = document.querySelectorAll('.card');
  const buttons = document.querySelectorAll('.filter-btn');

  // Atualiza classe ativa nos botões
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  // Mostra ou esconde os cards com base na categoria
  cards.forEach(card => {
    if (category === 'all' || card.getAttribute('data-category') === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// Função da Calculadora de Metas
function calculateSavings() {
  const goal = parseFloat(document.getElementById('goalAmount').value);
  const monthly = parseFloat(document.getElementById('monthlySavings').value);
  const resultDiv = document.getElementById('calcResult');

  if (isNaN(goal) || isNaN(monthly) || goal <= 0 || monthly <= 0) {
    resultDiv.style.color = '#f87171';
    resultDiv.innerText = 'Por favor, insira valores válidos e maiores que zero.';
    return;
  }

  const monthsNeeded = Math.ceil(goal / monthly);
  
  resultDiv.style.color = '#4ade80';
  if (monthsNeeded === 1) {
    resultDiv.innerText = `🎯 Incrível! Você alcançará seu objetivo em 1 mês.`;
  } else {
    resultDiv.innerText = `🎯 Guardando R$ ${monthly}/mês, você alcançará R$ ${goal} em aproximadamente ${monthsNeeded} meses!`;
  }
}
