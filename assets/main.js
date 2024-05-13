document.addEventListener('DOMContentLoaded', function() {
    var modalidade = document.querySelector('.modalidade');
    var modalidadePosition = modalidade.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    function animateModalidade() {
        if (modalidadePosition - windowHeight <= 0) {
            modalidade.classList.add('show');
            window.removeEventListener('scroll', animateModalidade);
        }
    }

    window.addEventListener('scroll', animateModalidade);
});
