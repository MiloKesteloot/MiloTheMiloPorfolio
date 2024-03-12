document.addEventListener('DOMContentLoaded', function() {
    // Check if the URL contains "milofanclub" and ends with ".html"
    if (isDomainHTML(["github", "milofanclub", "milo.games"])) {
        // Remove ".html" from the URL
        const newUrl = window.location.href.replace('.html', '');
        // Redirect to the new URL
        window.location.href = newUrl;
    }
});

// (window.location.href.includes('milofanclub') || window.location.href.includes("")) && window.location.href.includes('.html')

function isDomainHTML(domains) {
    for (let i in domains) {
        if (window.location.href.includes(i) && window.location.href.endsWith('.html')) {
            return true;
        }
    }
    return false;
}