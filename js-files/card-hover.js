const cards = document.getElementsByClassName("project_image_container");

const THRESHOLD = 5;

function handleHover(e, card) {
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop + document.documentElement.scrollTop) / clientHeight;
    // document.body.scrollTop

    let rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    let rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

    rotateX = -rotateX;
    rotateY = -rotateY;

    card.querySelector(".project_image_tilt").style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles(e, card) {
    card.querySelector(".project_image_tilt").style.transform =
        `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}


for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    card.addEventListener("mousemove", (event) => { handleHover(event, card) });
    card.addEventListener("mouseleave", (event) => { resetStyles(event, card) });
}