document.addEventListener('DOMContentLoaded', () => {
    const scriptTag = document.querySelector('script[type="module"][src="js-files/redirect.js"]');
    let redirectUrl = scriptTag.getAttribute('data-url');

    if (redirectUrl) {
        if (!redirectUrl.startsWith("http")) {
            redirectUrl = "https://www.milo.games/projects/" + redirectUrl + ".html";
        }
        window.location.href = redirectUrl;
    } else {
        document.body.innerText = "This page should be a redirect but it doesn't seem to be working, please let Milo know!";
    }
});

// document.body.innerHTML = `
// <meta http-equiv="refresh" content="0; URL=https://www.milo.games/projects/kerbal-controller" />
// This page should redirect to https://www.milofanclub.com/projects/kerbal-controller, if it doesn't, please just click the link and let me know. Thanks :)`;