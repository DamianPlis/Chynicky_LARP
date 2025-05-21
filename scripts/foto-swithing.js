// 1. Get all the small gallery images
const images = document.querySelectorAll(".per-foto-obrazek");

// 2. Get the lightbox elements
const lightbox = document.getElementById("zvetsene");
const lightboxImg = document.getElementById("zvetsene-img");
const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// 3. Track which image is currently being shown
let currentIndex = 1;

// 4. This function shows the image in the lightbox
function showImage(index) {
  // Set the big image's src to match the clicked thumbnail
  lightboxImg.src = images[index].src;

  // Update the index to the current one
  currentIndex = index;

  // Make the lightbox visible
  lightbox.classList.remove("hidden");
}

// 5. When someone clicks a thumbnail, show that image in the lightbox
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    showImage(index); // open the lightbox with the correct image
  });
});

// 6. Close the lightbox when the ❌ button is clicked
closeBtn.addEventListener("click", () => {
  lightbox.classList.add("hidden"); // add "hidden" class to hide it
});

// 7. Also close the lightbox if user clicks the background (but NOT the image)
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.classList.add("hidden");
  }
});

// 8. Show the previous image when ← arrow is clicked
prevBtn.addEventListener("click", () => {
  // Go back one image, or wrap around to the last one
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex); // show the new image
});

// 9. Show the next image when → arrow is clicked
nextBtn.addEventListener("click", () => {
  // Go forward one image, or wrap around to the first one
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex); // show the new image
});