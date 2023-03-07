// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);
console.log(SimpleLightbox);


// получим ссылку на div с классом gallery
const galleryDivEl = document.querySelector('.gallery');
console.log(galleryDivEl);


// создадим функцию для создания карточки одного изображения

const creatGalerry = ({ preview, original, description }) =>
   
    `<div class="gallery__item">
           <a class="gallery__link" href="${original}">
            <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
      
// переберем массив объектов и на каждый из них вызовем функцию для создания карточки

const newArrayGalerry = galleryItems.map(el => creatGalerry(el)).join("");
console.log(newArrayGalerry);

// Добавим в HTML полученную разметку с карточками

galleryDivEl.insertAdjacentHTML('afterbegin', newArrayGalerry);

// укажем функцию обработчика события при клике на картинку
const handleImgClick = (event) => {
  event.preventDefault();

  // если это не картинка то return
      if (event.target.nodeName !== "IMG") {
        console.log("This is not img");
        return;
    }
    // если это картинка - достаем ее значение(адрес) в data-source
  const largeImg = event.target.dataset.source;
  console.log(largeImg);
  
  // подключаем библиотеку по созданию модального окна и заносим адрес картинки
  const modalImg = basicLightbox.create(`
    <img src = '${largeImg}', width="800" height="600">
`)

modalImg.show()
  
  // закрытие модального окна Escape

 document.addEventListener('keydown', ({code}) => {
  console.log(code);

  if (code === 'Escape') {
    modalImg.close();
    document.removeEventListener('keydown', ({ code }));
  }

})
  
}

// повесим слушателя на div class="gallery"
galleryDivEl.addEventListener('click', handleImgClick);

console.log(galleryItems);