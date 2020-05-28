import Typed from 'typed.js';
const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["It's Happy Hour time", "Let's make a cocktail"],
    typeSpeed: 50,
    loop: true
  });
}
export { loadDynamicBannerText };
