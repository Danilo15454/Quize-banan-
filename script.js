const answer = document.querySelectorAll('.answer');
answer.forEach((item)=>{
  item.addEventListener('click', () => {
      item.classList.add('active');
  
      setTimeout(() => {
        item.classList.remove('active');
      }, 1000);
  })
})