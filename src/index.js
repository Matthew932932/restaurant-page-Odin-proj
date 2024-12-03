import "./styles.css";

import { initPage, aboutPage, menuPage } from "./mycontent.js";

console.log("test1");
initPage();

const homeB = document.querySelector("#home");
homeB.addEventListener("click", function (e) {
    initPage();
    e.target.style.background = "blue";
});

const menuB = document.querySelector("#menu");
menuB.addEventListener("click", function (e) {
    menuPage();
    e.target.style.background = "red";
});

const aboutB = document.querySelector("#about");
aboutB.addEventListener("click", function (e) {
    aboutPage();
    e.target.style.background = "green";
});