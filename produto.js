let produto = document.querySelectorAll('.produto')
produto.forEach((image) => {
    image.addEventListener('click', function() {
        image.classList.toggle('selected-product');
    })
})