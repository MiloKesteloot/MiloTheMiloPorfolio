document.addEventListener('DOMContentLoaded', function() {
    if (window.location.href.includes('milofanclub') || window.location.href.includes("github")) {
        let html = document.getElementById("center-column").innerHTML;
        html = html.replaceAll(".html", "");
        document.getElementById("center-column").innerHTML = html;

        if (window.location.href.includes('/index.html')) {
            const newUrl = window.location.href.replace('/index.html', '');
            window.location.href = newUrl;
        }
    }
});