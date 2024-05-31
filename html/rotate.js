function rotate(event) {
   this.querySelector('.rotate-box').classList.add('rotating');
}

function stopRotate(event) {
   this.querySelector('.rotate-box').classList.remove('rotating');
}


document.querySelectorAll('.swiper-slide').forEach((item) => {
   item.addEventListener('mouseenter', rotate)
   item.addEventListener('mouseout', stopRotate)
})
document.querySelectorAll('.trans-item').forEach((item) => {
   item.addEventListener('mouseenter', rotate)
   item.addEventListener('mouseout', stopRotate)
})
document.querySelectorAll('.trans-item').forEach((item) => {
   item.addEventListener('mousemove', rotate)
   item.addEventListener('mouseout', stopRotate)
})