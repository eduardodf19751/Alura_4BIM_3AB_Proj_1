// Seleciona todos os flashcards da página
const cartoes = document.querySelectorAll('.cartao');

// Adiciona o evento de clique em cada um deles
cartoes.forEach(cartao => {
    cartao.addEventListener('click', () => {
        // Alterna a classe 'active' para disparar o efeito de virar no CSS
        cartao.classList.toggle('active');
    });
});
