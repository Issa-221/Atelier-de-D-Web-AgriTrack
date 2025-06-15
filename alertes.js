document.querySelectorAll('.close-btn').forEach(button => {
  button.addEventListener('click', () => {
    const alert = button.closest('.alert');
    alert.style.transform = 'scale(0)';
    alert.style.opacity = '0';
    setTimeout(() => alert.remove(), 300);
  });
});
