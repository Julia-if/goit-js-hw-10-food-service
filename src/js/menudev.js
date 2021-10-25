import myFunc from "./iife.js";
myFunc();
import template from "../templates/menu.hbs";
import data from "../menu.json";

const menuList = document.querySelector('js-menu');
const item = template(data);
console.log(item);
menuList.insertAdjacentHTML("afterbegin", items);

console.log("gghjjj");