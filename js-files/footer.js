

function footer() {

    const p5iframe = document.querySelector("iframe[class='pico8-frame']");

    if (p5iframe === null) {
        console.log("aw 1");

        return;
    }

    const iframeContent = p5iframe.contentDocument || p5iframe.contentWindow.document;

    if (iframeContent === null) {
        console.log("aw 2");

        return;
    }

    const topBar = p5iframe.querySelector(".nav");

    if (topBar === null) {
        console.log("aw 3");

        return;
    }

    console.log("yay!");

}

function sayHi() {
    console.log("hi");
}

setTimeout(sayHi, 1000);
setTimeout(footer, 1000);
// footer();