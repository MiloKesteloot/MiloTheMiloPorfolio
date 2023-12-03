document.addEventListener('DOMContentLoaded', function() {
    // Check if the URL contains "milofanclub" and ends with ".html"
    if ((window.location.href.includes('milofanclub') || window.location.href.includes("github")) && window.location.href.includes('.html')) {
        // Remove ".html" from the URL
        const newUrl = window.location.href.replace('.html', '');
        // Redirect to the new URL
        window.location.href = newUrl;
    }
});