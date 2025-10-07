// SCRIPT DE PESQUISA DE ROTAS
document.addEventListener("DOMContentLoaded", function() {
    const searchBox = document.getElementById('searchBox');
    const routesContainer = document.getElementById('routesContainer');
    const routeCards = routesContainer.querySelectorAll('.route-card');
  
    searchBox.addEventListener('input', function() {
      const query = this.value.toLowerCase().trim();
  
      routeCards.forEach(card => {
        const text = card.innerText.toLowerCase();
        if (text.includes(query)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
  
