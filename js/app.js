document.addEventListener('DOMContentLoaded', function() {

    // ----------------------------------------------------
    // 1. Animação de Revelação ao Rolar (Scroll Animation)
    // ----------------------------------------------------

    // Adiciona a classe 'animate-on-scroll' a todos os elementos que queremos animar.
    const sectionsToAnimate = [
        document.querySelector('.statistics-section'),
        document.querySelector('.experience-section'),
        document.querySelector('.contact-section h3'),
        document.querySelector('.contact-form input:first-child'),
        document.querySelector('.contact-form input:nth-child(2)'),
        document.querySelector('.contact-form .submit-button')
    ];
    
    // Adiciona a classe principal de animação e o delay para os itens das estatísticas
    document.querySelectorAll('.statistic-item').forEach(item => {
        item.classList.add('animate-on-scroll');
        sectionsToAnimate.push(item);
    });
    
    sectionsToAnimate.forEach(el => {
        if (el && !el.classList.contains('animate-on-scroll')) {
            el.classList.add('animate-on-scroll');
        }
    });

    // Função que verifica se o elemento está visível na tela
    function checkVisibility() {
        sectionsToAnimate.forEach(el => {
            if (el) {
                const elementTop = el.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                // Se o topo do elemento estiver a 85% da altura da janela, ele é considerado visível
                if (elementTop < windowHeight * 0.85) {
                    el.classList.add('is-visible');
                }
            }
        });
    }

    // Executa a função na primeira vez e em todo evento de rolagem
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Executa ao carregar para verificar elementos já visíveis
    
    
    // ----------------------------------------------------
    // 2. Validação Básica de Formulário
    // ----------------------------------------------------

    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const nameInput = this.querySelector('input[type="text"]');
            const emailInput = this.querySelector('input[type="email"]');
            
            // Verifica se os campos estão vazios
            if (!nameInput.value.trim() || !emailInput.value.trim()) {
                event.preventDefault(); // Impede o envio do formulário
                alert('Por favor, preencha seu Nome e Email antes de Falar Conosco.');
                
                // Adiciona um feedback visual temporário
                if (!nameInput.value.trim()) nameInput.style.border = '2px solid red';
                if (!emailInput.value.trim()) emailInput.style.border = '2px solid red';

                setTimeout(() => {
                    nameInput.style.border = '';
                    emailInput.style.border = '';
                }, 2000);
            } else {
                // Se tudo estiver OK para envio
                // Em um projeto real, você faria aqui a requisição AJAX para o servidor.
                event.preventDefault(); // Apenas para demonstração
                alert(`Obrigado, ${nameInput.value}! Sua mensagem foi enviada (simulação).`);
                this.reset();
            }
        });
    }
});