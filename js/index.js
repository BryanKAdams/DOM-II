// Your code goes here
document.querySelectorAll(".nav-container .nav .nav-link").forEach(el => {
    el.addEventListener("click", () => {
        el.style.color = "#e62739"
    })
})
document.querySelectorAll(".nav-container .nav .nav-link").forEach(el => {
    window.addEventListener("resize", () => {
        el.style.color = "orange"
    })
})
document.querySelectorAll(".nav-container .nav .nav-link").forEach(el => {
    el.addEventListener("dblclick", () => {
        el.style.color = "black"
    })
})
const body = document.querySelector("body");
window.addEventListener('scroll', () => {
    body.style.backgroundColor = "orange"
})
const busImage = document.querySelectorAll(".img-content img")

busImage.forEach(el => {
    if (ifKonami != true) {
        el.addEventListener("mouseenter", () => {
            el.style.transform = "rotate(180deg)";
            el.style.transition = "all 0.3s"
        })
    }
})
busImage.forEach(el => {
    el.addEventListener("mouseleave", () => {
        el.style.transform = "scale(1)";
        el.style.transition = "all 0.3s"
    })
})
function zoom(event) {
    event.preventDefault();

    scale += event.deltaY * -0.01;

    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);

    // Apply scale transform
    el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('img');
el.onwheel = zoom;

document.addEventListener('keydown', logKey);

function logKey(e) {
    log.textContent += ` ${e.code}`;
    stringContent += ` ${e.code}`;
}
stringContent = document.querySelector("#log").textContent;
function ifKonami() {
    if (stringContent === " ArrowUp ArrowUp ArrowDown ArrowDown ArrowLeft ArrowRight ArrowLeft ArrowRight KeyB KeyA Enter") {
        return true
    } else {
        return false
    }
}
const password = document.querySelector('.destination div[type="password"]');

password.addEventListener('blur', (event) => {
    event.target.style.background = 'pink';
});


password.addEventListener('focus', (event) => {
    event.target.style.background = '';
});
const containerPar = document.querySelectorAll("nav a");
window.addEventListener("load", (event) => {
    containerPar.forEach(x => x.style.backgroundColor = "yellow");
})
const stopLink = document.querySelector("nav");

stopLink.addEventListener("click", (event) => {
  console.log("stopped the link");
  event.preventDefault();
})
const divPress = document.querySelectorAll(".destination");
divPress.forEach(x => x.addEventListener("click", event => {
    x.style.color = "green"
}))
const buttonpress = document.querySelectorAll(".btn");
buttonpress.forEach(x => x.addEventListener("click", event => {
    console.log("button has been pressed");
    event.stopPropagation();
}))