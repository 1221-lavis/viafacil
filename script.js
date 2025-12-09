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
  function toggleLike(element) {
    const icon = element.querySelector("i");
    const count = element.querySelector("span");
    const commentId = element.getAttribute("data-id"); // ID único do comentário
  
    let likesSalvos = JSON.parse(localStorage.getItem("likes")) || {};
  
    let num = parseInt(count.textContent);
  
    if (icon.classList.contains("far")) {
      // Curtir
      icon.classList.replace("far", "fas");
      icon.style.color = "red";
      num++;
  
      likesSalvos[commentId] = {
        curtido: true,
        quantidade: num
      };
  
    } else {
      // Descurtir
      icon.classList.replace("fas", "far");
      icon.style.color = "#666";
      num--;
  
      likesSalvos[commentId] = {
        curtido: false,
        quantidade: num
      };
    }
  
    count.textContent = num;
    localStorage.setItem("likes", JSON.stringify(likesSalvos));
  }
  function restaurarLikes() {
    const likesSalvos = JSON.parse(localStorage.getItem("likes")) || {};
  
    document.querySelectorAll(".like").forEach(likeBtn => {
      const commentId = likeBtn.getAttribute("data-id");
      const icon = likeBtn.querySelector("i");
      const count = likeBtn.querySelector("span");
  
      if (likesSalvos[commentId]) {
        const dados = likesSalvos[commentId];
  
        count.textContent = dados.quantidade;
  
        if (dados.curtido) {
          icon.classList.replace("far", "fas");
          icon.style.color = "red";
        } else {
          icon.classList.replace("fas", "far");
          icon.style.color = "#666";
        }
      }
    });
  }
s    
  
