// Get the elements
const openButton = document.getElementById('open_modal_overlay');
const overlay = document.getElementById('modal_overlay');
const closeButton = document.querySelector('.close_button');

// Function to open the modal
function openModal() {
    overlay.style.display = 'flex'; // Change from 'none' to 'flex' (or 'block')
}

// Function to close the modal
function closeModal() {
    overlay.style.display = 'none';
}
openButton.addEventListener('click', openModal); // <--- Add this line
// 1. Hide the modal when the close button is clicked
closeButton.addEventListener('click', closeModal);

// 2. Hide the modal when the user clicks the dark background (overlay)
overlay.addEventListener('click', (e) => {
    // Check if the click occurred directly on the overlay, not on the content
    if (e.target === overlay) {
        closeModal();
    }
});
