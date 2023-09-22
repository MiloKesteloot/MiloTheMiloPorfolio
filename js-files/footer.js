const footerHTML =
    `<link rel="stylesheet" type="text/css" href="/spare-html/external-links.css">
<div class="footer-content">
    <div class="external-links">
        <a href="../index.html" class="icon-container"><i class="icon flipX fa-solid fa-arrow-right-from-bracket"></i></a>
        <a href="https://www.youtube.com/channel/UCG5HGbcNlJeL7xONOfNwiMA" target="_blank" class="icon-container"><i class="icon fa-brands fa-square-youtube"></i></a>
        <a href="https://github.com/cardy64" target="_blank" class="icon-container"><i class="icon fa-brands fa-square-github"></i></a>
        <a href="https://www.linkedin.com/in/milo-kesteloot-640a4b246/" target="_blank" class="icon-container"><i class="icon fa-brands fa-linkedin"></i></a>
        <a href="mailto:milo@teamten.com" class="icon-container"><i class="icon fa-solid fa-square-envelope"></i></a>
    </div>
</div>`

// <a href="https://www.instagram.com/milo.jar/" target="_blank" class="icon-container"><i class="icon fa-brands fa-square-instagram"></i></a>

const footers = document.querySelectorAll("script[src='/js-files/footer.js']");

let fontAwesomeScript = document.createElement("script");
fontAwesomeScript.src = "https://kit.fontawesome.com/829bd5b350.js";
fontAwesomeScript.crossOrigin = "anonymous";
document.head.appendChild(fontAwesomeScript);

for (let i = 0; i < footers.length; i++) {

    const footer = document.createElement("footer");

    footer.innerHTML = footerHTML;

    footers[i].after(footer);
}

// setTimeout(footer, 1000);
// footer();