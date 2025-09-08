// Get the modal
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImg");
var span = document.getElementsByClassName("close")[0];

// Add click event to all images in the grid
document.querySelectorAll('.momenteintimp-grid img').forEach(img => {
  img.onclick = function() {
    modal.classList.add('show');
    modalImg.src = this.src;
  }
});

// Close the modal when clicking the × button
span.onclick = function() {
  modal.classList.remove('show');
}

// Close the modal when clicking outside the image
modal.onclick = function(event) {
  if (event.target === modal || event.target === modalImg) {
    modal.classList.remove('show');
  }
}

// Close modal with escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && modal.classList.contains('show')) {
    modal.classList.remove('show');
  }
});
