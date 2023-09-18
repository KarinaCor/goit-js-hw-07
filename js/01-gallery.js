import { galleryItems } from './gallery-items.js'

console.log(galleryItems)
// Change code below this line

const gallery = document.querySelector('.gallery')


const markup = galleryItems.map(({preview, original, description}) =>
    `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`);


gallery.insertAdjacentHTML("beforeend", markup.join(""));


gallery.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
		return
	}

    const selectedImage = e.target.getAttribute('data-source')

    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`)

    instance.show()
    
    gallery.addEventListener('keydown', onESCClick) 

    function onESCClick(e) {
      if(e.key === "Escape") {
        instance.close()
        gallery.removeEventListener('keydown', onESCClick)
      }
    }
})






