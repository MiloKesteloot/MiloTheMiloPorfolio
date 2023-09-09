// const websiteTitle = document.getElementById("website-title");
//
// let websiteTitleTimer = 0;
// let websiteTitleText = websiteTitle.innerHTML;
//
// let websiteTitleTextIndex = 0;
//
// websiteTitle.innerText = "_";
//
// let setHeart = false;
//
// function bogus_repeat() {
//
//     websiteTitleTimer += 1;
//     if (websiteTitleTextIndex < websiteTitleText.length) {
//         if (Math.random() * 3 < 1) {
//             websiteTitleTextIndex += 1;
//             websiteTitleTextIndex = Math.min(websiteTitleTextIndex, websiteTitleText.length);
//             websiteTitle.innerHTML = websiteTitleText.substring(0, websiteTitleTextIndex);
//         }
//     }
//
//     animBlinker();
//
//
//
//     setTimeout(bogus_repeat, 20 + Math.floor(Math.random() * 10));
// }
//
// setTimeout(bogus_repeat, 500);
//
// // if (websiteTitleText.length === websiteTitleTextIndex) {
// //     if (!setHeart) {
// //         setHeart = true;
// //         setTimeout(addHeart, 4000);
// //     }
// // }
//
// function addHeart() {
//     websiteTitleText = websiteTitleText + "\xa0<3"
// }
//
// function animBlinker() {
//     const animIcon = "_"; // █
//     if (Math.floor(websiteTitleTimer/42) % 2 === 1) {
//         if (websiteTitle.innerHTML.endsWith(animIcon)) {
//             websiteTitle.innerHTML = websiteTitle.innerHTML.substring(0, websiteTitle.innerHTML.length-1);
//         }
//     } else {
//         if (!websiteTitle.innerText.endsWith(animIcon)) {
//             websiteTitle.innerHTML += animIcon;
//         }
//     }
// }

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

const tagTemplate = `<div class="tag text-tag gray"><h5>REPLACE</h5></div>`;

const pico8TagTemplate = `<div class="tag image-tag"><img src="assets/pico8logo.png" alt="PICO-8"></div>`

for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    const tagsListData = project.getAttribute("data-tags");
    if (tagsListData !== null) {
        const tagsList = tagsListData.split(", ");
        const projectTextElement = project.querySelector(".project_text");
        if (projectTextElement !== null) {
            const tagsElement = projectTextElement.querySelector(".tags");
            if (tagsElement !== null) {
                for (let j = 0; j < tagsList.length; j++) {
                    if (tagsList[j] === "pico8") {
                        tagsElement.innerHTML += pico8TagTemplate;
                    } else {
                        tagsElement.innerHTML += tagTemplate.replace("REPLACE", tagsList[j]);
                    }
                }
            }
        }
    }
}