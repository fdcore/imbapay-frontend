

   const mobileClose = document.querySelector('.swipe-down');
   const modal = document.querySelector('.bg-lang');
   const openLang = document.querySelectorAll('.open-lang');
   const closeLang = document.querySelectorAll('.close-lang')
   let disableScroll = function () {
      document.body.classList.add('overflow-y-hidden');
   }

   let enableScroll = function () {
      document.body.classList.remove('overflow-y-hidden');
   }
   const openModalDesktop = () => {
      modal.classList.add('is-open');
      disableScroll();
      setTimeout(() => {
         modal.querySelector('.swipe-down').classList.add('visible');
      }, 300);

   }

   openLang.forEach(element => {
      element.addEventListener('click', (e) => {
         e.preventDefault();
         openModalDesktop();
      });
   });
   closeLang.forEach(element => {
      element.addEventListener('swiped-down', (e) => {
         e.preventDefault();
         closeModal();
      });
   });

   const closeModal = () => {
      modal.querySelector('.close-lang ').classList.remove('visible');
      setTimeout(() => {
         modal.classList.remove('is-open');
         enableScroll();
      }, 400);

   }
