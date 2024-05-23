document.addEventListener("DOMContentLoaded", () => {
   const container = document.querySelector('.element_random');
   const circle = document.getElementById('circle');
   const speed = 3;
   let dx = (Math.random() * 2 - 1) * speed;
   let dy = (Math.random() * 2 - 1) * speed;
   const circleRadius = circle.offsetWidth / 2;

   function moveCircle() {
      const containerRect = container.getBoundingClientRect();
      const rect = circle.getBoundingClientRect();

      if (rect.left <= containerRect.left || rect.right >= containerRect.right) {
         dx = -dx;
      }

      if (rect.top <= containerRect.top || rect.bottom >= containerRect.bottom) {
         dy = -dy;
      }

      circle.style.left = circle.offsetLeft + dx + 'px';
      circle.style.top = circle.offsetTop + dy + 'px';

      requestAnimationFrame(moveCircle);
   }

   function repelMouse(event) {
      const rect = circle.getBoundingClientRect();
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const distX = rect.left + circleRadius - mouseX;
      const distY = rect.top + circleRadius - mouseY;
      const distance = Math.sqrt(distX * distX + distY * distY);

      const minDistance = 80; // Минимальное расстояние до указателя мыши

      if (distance < minDistance) {
         const angle = Math.atan2(distY, distX);
         dx = Math.cos(angle) * speed;
         dy = Math.sin(angle) * speed;
      }
   }

   // Начальное положение круга в центре контейнера
   circle.style.left = (container.clientWidth / 2 - circleRadius) + 'px';
   circle.style.top = (container.clientHeight / 2 - circleRadius) + 'px';

   document.addEventListener('mousemove', repelMouse);
   requestAnimationFrame(moveCircle);
});