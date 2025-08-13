// Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const menu = document.getElementById('menu');
        
        mobileMenuBtn.addEventListener('click', () => {
            menu.classList.toggle('active');
            mobileMenuBtn.innerHTML = menu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Smooth Scroll for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                if (menu.classList.contains('active')) {
                    menu.classList.remove('active');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Sticky Header on Scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 0);
        });
        
        // Product Filter
        const filterBtns = document.querySelectorAll('.filter-btn');
        const productCards = document.querySelectorAll('.product-card');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                
                productCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
        
        // Form Submission
        const form = document.getElementById('formContato');
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Here you would normally send the form data to a server
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            form.reset();
        });
        
        // Add to Cart Functionality
        const addToCartBtns = document.querySelectorAll('.product-btn');
        const cartCount = document.querySelector('.cart-count');
        let count = 0;
        
        addToCartBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                count++;
                cartCount.textContent = count;
                
                // Animation for cart icon
                cartCount.parentElement.classList.add('animate');
                setTimeout(() => {
                    cartCount.parentElement.classList.remove('animate');
                }, 300);
            });
        });