function downloadPdf() {
  var element = document.body;

  html2pdf(element, {
    margin: 8,
    filename: "resume.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 6 },
    jsPDF: { unit: "mm", format: "a4", orientation: "potrait" },
  });
}
