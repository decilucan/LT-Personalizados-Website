document.addEventListener('DOMContentLoaded', function() {
    const productImage = document.getElementById('product-image');
    const textPreview = document.getElementById('text-preview');
    const colorSelect = document.getElementById('color-select');
    const fontSelect = document.getElementById('font-select');
    const customText = document.getElementById('custom-text');
    const applyButton = document.getElementById('apply-button');

    applyButton.addEventListener('click', function() {
        textPreview.style.color = colorSelect.value;
        textPreview.style.fontFamily = fontSelect.value;
        textPreview.textContent = customText.value;
        
        // Posiciona o texto logo abaixo da imagem
        textPreview.style.position = 'absolute';
        textPreview.style.bottom = '-60px'; // Ajuste este valor conforme necessário
        textPreview.style.left = '50%';
        textPreview.style.transform = 'translateX(-50%)';
    });
});
