const websiteTitle = document.getElementById("website-title");

let websiteTitleTimer = 0;
let websiteTitleText = websiteTitle.innerText;

let websiteTitleTextIndex = 0;

websiteTitle.innerText = "_";

let setHeart = false;

function bogus_repeat() {

    const animIcon = "_"; // █

    websiteTitleTimer += 1;
    if (websiteTitleTextIndex < websiteTitleText.length) {
        if (Math.random() * 3 < 1) {
            websiteTitleTextIndex += 1;
            websiteTitleTextIndex = Math.min(websiteTitleTextIndex, websiteTitleText.length);
            websiteTitle.innerHTML = websiteTitleText.substring(0, websiteTitleTextIndex);
        }
    }
    if (Math.floor(websiteTitleTimer/42) % 2 === 1) {
        if (websiteTitle.innerHTML.endsWith(animIcon)) {
            websiteTitle.innerHTML = websiteTitle.innerHTML.substring(0, websiteTitle.innerHTML.length-1);
        }
    } else {
        if (!websiteTitle.innerText.endsWith(animIcon)) {
            websiteTitle.innerHTML += animIcon;
        }
    }

    if (websiteTitleText.length === websiteTitleTextIndex) {
        if (!setHeart) {
            setHeart = true;
            setTimeout(addHeart, 4000);
        }
    }

    setTimeout(bogus_repeat, 20 + Math.floor(Math.random() * 10));
}

setTimeout(bogus_repeat, 500);

function addHeart() {
    websiteTitleText = websiteTitleText + "\xa0<3"
}


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

    card.querySelector(".project_image").style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles(e, card) {
    card.querySelector(".project_image").style.transform =
        `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}


for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    card.addEventListener("mousemove", (event) => { handleHover(event, card) });
    card.addEventListener("mouseleave", (event) => { resetStyles(event, card) });
}

const projects = document.getElementsByClassName("project");

const tagTemplate = `<div class="tag gray"><h5>REPLACE</h5></div>`;

for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    const tagsListData = project.getAttribute("data-tags");
    if (tagsListData !== null) {
        const tagsList = tagsListData.split(", ");
        console.log(tagsList);
        const projectTextElement = project.querySelector(".project_text");
        if (projectTextElement !== null) {
            const tagsElement = projectTextElement.querySelector(".tags");
            if (tagsElement !== null) {
                for (let j = 0; j < tagsList.length; j++) {
                    tagsElement.innerHTML += tagTemplate.replace("REPLACE", tagsList[j]);
                }
            }
        }
    }
}