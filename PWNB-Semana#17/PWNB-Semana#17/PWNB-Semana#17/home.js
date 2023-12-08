function scrollToTools() {
  const ferramentasSection = document.getElementById('cards-menu');
  if (ferramentasSection) {
    ferramentasSection.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente para a seção
  } else {
    console.error("Elemento com ID 'ferramentas' não encontrado.");
  }
}

function moveDescSection() {
  const infoSection = document.querySelector('.desc-txt');
  if (infoSection) {
    infoSection.classList.add('shake'); // Adicione a classe 'shake' para ativar a animação
    setTimeout(() => {
      infoSection.classList.remove('shake'); // Remova a classe 'shake' após a animação terminar
    }, 500);
  } else {
    console.error("Elemento com classe 'desc' não encontrado.");
  }
}
