// Datos del menú
const menuData = {
    hamburguesas: [
        {
            id: 1,
            nombre: 'Ombliburger',
            descripcion: 'Pan brioche,180g de carne angus, doble queso cheddar, doble tocineta, doble pepinillo y salsa de la casa',
            precio: 32.000,
            imagen: 'images/ombliburguer.jpeg'
        },
        {
            id: 2,
            nombre: 'FX',
            descripcion: 'Pan pretzel, 180g de carne angus, queso philadelphia, tocineta caramelizada y aros de cebolla.',
            precio: 32.000  ,
            imagen: 'images/FX.jpeg'
        },
        {
            id: 3,
            nombre: 'Caramelo',
            descripcion: 'Pan pretzel, 180g de carne de cerdo, queso philadelphia, trozos de patacon salado, doble tocinata y salsa de caramelo picante. ',
            precio: 32.000,
            imagen: 'images/CARAMELO.jpeg'
        },
        {
            id: 4,
            nombre: 'Smash Oklahoma',
            descripcion: 'Pan pretzel, 180g de carne de cerdo, doble queso mozzarella y cebolla caramelizada en frutos rojos , doble tocinata y mayonesa. ',
            precio: 32.000,
            imagen: 'images/smash oklahoma.jpeg'
        },
        {
            id: 5,
            nombre: '370',
            descripcion: 'Pan brioche, doble carne angus tipo smash 200g, salsa smash, cebolla, queso cheddar, tocinata y pepinillos. ',
            precio: 32.000,
            imagen: 'images/370.jpeg'
        }
    ],
    bebidas: [
        {
            id: 101,
            nombre: 'Coca Cola',
            descripcion: 'Refresco gaseoso refrescante',
            precio: 2.99,
            imagen: 'https://images.unsplash.com/photo-1554866585-e2c4eb71f224?w=300&h=200&fit=crop'
        },
        {
            id: 102,
            nombre: 'Jugo Natural',
            descripcion: 'Jugo fresco de naranja natural',
            precio: 3.99,
            imagen: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=200&fit=crop'
        },
        {
            id: 103,
            nombre: 'Smoothie de Fresa',
            descripcion: 'Delicioso smoothie con fresas frescas',
            precio: 4.99,
            imagen: 'https://images.unsplash.com/photo-1590301157890-4810ed3562c8?w=300&h=200&fit=crop'
        }
    ]
};

// Elementos del DOM
const tabButtons = document.querySelectorAll('.tab-btn');

// Renderizar menú
function renderizarMenu() {
    renderizarProductos('hamburguesas');
    renderizarProductos('bebidas');
}

function renderizarProductos(tipo) {
    const gridId = tipo + '-grid';
    const grid = document.getElementById(gridId);
    grid.innerHTML = '';

    menuData[tipo].forEach(producto => {
        const card = crearCardProducto(producto, tipo);
        grid.appendChild(card);
    });
}

function crearCardProducto(producto, tipo) {
    const card = document.createElement('div');
    card.className = 'menu-item';
    card.innerHTML = `
        <div class="menu-item-image ${!producto.imagen ? 'no-image' : ''}">
            ${producto.imagen ? `<img src="${producto.imagen}" alt="${producto.nombre}" onerror="this.parentElement.textContent='🍔'">` : '🍔'}
        </div>
        <div class="menu-item-content">
            <div class="menu-item-name">${producto.nombre}</div>
            <div class="menu-item-description">${producto.descripcion}</div>
            <div class="menu-item-price">$${producto.precio.toFixed(3)}</div>
        </div>
    `;
    return card;
}


// Navegación entre tabs
tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.dataset.tab;

        // Desactivar todos los tabs
        tabButtons.forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.menu-section').forEach(s => s.classList.remove('active'));

        // Activar el tab seleccionado
        btn.classList.add('active');
        document.getElementById(tabName).classList.add('active');
    });
});


// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    renderizarMenu();
});
