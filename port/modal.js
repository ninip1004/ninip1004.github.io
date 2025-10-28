// 프로젝트 정보 데이터
const projects = {
  project1: {
    title: 'Edit Design Project 1',
    image: 'img/portfolio/p1.jpg',
    description: '이 프로젝트는 브랜드 아이덴티티를 위한 패키지 디자인입니다. 심플하면서도 감각적인 디자인으로 제품의 가치를 극대화했습니다.'
  },
  project2: {
    title: 'Edit Design Project 2',
    image: 'img/portfolio/let.jpg',
    description: '레터링 디자인 프로젝트로, 타이포그래피를 중심으로 한 비주얼 아이덴티티 작업입니다.'
  },
  project3: {
    title: 'Edit Design Project 3',
    image: 'img/portfolio/name.png',
    description: '네이밍과 로고 디자인을 통합한 브랜딩 프로젝트입니다.'
  },
  project4: {
    title: 'Edit Design Project 4',
    image: 'img/portfolio/logo1.png',
    description: '기업 로고 디자인 프로젝트로, 브랜드의 정체성을 명확히 표현했습니다.'
  },
  project5: {
    title: 'Edit Design Project 5',
    image: 'img/portfolio/logo1.png',
    description: '모던하고 세련된 로고 디자인으로 브랜드 가치를 높였습니다.'
  },
  project6: {
    title: 'Edit Design Project 6',
    image: 'img/portfolio/logo1.png',
    description: '심볼과 로고타입을 결합한 통합 브랜딩 디자인입니다.'
  }
};

// 모달 열기 함수
function openModal(projectId) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const project = projects[projectId];

  modalBody.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h2>${project.title}</h2>
    <p>${project.description}</p>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// 모달 닫기 함수
function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// 모달 외부 클릭시 닫기
function closeModalOnOutside(event) {
  if (event.target.id === 'modal') {
    closeModal();
  }
}

// ESC 키로 모달 닫기
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});