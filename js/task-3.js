const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const imagesList = document.createElement('li');
// const elements = images.map(image => {
//     const imageEl = document.createElement('img');
//     imageEl.src = image.url;
//     imageEl.alt = image.alt;
//     return imageEl;
// }).join('')
// // const makeImageGallery = images.map(elements);
//     ;

// console.log(elements);

// const gallery = document.querySelector('#gallery');
// gallery.insertAdjacentHTML("afterbegin", elements);

const gallery = document.querySelector('#gallery');
gallery.classList.add("image-list")

const innerMarkup = images.map(images => {
    return `
    <li>
        <img class = 'image', src= ${images.url}, alt=${images.alt}/>
    </li>
    `
        ;
}).join(' ');


console.log(innerMarkup);

gallery.insertAdjacentHTML('afterbegin', innerMarkup)
