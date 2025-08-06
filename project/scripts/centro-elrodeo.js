document.addEventListener('DOMContentLoaded', () => {
    // Datos de las tarjetas de presentación
    const cardData = [
        {
            title: "Nuestra Historia",
            description: "Descubre los orígenes y la evolución de nuestro centro, un legado de tradición y cultura.",
            imageUrl: "https://placehold.co/400x200/87CEEB/FFFFFF?text=Historia", // Imagen de ejemplo
            linkUrl: "#historia", // Enlace a la sección de historia
            buttonText: "Saber Más"
        },
        {
            title: "Próximos Eventos",
            description: "Explora nuestras emocionantes actividades, festivales y celebraciones culturales a lo largo del año.",
            imageUrl: "https://placehold.co/400x200/90EE90/000000?text=Eventos", // Imagen de ejemplo
            linkUrl: "#eventos", // Enlace a la sección de eventos
            buttonText: "Ver Eventos"
        },
        {
            title: "Nuestra Galería",
            description: "Revive los momentos más memorables de nuestro centro a través de una colección de fotografías.",
            imageUrl: "https://placehold.co/400x200/DDA0DD/FFFFFF?text=Galería", // Imagen de ejemplo
            linkUrl: "#galeria", // Enlace a la sección de galería
            buttonText: "Ver Galería"
        }
    ];

    const cardsContainer = document.getElementById('cards-container');

    /**
     * Crea un elemento de tarjeta HTML dinámicamente.
     * @param {object} data - Un objeto con los datos de la tarjeta (title, description, imageUrl, linkUrl, buttonText).
     * @returns {HTMLElement} El elemento div de la tarjeta creada.
     */
    function createCard(data) {
        const card = document.createElement('div');
        card.classList.add('card'); // Añade la clase CSS 'card'

        // Crea la imagen de la tarjeta
        const img = document.createElement('img');
        img.src = data.imageUrl;
        img.alt = `Imagen de ${data.title}`;
        img.classList.add('card-image');
        // Manejo de errores para la imagen (opcional, pero buena práctica)
        img.onerror = function() {
            this.onerror = null; // Evita bucles infinitos
            this.src = 'https://placehold.co/400x200/cccccc/333333?text=Imagen+no+disponible';
        };
        card.appendChild(img);

        // Crea el contenedor del contenido de la tarjeta
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('card-content');

        // Título de la tarjeta
        const title = document.createElement('h3');
        title.textContent = data.title;
        contentDiv.appendChild(title);

        // Descripción de la tarjeta
        const description = document.createElement('p');
        description.textContent = data.description;
        contentDiv.appendChild(description);

        // Botón de la tarjeta
        const button = document.createElement('a');
        button.href = data.linkUrl;
        button.textContent = data.buttonText;
        button.classList.add('card-button');
        contentDiv.appendChild(button);

        card.appendChild(contentDiv); // Añade el contenido a la tarjeta

        return card;
    }

    // Itera sobre los datos y crea/añade cada tarjeta al contenedor
    cardData.forEach(data => {
        const cardElement = createCard(data);
        cardsContainer.appendChild(cardElement);
    });
});
