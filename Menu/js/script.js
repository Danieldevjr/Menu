const botoes = document.querySelectorAll('.botao');

botoes.forEach(botao => {
    botao.addEventListener('mouseover', () => {
        botao.style.backgroundColor = '#007bff'; // Cor de fundo ao passar o mouse
    });

    botao.addEventListener('mouseout', () => {
        botao.style.backgroundColor = '#333'; // Cor de fundo original
    });
});
