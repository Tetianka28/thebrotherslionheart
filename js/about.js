let flkty = new Flickity('.main-gallery', {
  // option
  cellAlign: 'left',
  contain: true,
  freeScroll: true
})


document.addEventListener('DOMContentLoaded', function() {
    // Ініціалізація Flickity, якщо вона ще не була виконана
    const galleryElement = document.querySelector('.gallery');
    
    // Перевіряємо, чи Flickity вже ініціалізовано
    if (!galleryElement.flickity) {
        new Flickity(galleryElement, {
            // Використовуйте ті ж опції, що й в data-flickity-options, якщо не впевнені
            wrapAround: true, 
            prevNextButtons: true, 
            groupCells: 3, 
            cellAlign: 'center',
            watchCSS: true 
        });
    }

    const flkty = galleryElement.flickity;
    const cells = flkty.cells;

    function updateCenterCell() {
        // Видаляємо клас is-selected з усіх елементів
        cells.forEach(cell => {
            cell.element.classList.remove('is-selected');
        });

        // Знаходимо індекс центральної (видимої) комірки
        // Flickity.selectedIndex вказує на початок поточної групи (якщо groupCells: 3)
        let centerIndex = flkty.selectedIndex;

        // Оскільки ми гортаємо по 3, центральна фотографія знаходиться на індексі + 1
        let centralCellIndex = centerIndex + 1;
        
        // Перевіряємо, чи такий елемент існує
        if (centralCellIndex < cells.length) {
            cells[centralCellIndex].element.classList.add('is-selected');
        }
    }

    // Запускаємо функцію після ініціалізації та при кожній зміні слайда
    flkty.on('select', updateCenterCell);
    
    // Запускаємо один раз при завантаженні для встановлення початкового стану
    updateCenterCell();
});