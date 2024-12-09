document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach((carousel) => {
        const prevButton = carousel.querySelector('.carousel-button.prev');
        const nextButton = carousel.querySelector('.carousel-button.next');
        const imagesContainer = carousel.querySelector('.carousel-images');
        const images = imagesContainer.querySelectorAll('img');
        let currentIndex = 0;

        function showImage(index) {
            images.forEach((image, idx) => {
                image.classList.remove('active');
                if (idx === index) {
                    image.classList.add('active');
                }
            });
        }

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        });

        showImage(currentIndex);
    });
});
