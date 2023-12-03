const websiteTitle = document.getElementById("website-title");
const spacerWebsiteTitle = document.getElementById("spacer-website-title");
const spacerWebsiteTitleExtra = document.getElementById("spacer-website-title-extra");
const terminalHTML = document.getElementById("terminal");
const terminalDummyHTML = document.getElementById("terminal-dummy");

const projectHTMLs = [];

let lineCount = 6;

// terminalDummyHTML.style.width = terminalHTML.style.width;

let fullString = websiteTitle.innerHTML;

websiteTitle.innerText = "_";

let finalPrint = "";

let inA = false;

function everyFrame() {
    terminalHTML.focus();
    setTimeout(everyFrame, 1);
}

everyFrame();

function rec() {

    let addChar = fullString.substring(0, 1);

    if (addChar === "<") {
        let index = fullString.indexOf(">");
        let add = 2;
        if (fullString.substring(1, 2) === "/") {
            inA = false;
            add = 1;
        } else {
            inA = true;
        }
        finalPrint += fullString.substring(0, index + add);
        sub(index + add);
    } else if (addChar === "&") {
        let index = fullString.indexOf(";");
        finalPrint += fullString.substring(0, index + 1);
        sub(index + 1);
    } else {
        finalPrint += addChar;
        sub(1);
    }

    printnl(finalPrint);

    if (fullString.length > 0) {
        setTimeout(rec, 30 + Math.floor(Math.random() * 20));
        // console.log("still doin it");
    } else {
        setTimeout(newRecFunction, 30 + Math.floor(Math.random() * 20));
        // console.log("other!");
    }
}

function newRecFunction() {
    terminalBlink();
    setTimeout(newRecFunction, 1);
}

document.onkeydown = function (e) {
    e = e || window.event;
    let key = e.key;
    if (key !== "Enter") {
        return;
    }

    let message = terminalHTML.value;



    const formattedMessage = message.replaceAll(" ", "").toLowerCase();

    if (formattedMessage.startsWith("//")) {
        addToConsole(message, '<a class="comment-style">', '</a>');
    } else if (formattedMessage === "themedark") {
        addToConsole("Theme set to dark.");
        document.body.classList.remove("light-mode");
    } else if (formattedMessage === "themelight") {
        addToConsole("Theme set to light.");
        document.body.classList.add("light-mode");
    } else if (formattedMessage === "theme") {
        addToConsole("Themes: light, dark.");
    } else if (formattedMessage === "help") {
        addToConsole("Terminal commands:");
        addToConsole("theme (light/dark)");
        addToConsole("help");
    } else if (message.startsWith("tag ")) {
        const tag = message.substring(4,message.length);
        addToConsole(tag);
    } else {
        addToConsole("Unknown command.");
        addToConsole("Type help for more options.");
    }

    // addToConsole(message);

    terminalHTML.value = "";
};

function removeSpacesAround(message) {
    while (message.startsWith(" ")) {
        message = message.substring(1, message.length);
    }

    while (message.endsWith(" ")) {
        message = message.substring(0, message.length - 1);
    }
}

function addToConsole(line, front, back) {
    front = front ?? "";
    back = back ?? "";
    lineCount += 1;
    spacerWebsiteTitle.innerHTML += "<br>" + lineCount;
    spacerWebsiteTitleExtra.innerText = lineCount + 1;
    websiteTitle.innerHTML += " " + front + line.replaceAll(" ", "&nbsp;") + back;
    console.log(line);
}

function terminalBlink() {

    const currentDate = new Date();
    const timestamp = currentDate.getTime();

    let maybeUnderscore = "_";

    const blinker = 1000;

    if (timestamp % blinker < blinker/2) {
        maybeUnderscore = "";
    }

    let innerText = terminalHTML.value;

    innerText = innerText.substring(0, terminalHTML.selectionStart);

    terminalDummyHTML.innerHTML = '<i class="trans">' + innerText + "</i>" + maybeUnderscore;
}

function sub(n) {
    fullString = fullString.substring(n);
}

function printnl(string) {

    let add = "";

    if (inA) {
        add = "</a>";
    }

    websiteTitle.innerHTML = string + add;

    // div.elt.innerText = div.elt.innerText + string + add + `\n`;
}

rec();

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

const projects = document.getElementsByClassName("project");

const tagTemplate = `<div class="tag text-tag gray"><h5>REPLACE</h5></div>`;

const pico8TagTemplate = `<div class="tag image-tag"><img src="../assets/pico8logo.png" alt="PICO-8"></div>`

for (let i = 0; i < projects.length; i++) {

    const project = projects[i];

    const projectHTML = {HTML:project, tags:[]};

    const tagsElement = getTagsElement(project);

    const tagsList = tagsElement.innerHTML.split(", ");

    tagsElement.innerHTML = "";

    for (let j = 0; j < tagsList.length; j++) {
        const tag = tagsList[j];
        projectHTML.tags.push(tag);
        if (tag === "Pico8") {
            tagsElement.innerHTML += pico8TagTemplate;
        } else {
            tagsElement.innerHTML += tagTemplate.replace("REPLACE", tag);
        }
    }

    projectHTMLs.push(projectHTML);
}

function getTagsElement(project) {

    if (project === null) {
        return null;
    }

    const projectTextElement = project.querySelector(".project_text");

    if (projectTextElement === null) {
        return null;
    }

    const tagsElement = projectTextElement.querySelector(".tags");

    if (tagsElement === null) {
        return null;
    }

    return tagsElement;
}