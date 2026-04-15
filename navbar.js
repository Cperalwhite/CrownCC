// navbar.js
const navbarHTML = `
<nav class="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm px-6 py-4 flex justify-between items-center font-['Jost']">
    <a href="index.html" class="text-2xl font-bold tracking-tight uppercase">CROWN <span class="text-amber-600">CC</span></a>
    <div class="hidden md:flex space-x-8 font-medium">
        <a href="index.html" class="hover:text-amber-600 transition">Home</a>
        <a href="shop.html" class="hover:text-amber-600 transition">Collection</a>
        <a href="about.html" class="hover:text-amber-600 transition">Our Story</a>
        <a href="contact.html" class="hover:text-amber-600 transition">Contact</a>
    </div>
    <div class="flex items-center space-x-4">
        <a href="shop.html#cart" class="relative bg-gray-100 p-2 rounded-full">
            <span class="bg-amber-600 text-white text-[10px] rounded-full px-1.5 absolute -top-1 -right-1" id="global-cart-count">0</span>
            🛒
        <a href="#contact-section" class="hover:text-amber-500 transition">Contact</a>
        </a>
    </div>
</nav>
<div class="h-20"></div> `;

document.body.insertAdjacentHTML('afterbegin', navbarHTML);
