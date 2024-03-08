let button = document.querySelector('.bar');

let menuBoard = document.querySelector('.left');

button.addEventListener('click', () => {
    if (menuBoard.style.left == "-100%") {
        menuBoard.style.left = "0";
        button.style.left = "19rem";
    } else{
        menuBoard.style.left = "-100%";
        button.style.left = "30px";
    }
})

