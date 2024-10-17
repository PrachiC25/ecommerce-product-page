let cartCount = 0;
    let isDarkMode = false;
    let selectedColor = '#000000';
    let selectedSize = 'M';

function addToCart() {
            cartCount++;
            document.getElementById('cart-count').textContent = cartCount;
            alert(`Added to cart: Sonic Bliss Headphones\nColor: ${selectedColor}\nSize: ${selectedSize}`);
        }

        function toggleTheme() {
            isDarkMode = !isDarkMode;
            if (isDarkMode) {
                document.documentElement.style.setProperty('--primary-color', '#3498db');
                document.documentElement.style.setProperty('--secondary-color', '#2ecc71');
                document.documentElement.style.setProperty('--text-color', '#f4f4f4');
                document.documentElement.style.setProperty('--background-color', '#333');
                document.documentElement.style.setProperty('--card-background', '#444');
            } else {
                document.documentElement.style.setProperty('--primary-color', '#3498db');
                document.documentElement.style.setProperty('--secondary-color', '#2ecc71');
                document.documentElement.style.setProperty('--text-color', '#333');
                document.documentElement.style.setProperty('--background-color', '#f4f4f4');
                document.documentElement.style.setProperty('--card-background', '#fff');
            }
        }

        function selectColor(color) {
            selectedColor = color;
            document.querySelectorAll('.color-option').forEach(option => {
                option.classList.remove('selected');
            });
            event.target.classList.add('selected');
        }

        function selectSize(size) {
            selectedSize = size;
            document.querySelectorAll('.size-option').forEach(option => {
                option.classList.remove('selected');
            });
            event.target.classList.add('selected');
        }

        function changeMainImage(src) {
            document.getElementById('main-image').src = src;
        }




        

        