

  window.addEventListener('scroll', function() {
    var scrollTopPosition = window.scrollY;

    if (scrollTopPosition > 90) {
      this.document.getElementsByClassName('logo')[0].style.transform = 'none'
    }
    if (scrollTopPosition < 90) {
      this.document.getElementsByClassName('logo')[0].style.transform = 'translateX(-70px)'
    }
  
    console.log('Posição vertical do scroll:', scrollTopPosition);
  });