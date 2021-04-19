

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

 

 const getDataUsers = async () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      console.log('dataUsers', json);
      json.forEach(element => {
        let description = element.company.catchPhrase;
        let idUser = element.id;
        console.log('userId', idUser);
        let html = `
        <div class="testimonials__slide__item">
        <img id="avatar"  alt="Profile picture">
        <p id="name">${element.name}</p>
        <p class="idpost">${idUser} </p>
    </div>
      `;
        document.querySelector('.testimonials__slide').insertAdjacentHTML('beforeend', html)
      });
    return json
    })

}

async function getUserInfo() {
  const [ userResponse, postResponse] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/users'),
    fetch('https://jsonplaceholder.typicode.com/posts')
  ]);
  const userInfo = await userResponse.json();
  const postInfo = await postResponse.json();

  return [ userInfo, postInfo];

  }

  getUserInfo().then(([userInfo, postInfo]) => {
    userInfo;
    postInfo;
    console.log('userInfo', userInfo);
    console.log('postInfo', postInfo);

    userInfo.forEach(element => {
        console.log('element userInfo', element);
        let idUser = element.id;
        console.log('userId', idUser);
        let html = `
        <div class="testimonials__slide__item">
        <img id="avatar"  alt="Profile picture">
        <p id="name">${element.name}</p>
        <p class="idpost">${idUser} </p>
    </div>
      `;
      document.querySelector('.testimonials__slide').insertAdjacentHTML('beforeend', html)
    });
    
    postInfo.forEach(ele => {
      console.log('postInfo ele', ele);
      let postData = ele.body;
      let idPost = ele.id
      console.log('posttData', postData);
      console.log('idPost', idPost);
      let descriptionUser = `
      <p id="description">${postData}  </p>
      `;  
      let imageTags = document.querySelectorAll('#avatar');
      imageTags.forEach(el => {
   
          el.insertAdjacentHTML('afterend', descriptionUser);
        
      });
    });
    
  });



  const setInfoUser = () => {
    console.log('setInfo');
  }


 const getDataPosts = async () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
      console.log('post', json);
    //  const data = await getDataUsers() 
      //console.log(data);
      json.forEach(element => {
          let postData = element.body;
          let idPost = element.id
          console.log('posttData', postData);
          console.log('idPost', idPost);
          let descriptionUser = `
          <p id="description">${postData}  </p>
          `;  
          let imageTags = document.querySelectorAll('#avatar');
          imageTags.forEach(el => {
            if(idPost < 2 ) {
              el.insertAdjacentHTML('afterend', descriptionUser);
            }
          });
          
        });
        
    } )
}


let bodyHome = document.querySelector('.home');
if (bodyHome) {
  console.log('estoy en home');
//  getDataUsers();
  slider();
  setTimeout(() => {
    
    sliderTestimonials();
    getUserInfo();
    setInfoUser();
  getImages();
  }, 1500);
}