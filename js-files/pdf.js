const pdfjsLib = window['pdfjs-dist/build/pdf'];

// Disable sidebar by default
const defaultPdfViewerOptions = {
    viewerContainer: document.getElementById('pdfViewer'),
    removePageBorders: true,
    sidebarViewOnLoad: 0, // 0 for no sidebar, 1 for thumbnails, 2 for outline
    scale: 'auto', // or a number for fixed zoom
    openActionDestination: 'fit', // fit the page width on load
};

// Load PDF document
pdfjsLib.getDocument('path/to/your/pdf/document.pdf').promise.then(pdfDoc => {
    // Initialize the viewer with the document
    const pdfViewer = new pdfjsViewer.PDFViewer(defaultPdfViewerOptions);
    pdfViewer.setDocument(pdfDoc);
});