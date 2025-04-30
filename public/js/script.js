// Menu Data
const menuData = {
    pizzas: [
        {
            id: 1,
            name: "Margherita",
            description: "Molho de tomate, mussarela fresca, manjericão e azeite de oliva extra virgem.",
            price: 45.90,
            image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            id: 2,
            name: "Calabresa",
            description: "Molho de tomate, mussarela, linguiça calabresa artesanal e cebola caramelizada.",
            price: 49.90,
            image: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80"
        },
        {
            id: 3,
            name: "Quatro Queijos",
            description: "Molho de tomate, mussarela, provolone, gorgonzola e parmesão ralado.",
            price: 55.90,
            image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
        },
        {
            id: 4,
            name: "Portuguesa",
            description: "Molho de tomate, mussarela, presunto, ovos, cebola, azeitonas e pimentão.",
            price: 52.90,
            image: "https://www.ogastronomo.com.br/upload/389528334-curiosidades-sobre-a-pizza-portuguesa.jpg"
        },
        {
            id: 5,
            name: "Vegetariana",
            description: "Molho de tomate, mussarela, berinjela, abobrinha, pimentão e tomate seco.",
            price: 54.90,
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1581&q=80"
        },
        {
            id: 6,
            name: "Frango com Catupiry",
            description: "Molho de tomate, mussarela, frango desfiado e catupiry cremoso.",
            price: 56.90,
            image: "https://images.unsplash.com/photo-1613564834361-9436948817d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1643&q=80"
        }
    ],
    bebidas: [
        {
            id: 7,
            name: "Refrigerante Lata",
            description: "Coca-Cola, Guaraná, Fanta ou Sprite.",
            price: 6.50,
            image: "https://imagens.jotaja.com/produtos/4024/ED0669F27800F945B0D7F9D7C0F8BD64647886209232C96FA0E64BA2D88E6A40.jpeg?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 8,
            name: "Suco Natural",
            description: "Laranja, Maracujá, Abacaxi ou Limão.",
            price: 8.90,
            image: "https://uploads.metropoles.com/wp-content/uploads/2018/08/17190216/180817FC-sucos-016.jpg?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 9,
            name: "Água Mineral",
            description: "Com ou sem gás, 500ml.",
            price: 4.50,
            image: "https://definicion.de/wp-content/uploads/2015/08/agua.jpg?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 10,
            name: "Chá Gelado",
            description: "Chá natural de pêssego ou limão servido gelado.",
            price: 7.90,
            image: "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2023/10/30/759785217-cha-gelado-simples.jpg?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 11,
            name: "Milkshake",
            description: "Chocolate, baunilha ou morango com sorvete cremoso.",
            price: 14.90,
            image: "https://renata.com.br/images/receitas/156/renata-imagem-receitas-milkshake-de-cookies-share.jpg?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 12,
            name: "Água de Coco",
            description: "Natural, 300ml.",
            price: 7.50,
            image: "https://altoastral.joaobidu.com.br/wp-content/uploads/2023/09/beneficios-agua-coco.jpg?auto=format&fit=crop&w=800&q=80"
        }
    ],
    sobremesas: [
        {
            id: 13,
            name: "Pizza de Chocolate",
            description: "Massa crocante com chocolate derretido e morangos frescos.",
            price: 32.90,
            image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
        },
        {
            id: 14,
            name: "Tiramisu",
            description: "Clássica sobremesa italiana com café, mascarpone e cacau.",
            price: 18.90,
            image: "https://mangiachetefabene.wordpress.com/wp-content/uploads/2010/07/jul10051.jpg&auto=format&fit=crop&w=1587&q=80"
        },
        {
            id: 15,
            name: "Cannoli Siciliano",
            description: "Tubos crocantes recheados com ricota doce e gotas de chocolate.",
            price: 15.90,
            image: "https://cannolidocalimano.wordpress.com/wp-content/uploads/2019/05/cannolo-casa-del-cannolo-640x426.jpg&auto=format&fit=crop&w=1470&q=80"
        },
        {
            id: 16,
            name: "Panna Cotta",
            description: "Sobremesa cremosa com calda de frutas vermelhas.",
            price: 16.90,
            image: "https://cdn.jwplayer.com/v2/media/XUqZDSbG/thumbnails/HNylojyg.jpg&auto=format&fit=crop&w=1470&q=80"
        },
        {
            id: 17,
            name: "Sorvete Artesanal",
            description: "Casquinha com duas bolas de sorvete (sabores diversos).",
            price: 12.90,
            image: "https://cannolidocalimano.wordpress.com/wp-content/uploads/2019/05/cannoli-palermo-da-josecc80.jpg&auto=format&fit=crop&w=1470&q=80"
        },
        {
            id: 18,
            name: "Torta de Limão",
            description: "Massa crocante, creme de limão e merengue.",
            price: 14.90,
            image: "https://cravoepanela.wordpress.com/wp-content/uploads/2012/07/p1150714_ed21.jpg?w=640&auto=format&fit=crop&w=1470&q=80"
        }
    ]
};

// Shopping Cart
let cart = [];

