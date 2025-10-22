document.querySelectorAll('.button').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.innerText = 'Clicked!';
    btn.style.background = '#28a745';
  });
});