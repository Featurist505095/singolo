//top menu color changer
let selectedHeader = document.querySelector('menu div.selected');
let allHeaderMenuElements = document.querySelectorAll('#top_wrapper menu div');
let headerMenu = document.querySelector('#top_wrapper menu');

headerMenu.addEventListener('click', cur => {
  selectedHeader.classList.remove('selected');
  cur.target.parentNode.classList.add('selected');
  selectedHeader = document.querySelector('menu div.selected');
});

//slider
let slides = document.querySelectorAll('.slider .slide');
let currentSlide = 0;
let rightSlider = document.querySelector('.slider .right');
let leftSlider = document.querySelector('.slider .left');

rightSlider.addEventListener('click', cur => {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('current_slide');
  }
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('current_slide');
});

leftSlider.addEventListener('click', cur => {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('current_slide');
  }
  currentSlide = (1 - currentSlide) % slides.length;
  slides[currentSlide].classList.add('current_slide');
});

//phone image on/off

let phoneHorizontal = document.querySelector('.horizontal .phone');
let currentHorPhoneImage = 0;
let phoneHorizontalImage = document.querySelector('.horizontal .image');

phoneHorizontal.addEventListener('click', () => {
  currentHorPhoneImage === 0
    ? phoneHorizontalImage.classList.remove('display')
    : phoneHorizontalImage.classList.add('display');
  currentHorPhoneImage === 0
    ? (currentHorPhoneImage = 1)
    : (currentHorPhoneImage = 0);
});

let phoneVertical = document.querySelector('.vertical .phone');
let currentVertPhoneImage = 0;
let phoneVerticalImage = document.querySelector('.vertical .image');

phoneVertical.addEventListener('click', () => {
  currentVertPhoneImage === 0
    ? phoneVerticalImage.classList.remove('display')
    : phoneVerticalImage.classList.add('display');
  currentVertPhoneImage === 0
    ? (currentVertPhoneImage = 1)
    : (currentVertPhoneImage = 0);
});

//portfolio tabs
let selectedMenuItem = document.querySelector('.portfolio menu .selected');
let imagesMenu = document.querySelector('.portfolio menu');
let allImages = document.querySelectorAll('main .content img');
let webDesignImages = document.querySelectorAll('main .content img.web_design');
let graphicDesignImages = document.querySelectorAll(
  'main .content img.graphic_design'
);
let artworkImages = document.querySelectorAll('main .content img.artwork');

function selectNewMenuItem(menuItem) {
  selectedMenuItem.classList.remove('selected');
  menuItem.target.classList.add('selected');
  selectedMenuItem = document.querySelector('.portfolio menu .selected');
}

function removeNoneClass() {
  for (let i = 0; i < allImages.length; i++) {
    allImages[i].classList.remove('none');
  }
}

imagesMenu.addEventListener('click', cur => {
  if (cur.target.classList == 'menu_buttons') {
    if (cur.target.innerText === 'Web Design') {
      selectNewMenuItem(cur);
      removeNoneClass();
      for (let i = 0; i < graphicDesignImages.length; i++) {
        graphicDesignImages[i].classList.add('none');
      }
      for (let i = 0; i < artworkImages.length; i++) {
        artworkImages[i].classList.add('none');
      }
    }
    if (cur.target.innerText === 'Artwork') {
      selectNewMenuItem(cur);
      removeNoneClass();
      for (let i = 0; i < graphicDesignImages.length; i++) {
        graphicDesignImages[i].classList.add('none');
      }
      for (let i = 0; i < webDesignImages.length; i++) {
        webDesignImages[i].classList.add('none');
      }
    }
    if (cur.target.innerText === 'Graphic Design') {
      selectNewMenuItem(cur);
      removeNoneClass();
      for (let i = 0; i < artworkImages.length; i++) {
        artworkImages[i].classList.add('none');
      }
      for (let i = 0; i < webDesignImages.length; i++) {
        webDesignImages[i].classList.add('none');
      }
    }
    if (cur.target.innerText === 'All') {
      selectNewMenuItem(cur);
      removeNoneClass();
    }
  }
});

//portfolio image border

let imageBlock = document.querySelector('main .content');
let clickedImage = document.querySelector('main .content .clicked');

imageBlock.addEventListener('click', cur => {
  if (cur.target.nodeName === 'IMG') {
    if (clickedImage !== null) {
      clickedImage.classList.remove('clicked');
    }
    cur.target.classList.add('clicked');
    clickedImage = cur.target;
  }
});

//form alert

let button = document.querySelector('.requirements form button');

button.addEventListener('click', () => {
  let nameInput = document.querySelector('.requirements form input.input_name');
  let mailInput = document.querySelector('.requirements form input.input_mail');
  let subjectInput = document.querySelector(
    '.requirements form input.input_subject'
  );
  let descriptionTextarea = document.querySelector(
    '.requirements form textarea.textarea_description'
  );
  let text = 'Письмо отправлено';

  text +=
    subjectInput.value === '' ? '\nБез темы' : `\nТема: ${subjectInput.value}`;
  text +=
    descriptionTextarea.value === ''
      ? '\nБез описания'
      : `\nОписание: ${descriptionTextarea.value}`;

  if (nameInput.value !== '' && mailInput.value !== '') {
    alert(text);
  }
});
