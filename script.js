// Hero CTA Animation
const heroCTA = document.getElementById('heroCTA');
const heroInfo = document.getElementById('heroInfo');
const closeInfo = document.querySelector('.close-info');

heroCTA.addEventListener('click', () => {
    heroInfo.classList.add('active');
});

closeInfo.addEventListener('click', () => {
    heroInfo.classList.remove('active');
});

// Product Cards Hover Effects & Modal
const productCards = document.querySelectorAll('.product-card');
const modal = document.getElementById('productModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close');

const productData = {
    serum: {
        title: 'Hydrating Face Serum',
        price: '$29 USD / PKR 9,500',
        ingredients: 'Hyaluronic Acid, Aloe Vera, Vitamin C',
        testimonial: '"My skin drinks this up! Visible results in just 3 days." - Aisha K.',
        description: 'Deeply hydrates and plumps skin with organic hyaluronic acid and aloe vera.'
    },
    scrub: {
        title: 'Exfoliating Sugar Scrub',
        price: '$22 USD / PKR 7,200',
        ingredients: 'Organic Sugar, Coconut Oil, Lavender',
        testimonial: '"Baby soft skin after first use! Smells divine." - Omar S.',
        description: 'Gently exfoliates while nourishing with natural sugar crystals.'
    },
    butter: {
        title: 'Nourishing Body Butter',
        price: '$35 USD / PKR 11,500',
        ingredients: 'Shea Butter, Mango Butter, Jojoba Oil',
        testimonial: '"My dry skin is gone! So rich and moisturizing." - Fatima R.',
        description: 'Ultra-rich butter that melts into skin for 24hr hydration.'
    },
    cream: {
        title: 'Soothing Eye Cream',
        price: '$18 USD / PKR 5,800',
        ingredients: 'Cucumber Extract, Chamomile, Vitamin E',
        testimonial: '"Dark circles fading fast! Perfect texture." - Hassan M.',
        description: 'Reduces puffiness and brightens under-eye area naturally.'
    }
};

productCards.forEach(card => {
    card.addEventListener('click', () => {
        const productKey = card.dataset.product;
        const product = productData[productKey];
        
        modalBody.innerHTML = `
            <div style="padding: 2rem;">
                <h2 style="color: #8BC34A; margin-bottom: 1rem;">${product.title}</h2>
                <div style="font-size: 1.3rem; font-weight: 600; color: #8BC34A; margin-bottom: 1.5rem; background: linear-gradient(135deg, #F5F5DC, #F7DC6F); padding: 10px 25px; border-radius: 25px; display: inline-block;">
                    ${product.price}
                </div>
                <p style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 2rem; color: #555;">${product.description}</p>
                <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 15px; margin-bottom: 1.5rem;">
                    <h4 style="color: #333; margin-bottom: 0.5rem;">🌿 Key Ingredients</h4>
                    <p style="color: #666; font-weight: 500;">${product.ingredients}</p>
                </div>
                <div style="background: linear-gradient(135deg, #8BC34A, #7CB342); color: white; padding: 1.5rem; border-radius: 15px;">
                    <p style="font-style: italic; margin-bottom: 0.5rem; font-size: 1.1rem;">${product.testimonial}</p>
                </div>
                <div style="margin-top: 2rem; text-align: center;">
                    <button onclick="addToCart('${productKey}')" style="background: linear-gradient(135deg, #F7DC6F, #F1C40F); color: #333; border: none; padding: 15px 40px; font-size: 1.1rem; font-weight: 600; border-radius: 50px; cursor: pointer; box-shadow: 0 10px 30px rgba(247, 220, 111, 0.4);">Add to Cart</button>
                </div>
            </div>
        `;
        modal.style.display = 'block';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Reviews Slider
const reviews = document.querySelectorAll('.review');
let currentReview = 0;

function nextReview() {
    reviews[currentReview].classList.remove('active');
    currentReview = (currentReview + 1) % reviews.length;
    reviews[currentReview].classList.add('active');
}

setInterval(nextReview, 5000);

// Smooth Scrolling & Navbar Shrink
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroCTA = document.querySelector('.cta-button');
    if (scrolled > 100) {
        heroCTA.style.position = 'fixed';
        heroCTA.style.top = '20px';
        heroCTA.style.right = '20px';
        heroCTA.style.zIndex = '1000';
    } else {
        heroCTA.style.position = 'static';
        heroCTA.style.top = 'auto';
        heroCTA.style.right = 'auto';
        heroCTA.style.zIndex = 'auto';
    }
});

// Cart Functionality (Demo)
function addToCart(productKey) {
    alert(`✅ ${productData[productKey].title} added to cart! Don't forget GLOW15 for 15% off!`);
}