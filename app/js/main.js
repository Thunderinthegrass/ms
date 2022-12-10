console.log("привет");
const newsSlider = new Swiper(".news__slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
  // effect: "fade",
  // loop: "infinite",
});



// function mobileMenu() {
//   let menuBtn = document.querySelector(".nav-mobile__btn");
//   let mobileMenuInner = document.querySelector(".nav-mobile");

//   menuBtn.addEventListener("click", () => {
//     menuBtn.classList.toggle("mobile-btn--active");
//     mobileMenuInner.classList.toggle("active");
//   });
// }
// mobileMenu();

// function popupForm() {
//   const btns = document.querySelectorAll(".modal-btn");
//   const modalOverlay = document.querySelector(".modal-overlay ");
//   const modals = document.querySelectorAll(".modal");
//   const modalCloseBtn = document.querySelector(".modal__close-btn");
//   const close = document.querySelectorAll(".close");

//   btns.forEach((el) => {
//     el.addEventListener("click", (e) => {
//       let path = e.currentTarget.getAttribute("data-path");

//       modals.forEach((el) => {
//         el.classList.remove("modal--visible");
//       });

//       document
//         .querySelector(`[data-target="${path}"]`)
//         .classList.add("modal--visible");
//       modalOverlay.classList.add("modal-overlay--visible");
//     });
//   });

//   modalOverlay.addEventListener("click", (e) => {
//     console.log(e.target);

//     close.forEach((elem) => {
//       if (e.target == modalOverlay || e.target == elem) {
//         modalOverlay.classList.remove("modal-overlay--visible");
//         modals.forEach((el) => {
//           el.classList.remove("modal--visible");
//         });
//       }
//     })
//   });
// }
// popupForm();

// function moreBtn() {
//   let btn = document.querySelector('.members__more-btn');
//   let membersInnerMore = document.querySelector('.members__inner_more');
//   let span = btn.querySelector('span')

//   btn.addEventListener('click', () => {
//     membersInnerMore.classList.toggle('d-none');
//     membersInnerMore.classList.toggle('d-flex');
//     span.classList.toggle('after-rotate');

//     if (membersInnerMore.classList.contains('d-flex')) {
//       span.innerHTML = 'Скрыть';
//     }
//     else {
//       span.innerHTML = 'Больше';
//     }
//   })

// }
// moreBtn();

// function tabs() {

//   let tabItem = document.querySelectorAll('.map__info');
//   let tabNavItem = document.querySelectorAll('.map__dot');
//   let closeBtn = document.querySelectorAll('.close-info-btn');

//   closeBtn.forEach((elem, index) => {
//     elem.addEventListener('click', () => {
//       tabItem[index].classList.remove('tab--active');
//       tabNavItem[index].classList.remove('tabs-navigation__item--active');
//     })
//   })

//   function tab(tabItem, tabNavItem) {
//     tabNavItem.forEach((elem, index) => {
//       elem.addEventListener('click', (e) => {
//         for (let i = 0; i < tabNavItem.length; i++) {
//           tabNavItem[i].classList.remove('tabs-navigation__item--active');
//           e.target.classList.add('tabs-navigation__item--active');
//           tabItem[i].classList.remove('tab--active');
//         }
//         tabItem[index].classList.add('tab--active');
//         console.log('ggg')
//       })
//     })
//   }
  
//   tab(tabItem, tabNavItem);


// }
// tabs();



