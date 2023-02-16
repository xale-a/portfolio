const fullPage = new fullpage('#fullpage', {
  licenseKey: 'Hi5!vfR&o1',
  anchors: ['home', 'myWork', 'aboutMe', 'getInTouch'],
  menu: '#menu',
  scrollOverflow: true,
});

const myWorkOverlay = document.getElementById('my-work__overlay');
const app1 = document.getElementById('app-1');
const app1Info = document.getElementById('app-1__info');
const app2 = document.getElementById('app-2');
const app2Info = document.getElementById('app-2__info');

myWorkOverlay.addEventListener('click', () => {
  app1Info.classList.remove('active');
  app2Info.classList.remove('active');
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