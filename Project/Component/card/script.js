document.addEventListener('DOMContentLoaded', () => {
  const followButtons = document.querySelectorAll('.btn-follow');

  followButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Mengambil elemen stats terdekat dari tombol yang diklik
      const statsContainer = button.closest('.footer').querySelector('.stats span:first-child');
      let currentFollowers = parseInt(statsContainer.textContent.trim());

      // Cek apakah user sudah di-follow
      const isFollowing = button.classList.contains('following');

      if (isFollowing) {
        // Unfollow action
        button.classList.remove('following');
        button.innerHTML = 'Follow <i class="ri-add-line"></i>';
        
        // Kurangi jumlah follower
        currentFollowers -= 1;
        statsContainer.innerHTML = `<i class="ri-user-line"></i> ${currentFollowers}`;
      } else {
        // Follow action
        button.classList.add('following');
        button.innerHTML = 'Following <i class="ri-check-line"></i>';
        
        // Tambah jumlah follower
        currentFollowers += 1;
        statsContainer.innerHTML = `<i class="ri-user-line"></i> ${currentFollowers}`;
      }
    });
  });
});