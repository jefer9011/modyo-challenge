

const menuBurger = () => {
  console.log('menuBurguer');
  const menuBtn = document.querySelector('.menu-btn');
  const navMenu = document.querySelector('.nav');
  let menuOpen = false;
  menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
      navMenu.classList.add('active')
    } else {
      menuBtn.classList.remove('open');
      menuOpen = false;
      navMenu.classList.remove('active')
    }
  })
}

const slider = () => {
  let slider = tns({
    container: '.slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    gutter: '20px',
    speed: 700,
    autoplayTimeout: 20000,
    autoplayButton: false,
    loop: true,
    responsive: {
      768: {
        items: 1,
      },
      1024: {
        items: 1,
      },
    }

  });
}

const sliderTestimonials = () => {
  let slider2 = tns({
    container: '.testimonials__slide',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    gutter: '20px',
    speed: 700,
    autoplayTimeout: 20000,
    autoplayButton: false,
    loop: true,
  });
}

const getImages = () => {
  fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(image => {
      let imageArray = image.results;
      imageArray.forEach(element => {
        let imagesAll = element.image;
        let avatarAll = document.querySelectorAll('#avatar');
        avatarAll.forEach(ele => {
          ele.src = imagesAll;
        });
      });
    })
}





async function getUserInfo() {
  const [userResponse, postResponse] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/users'),
    fetch('https://jsonplaceholder.typicode.com/posts')
  ]);
  const userInfo = await userResponse.json();
  const postInfo = await postResponse.json();

  return [userInfo, postInfo];

}

getUserInfo().then(([userInfo, postInfo]) => {
  userInfo;
  postInfo;
  /*   console.log('userInfo', userInfo);
    console.log('postInfo', postInfo); */
  // userInfoData
  userInfo.forEach(element => {
    let idUser = element.id;
    let html = `
        <div class="testimonials__slide__item">
        <img id="avatar"  alt="Profile picture">
        <p id="name">${element.name}</p>
        <p class="idpost">${idUser} </p>
    </div>
      `;
    document.querySelector('.testimonials__slide').insertAdjacentHTML('beforeend', html)
  });
  //userPOstData
  postInfo.forEach(ele => {
    let postData = ele.body;
    let idPost = ele.id
    let descriptionUser = `
      <p id="description">${postData}  </p>
      `;
    let imageTags = document.querySelectorAll('#avatar');
    imageTags.forEach(el => {
      if (idPost < 2) {
        el.insertAdjacentHTML('afterend', descriptionUser);
      }
    });
  });

});








let bodyHome = document.querySelector('.home');
if (bodyHome) {
  console.log('estoy en home');
  menuBurger();
  slider();
  setTimeout(() => {
    sliderTestimonials();
    getUserInfo();
    getImages();
  }, 1500);
}