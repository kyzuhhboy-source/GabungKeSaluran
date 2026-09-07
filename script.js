document.addEventListener('DOMContentLoaded', () => {

  // ==================== 1. FITUR LOADING SCREEN (3 DETIK) ====================
  const loader = document.getElementById('loader');
  
  setTimeout(() => {
    loader.classList.add('loader-hidden');
  }, 3000); // 3000ms = 3 Detik


  // ==================== 2. FITUR MODAL / JENDELA ====================
  
  // Elemen Profil
  const btnProfile = document.getElementById('btn-profile');
  const modalProfile = document.getElementById('modal-profile');
  const closeProfile = document.getElementById('close-profile');

  // Elemen Menu Sosmed
  const btnMenu = document.getElementById('btn-menu');
  const modalMenu = document.getElementById('modal-menu');
  const closeMenu = document.getElementById('close-menu');

  // Buka Modal Profil
  btnProfile.addEventListener('click', () => {
    modalProfile.style.display = 'flex';
  });

  // Tutup Modal Profil
  closeProfile.addEventListener('click', () => {
    modalProfile.style.display = 'none';
  });

  // Buka Modal Menu Sosmed
  btnMenu.addEventListener('click', () => {
    modalMenu.style.display = 'flex';
  });

  // Tutup Modal Menu Sosmed
  closeMenu.addEventListener('click', () => {
    modalMenu.style.display = 'none';
  });

  // Tutup Modal Jika Mengklik Luar Area Box Modal
  window.addEventListener('click', (event) => {
    if (event.target === modalProfile) {
      modalProfile.style.display = 'none';
    }
    if (event.target === modalMenu) {
      modalMenu.style.display = 'none';
    }
  });

});
