

   const mobileClose = document.querySelector('.mobile-close');
   const openBtn = document.querySelectorAll('.open-btn');
   const modal = document.querySelector('.modals');
   const closeClick = document.querySelectorAll('.close-modal')
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
         modal.querySelector('.modal').classList.add('visible');
      }, 300);

   }

   openBtn.forEach(element => {
      element.addEventListener('click', (e) => {
         e.preventDefault();
         openModalDesktop();
      });
   });

   const closeModal = () => {
      modal.querySelector('.modal').classList.remove('visible');
      setTimeout(() => {
         modal.classList.remove('is-open');
         enableScroll();
      }, 400);

   }
   closeClick.forEach(elem => {
      elem.addEventListener('click', (e) => {
         closeModal();
      })
   })

   mobileClose.addEventListener('swiped-down', function (e) {
      closeModal();
   });
