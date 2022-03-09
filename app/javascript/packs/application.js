// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import "channels"
import 'bootstrap';
import { loadDynamicBannerText } from '../components/banner';

Rails.start()
Turbolinks.start()

document.addEventListener('turbolinks:load', () => {

  loadDynamicBannerText();
});



const styles = [
  'color: grey',
  'background: black',
  'font-size: 30px',
  'padding: 10px',
].join(';');

console.log('%cWelcome :)', styles);
