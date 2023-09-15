const websiteTitle = document.getElementById("website-title");

let fullString = websiteTitle.innerHTML;

websiteTitle.innerText = "_";

let finalPrint = "";

let inA = false;

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
    }
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