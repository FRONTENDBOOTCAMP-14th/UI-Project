import './style.css';

// /src/main.js 에 아래 코드 추가
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('.hamburger-button');
  const body = document.body;

  if (hamburgerButton && body) {
    hamburgerButton.addEventListener('click', () => {
      body.classList.toggle('menu-open');
      const isMenuOpen = body.classList.contains('menu-open');
      hamburgerButton.setAttribute('aria-expanded', isMenuOpen);
      hamburgerButton.setAttribute('aria-label', isMenuOpen ? '메뉴 닫기' : '메뉴 열기');
    });

    // 햄버거 메뉴가 열려 있을 때, 화면 크기가 커지면 메뉴를 자동으로 닫기
    window.addEventListener('resize', () => {
      // 640px 이상으로 커지면 menu-open 클래스 제거
      if (window.innerWidth > 639 && body.classList.contains('menu-open')) {
        body.classList.remove('menu-open');
        hamburgerButton.setAttribute('aria-expanded', 'false');
        hamburgerButton.setAttribute('aria-label', '메뉴 열기');
      }
    });
  }
});
