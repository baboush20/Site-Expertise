document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const subject = encodeURIComponent('Nouveau message depuis le site');
  const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:contact@exemple.com?subject=${subject}&body=${body}`;
});