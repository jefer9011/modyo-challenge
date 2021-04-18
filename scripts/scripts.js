

const slider = () => {
    let slider = tns({
        container: '.slider',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        gutter	: '20px',
        speed: 700,
        autoplayTimeout: 20000,
        autoplayButton: false,
        loop: true,
      });}

      const sliderTestimonials = () => {
        let slider2 = tns({
            container: '.testimonials__slide',
            items: 1,
            slideBy: 'page',
            autoplay: true,
            gutter	: '20px',
            speed: 700,
            autoplayTimeout: 20000,
            autoplayButton: false,
            loop: true,
          });}

      let bodyHome = document.querySelector('.home');
      if(bodyHome) {
          console.log('estoy en home');
          slider();
          sliderTestimonials();
      }