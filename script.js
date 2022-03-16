// Fullpage initialization
const fullPage = new fullpage('#fullpage', {
  licenseKey: 'Hi5!vfR&o1',
  anchors: ['home', 'myWork', 'aboutMe', 'getInTouch'],
  menu: '#menu',
  scrollOverflow: true,
});

// Loading overlay
window.onload = () => {
  const loadingOverlay = document.getElementById('loading-overlay');
  
  anime({
    targets: loadingOverlay,
    opacity: 0,
    complete: () => {
      loadingOverlay.style.display = 'none';
    }
  })

  // "Scroll down" animation
  setTimeout(() => {
    anime({
      targets: '.scroll-down p',
      keyframes: [
        { translateX: '14%' },
        { translateX: 0 },
      ],
      duration: 3000,
      loop: true,
      easing: 'cubicBezier(0.25, 0.1, 0.25, 1)',
    });
  }, 1000);
}

// Apps overlay and tooltip
const myWorkOverlay = document.getElementById('my-work__overlay');
const app1 = document.getElementById('app-1');
const app1Info = document.getElementById('app-1__info');
const app2 = document.getElementById('app-2');
const app2Info = document.getElementById('app-2__info');
const app3 = document.getElementById('app-3');
const app3Info = document.getElementById('app-3__info');

myWorkOverlay.addEventListener('click', () => {
  app1Info.classList.remove('active');
  app2Info.classList.remove('active');
  app3Info.classList.remove('active');
  myWorkOverlay.classList.remove('active');
});

app1.addEventListener('click', () => {
  app1Info.classList.add('active');
  myWorkOverlay.classList.add('active');
});

app2.addEventListener('click', () => {
  app2Info.classList.add('active');
  myWorkOverlay.classList.add('active');
});

app3.addEventListener('click', () => {
  app3Info.classList.add('active');
  myWorkOverlay.classList.add('active');
});

// Auto-update copyright year
document.getElementById('copyright-year').innerText = new Date().getFullYear();
