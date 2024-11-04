let currentIndex = 0;

function changeImage(direction) {
    const images = document.querySelectorAll('.carousel-images img');
    currentIndex = (currentIndex + direction + images.length) % images.length;
    
    images.forEach((img, index) => {
        img.classList.remove('active');
        img.style.display = 'none'; // Esconde todas as imagens
    });

    images[currentIndex].style.display = 'block'; // Mostra a imagem atual
    images[currentIndex].classList.add('active');
}

// Inicializa a primeira imagem
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-images img');
    images.forEach((img, index) => {
        if (index !== currentIndex) img.style.display = 'none';
    });
});

// Função para enviar mensagem (simulação)
function sendMessage(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulação de envio de mensagem
    document.getElementById('formResponse').innerText = `Mensagem enviada por ${name}!`;
    document.getElementById('messageForm').reset(); // Limpa o formulário
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Previne o comportamento padrão de rolagem do navegador

        // Obtém o ID da seção alvo
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Desloca suavemente até a seção alvo
        targetElement.scrollIntoView({
            behavior: 'smooth' // Faz a rolagem suave
        });
    });
});


