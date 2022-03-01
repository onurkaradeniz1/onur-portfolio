import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Hi there!", "Welcome To My Site!"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
