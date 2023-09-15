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
        console.log("yuh");
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

    console.log(string + add);

    websiteTitle.innerHTML = string + add;

    // div.elt.innerText = div.elt.innerText + string + add + `\n`;
}

rec();