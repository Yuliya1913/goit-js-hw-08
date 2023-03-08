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
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
</div>`;
      
// переберем массив объектов и на каждый из них вызовем функцию для создания карточки

const newArrayGalerry = galleryItems.map(el => creatGalerry(el)).join("");
console.log(newArrayGalerry);

// Добавим в HTML полученную разметку с карточками

galleryDivEl.insertAdjacentHTML('afterbegin', newArrayGalerry);

// let gallery = new SimpleLightbox('.gallery a', {
//     captionsData: "alt",
//     captionDelay: 250,
    
// })

// console.log(gallery);
console.log(galleryItems);