// DOM Elements
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuTabs = document.querySelectorAll('.menu-tab');
const menuCategories = document.querySelectorAll('.menu-category');
const cartButton = document.getElementById('cart-button');
const cartModal = document.getElementById('cart-modal');
const closeCartButton = document.getElementById('close-cart');
const continueShoppingButton = document.getElementById('continue-shopping');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartTotal = document.getElementById('cart-total');

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    // Load pizzas by default
    loadMenuItems('pizzas');

    // Mobile menu toggle
    mobileMenuButton.addEventListener('click', toggleMobileMenu);

    // Menu tabs
    menuTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const category = this.getAttribute('data-category');
            changeMenuTab(category);
            loadMenuItems(category);
        });
    });

    // Cart functionality
    cartButton.addEventListener('click', openCart);
    closeCartButton.addEventListener('click', closeCart);
    continueShoppingButton.addEventListener('click', closeCart);

    // Close modal when clicking outside
    cartModal.addEventListener('click', function (e) {
        if (e.target === cartModal) {
            closeCart();
        }
    });
});

// Functions
function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
}

function changeMenuTab(category) {
    menuTabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-category') === category) {
            tab.classList.add('active');
        }
    });

    menuCategories.forEach(cat => {
        cat.classList.add('hidden');
        if (cat.id === `${category}-menu`) {
            cat.classList.remove('hidden');
        }
    });
}

function loadMenuItems(category) {
    const container = document.getElementById(`${category}-menu`);
    container.innerHTML = '';

    menuData[category].forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'pizza-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-xl font-bold text-gray-800 mb-2">${item.name}</h3>
                <p class="text-gray-600 mb-4">${item.description}</p>
                <div class="flex justify-between items-center">
                    <span class="text-lg font-bold text-red-500">R$ ${item.price.toFixed(2)}</span>
                    <button class="add-to-cart bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition duration-300" data-id="${item.id}">
                        <i class="fas fa-plus mr-1"></i> Adicionar
                    </button>
                </div>
            </div>
        `;
        container.appendChild(itemElement);
    });

    // Add event listeners to the new buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const itemId = parseInt(this.getAttribute('data-id'));
            addToCart(itemId);
        });
    });
}

function addToCart(itemId) {
    // Find the item in all categories
    let item = null;
    for (const category in menuData) {
        const foundItem = menuData[category].find(i => i.id === itemId);
        if (foundItem) {
            item = foundItem;
            break;
        }
    }

    if (!item) return;

    // Check if item is already in cart
    const existingItem = cart.find(i => i.id === item.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...item,
            quantity: 1
        });
    }

    updateCart();

    // Show a quick notification
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg';
    notification.textContent = `${item.name} adicionado ao carrinho!`;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('opacity-0', 'transition', 'duration-500');
        setTimeout(() => notification.remove(), 500);
    }, 2000);
}

function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart modal if open
    if (!cartModal.classList.contains('hidden')) {
        renderCartItems();
    }
}

function renderCartItems() {
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-gray-500 text-center py-8">Seu carrinho está vazio</p>';
        cartSubtotal.textContent = 'R$ 0,00';
        cartTotal.textContent = 'R$ 8,00';
        return;
    }

    cartItemsContainer.innerHTML = '';

    let subtotal = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item flex justify-between items-center py-4 border-b';
        itemElement.innerHTML = `
            <div class="flex items-center">
                <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg mr-4">
                <div>
                    <h4 class="font-medium text-gray-800">${item.name}</h4>
                    <p class="text-sm text-gray-500">R$ ${item.price.toFixed(2)}</p>
                </div>
            </div>
            <div class="flex items-center">
                <button class="decrease-quantity text-gray-500 hover:text-red-500 px-2" data-id="${item.id}">
                    <i class="fas fa-minus"></i>
                </button>
                <span class="mx-2">${item.quantity}</span>
                <button class="increase-quantity text-gray-500 hover:text-red-500 px-2" data-id="${item.id}">
                    <i class="fas fa-plus"></i>
                </button>
                <span class="font-medium ml-4 w-16 text-right">R$ ${itemTotal.toFixed(2)}</span>
                <button class="remove-item text-gray-400 hover:text-red-500 ml-4" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    // Add event listeners to quantity buttons
    document.querySelectorAll('.increase-quantity').forEach(button => {
        button.addEventListener('click', function () {
            const itemId = parseInt(this.getAttribute('data-id'));
            const item = cart.find(i => i.id === itemId);
            if (item) {
                item.quantity += 1;
                updateCart();
            }
        });
    });

    document.querySelectorAll('.decrease-quantity').forEach(button => {
        button.addEventListener('click', function () {
            const itemId = parseInt(this.getAttribute('data-id'));
            const item = cart.find(i => i.id === itemId);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                updateCart();
            }
        });
    });

    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function () {
            const itemId = parseInt(this.getAttribute('data-id'));
            cart = cart.filter(i => i.id !== itemId);
            updateCart();
        });
    });

    // Update totals
    const deliveryFee = 8.00;
    const total = subtotal + deliveryFee;

    cartSubtotal.textContent = `R$ ${subtotal.toFixed(2)}`;
    cartTotal.textContent = `R$ ${total.toFixed(2)}`;
}

function openCart() {
    renderCartItems();
    cartModal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
}

function closeCart() {
    cartModal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}