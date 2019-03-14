document.querySelector('.banner-btn').addEventListener('click', () => {
    document.querySelector('.banner').style.display = 'none';
    document.querySelector('.form-container').style.cssText = 'opacity: 1; visibility: visible';
    document.querySelector('.container').style.background = '#106d8c';
});

document.querySelector('.x-btn').addEventListener ('click', () => {
  document.querySelector('.banner').style.display = 'flex';
  document.querySelector('.form-container').style.cssText = 'opacity: 0; visibility: hidden';
  document.querySelector('.container').style.cssText = 'background: linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.5)), url(images/landscape-city.jpg) center no-repeat; background-size: cover';
});