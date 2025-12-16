
const openButton = document.getElementById('open_modal_overlay');
const overlay = document.getElementById('modal_overlay');
const closeButton = document.querySelector('.close_button');


function openModal() {
    overlay.style.display = 'flex'; 
}
function closeModal() {
    overlay.style.display = 'none';
}
openButton.addEventListener('click', openModal); 

closeButton.addEventListener('click', closeModal);


overlay.addEventListener('click', (e) => {
   
    if (e.target === overlay) {
        closeModal();
    }
});
