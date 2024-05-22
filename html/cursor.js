if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
    .test(navigator.userAgent)) {
      // Курсор здесь уже не нужен...
document.documentElement.style.cursor = 'none';
document.querySelector('.cursor2').style.display='none';

} else {console.log("Вы используете ПК.") ;
  // Курсор здесь уже не нужен...
}
console.log("Вы используете мобильное устройство (телефон или планшет).")
    var cursorinner = document.querySelector('.cursor2');
  
    

    document.addEventListener('mousemove', function (e) {
      var x = e.clientX;
      var y = e.clientY;
      cursorinner.style.left = x + 'px';
      cursorinner.style.top = y + 'px';
    });

    document.addEventListener('mousedown', function () {
      cursorinner.classList.add('cursorinnerhover')
    });

    document.addEventListener('mouseup', function () {
      cursorinner.classList.remove('cursorinnerhover')
    });
   

   