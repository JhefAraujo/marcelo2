

  window.addEventListener('scroll', function() {
    var scrollTopPosition = window.scrollY;
    if (this.window.innerWidth < 500) {
      if (scrollTopPosition > 90) {
        this.document.getElementsByClassName('logo')[0].style.transform = 'none'
      }
      if (scrollTopPosition < 90) {
        this.document.getElementsByClassName('logo')[0].style.transform = 'translateX(-70px)'
      }
    }

  
  });
