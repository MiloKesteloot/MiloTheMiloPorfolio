function footer() {

    const p5iframe = document.querySelector("iframe[class='pico8-frame']");

    if (p5iframe === null) {
        return;
    }

    const iframeContent = p5iframe.contentDocument || p5iframe.contentWindow.document;

    if (iframeContent === null) {
        return;
    }

    const topBar = p5iframe.querySelector(".nav");

    if (topBar === null) {
        return;
    }
}

// setTimeout(footer, 1000);
// footer();