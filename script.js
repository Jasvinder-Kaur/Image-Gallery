let scroll = document.querySelector(".gallery");

let backBtn = document.querySelector("#backBtn");
let nextBtn = document.querySelector("#nextBtn");

scroll.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scroll.style.scrollBehavior = "auto";

    scroll.scrollLeft += evt.deltaY;
});

backBtn.addEventListener("click", ()=> {
    scroll.style.scrollBehavior = "smooth";
    scroll.scrollLeft -= 900;
});

nextBtn.addEventListener("click", ()=> {
    scroll.style.scrollBehavior = "smooth";
    scroll.scrollLeft += 900;
});


