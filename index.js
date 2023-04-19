function reveal() {
    const nav = document.querySelector(".nav");
    const body = document.querySelector("body");
    nav.style.display = "block";
    body.style.backgroundColor = "hsla(0, 0%, 41%, 0.5)";
}
function closed() {
    const nav = document.querySelector(".nav");
    const body = document.querySelector("body");
    nav.style.display = "none";
    body.style.backgroundColor = "hsl(0, 0%, 98%)";
}
function featuresOpen() {
    const list = document.querySelector(".features ul");
    const up = document.querySelector(".features .up");
    const down= document.querySelector(".features .down");
    list.style.display = "block";
    up.style.display = "inline";
    down.style.display = "none";
}
function featuresClose() {
    const list = document.querySelector(".features ul");
    const up = document.querySelector(".features .up");
    const down= document.querySelector(".features .down");
    list.style.display = "none";
    up.style.display = "none";
    down.style.display = "inline";
}
function companyOpen() {
    const list = document.querySelector(".company ul");
    const up = document.querySelector(".company .up");
    const down= document.querySelector(".company .down");
    list.style.display = "block";
    up.style.display = "inline";
    down.style.display = "none";
}
function companyClose() {
    const list = document.querySelector(".company ul");
    const up = document.querySelector(".company .up");
    const down= document.querySelector(".company .down");
    list.style.display = "none";
    up.style.display = "none";
    down.style.display = "inline";
}