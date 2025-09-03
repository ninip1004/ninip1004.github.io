// 썸네일 클릭 시 모달 열기
const thumbnails = document.querySelectorAll('.thumbnail');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.querySelector('.close');

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    const fullImgSrc = thumbnail.dataset.full;
    modal.style.display = 'flex';
    modalImg.src = fullImgSrc;
  });
});

// 모달 닫기
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// 스크롤 시 애니메이션 실행
const fadeElements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
});
