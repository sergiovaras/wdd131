// Obtener el año actual
const yearSpan = document.getElementById("currentyear");
if (yearSpan) {
  yearSpan.textContent =new Date().getFullYear();
}

// Obtener la fecha de última modificación del documento
const lastModifiedParagraph = document.getElementById("lastModified");
if (lastModifiedParagraph) {
  lastModifiedParagraph.textContent = document.lastModified;
}