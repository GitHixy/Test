document.addEventListener('DOMContentLoaded', function () {
    const pixelCanvas = document.getElementById('pixelCanvas');
    const resetButton = document.getElementById('resetButton');
    const saveImageButton = document.getElementById('saveImageButton');
    const savedImageContainer = document.getElementById('savedImageContainer');

    
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.addEventListener('mouseover', colorPixel);
            pixelCanvas.appendChild(pixel);
        }
    }

    function colorPixel(event) {
        event.target.style.backgroundColor = '#4CAF50'; 
    }

    resetButton.addEventListener('click', function () {
        const pixels = document.querySelectorAll('.pixel');
        pixels.forEach(pixel => {
            pixel.style.backgroundColor = '#fff';
        });
    });

    saveImageButton.addEventListener('click', function () {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 20 * 20;
        canvas.height = 20 * 20;

        const pixels = document.querySelectorAll('.pixel');
        let i = 0;

        for (let y = 0; y < 20; y++) {
            for (let x = 0; x < 20; x++) {
                const color = window.getComputedStyle(pixels[i]).backgroundColor;
                ctx.fillStyle = color;
                ctx.fillRect(x * 20, y * 20, 20, 20);
                i++;
            }
        }

        const image = new Image();
        image.src = canvas.toDataURL('image/png');

        savedImageContainer.innerHTML = '';
        savedImageContainer.appendChild(image);
    });
});