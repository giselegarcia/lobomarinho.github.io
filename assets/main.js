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

   
     function checkScreenWidth(mediaQuery) {
        if (mediaQuery.matches) {
          document.querySelector('.bannerPrincipal').src = 'assets/images/bannermobile.png';
        } else {
          document.querySelector('.bannerPrincipal').src = 'assets/images/bannertorneio.png';
        }
      }
  
      checkScreenWidth(window.matchMedia('(max-width: 590px)'));
  
      window.addEventListener('resize', function() {
        checkScreenWidth(window.matchMedia('(max-width: 590px)'));
      });
});
