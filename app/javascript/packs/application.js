// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import 'bootstrap';

// Import plugins:
import { initUpdateNavbarOnScroll } from '../components/navbar'; // navbar
import { loadDynamicBannerText } from '../components/banner'; // banner

// Init
document.addEventListener('turbolinks:load', () => {
  // Call your JS functions here
  initUpdateNavbarOnScroll(); // navbar
  loadDynamicBannerText(); // banner

  // // Use an external JS library (can replace script tag in app.html)
  // var e = document.createElement("script");
  // e.src = 'https://platform-api.sharethis.com/js/sharethis.js#property=5f02f52c81808f0012503133&product=sticky-share-buttons&cms=sop';
  // e.type="text/javascript";
  // document.head.appendChild(e);
});


