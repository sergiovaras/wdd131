document.addEventListener('DOMContentLoaded', () => {
    // Selectors for hamburger menu elements
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    // Selector matches your HTML: <ul class="navigation-links">
    const navigationLinks = document.querySelector('.navigation-links');

    // Array of temple data
    const temples = [
        {
            templeName: "Aba Nigeria Temple",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah Temple",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah Temple",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam Temple",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C. Temple",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú Temple",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico Temple",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Salt Lake Temple",
            location: "Salt Lake City, Utah, United States",
            dedicated: "1893, April, 6",
            area: 253000,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-city-temple-detail-2059349.jpg"
        },
        {
            templeName: "Rome Italy Temple",
            location: "Rome, Italy",
            dedicated: "2019, March, 10",
            area: 40000,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/400x250/rome-italy-temple-exterior-1.jpg"
        }
    ];

    // Function to create and display temple cards
    function displayTemples(filteredTemples) {
        const templesContainer = document.querySelector('.temples');
        templesContainer.innerHTML = ''; // Clear existing content

        filteredTemples.forEach(temple => {
            const figure = document.createElement('figure');
            const img = document.createElement('img');
            const figcaption = document.createElement('figcaption');

            img.src = temple.imageUrl;
            img.alt = temple.templeName;
            img.loading = 'lazy'; // Add lazy loading
            img.width = 400; // Set a default width, CSS will handle responsiveness
            img.height = 250; // Set a default height

            figcaption.textContent = temple.templeName + " - " + temple.location; // More detailed caption

            figure.appendChild(img);
            figure.appendChild(figcaption);
            templesContainer.appendChild(figure);
        });
    }

    // Initial display of all temples
    displayTemples(temples);


    // Hamburger menu functionality
    if (hamburgerBtn && navigationLinks) {
        hamburgerBtn.addEventListener('click', () => {
            // Toggle 'active' class on the navigation links list
            navigationLinks.classList.toggle('active');

            // Toggle hamburger icon (X vs bars)
            if (navigationLinks.classList.contains('active')) {
                hamburgerBtn.innerHTML = '&#x2715;'; // X icon
                // No rotation needed if using unicode char, but keeping for consistency if bars are used
                // hamburgerBtn.style.transform = 'rotate(90deg)';
            } else {
                hamburgerBtn.innerHTML = '&#9776;'; // Hamburger icon
                // hamburgerBtn.style.transform = 'rotate(0deg)';
            }
        });

        // Close menu when a navigation link is clicked (on mobile)
        navigationLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (event) => {
                // Prevent default link behavior if you're handling navigation via JS
                // event.preventDefault();

                if (window.innerWidth < 768) { // Only close if on mobile view
                    navigationLinks.classList.remove('active');
                    hamburgerBtn.innerHTML = '&#9776;'; // Reset icon
                    // hamburgerBtn.style.transform = 'rotate(0deg)';
                }

                // You can add logic here to filter temples based on the clicked link
                // For example:
                // const filter = link.textContent.toLowerCase();
                // let filteredTemples = [];
                // if (filter === 'old') {
                //     filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
                // } else if (filter === 'new') {
                //     filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() >= 2000);
                // } else { // 'Home', 'Large', 'Small' or other
                //     filteredTemples = temples; // Show all or implement specific filters
                // }
                // displayTemples(filteredTemples);
            });
        });

        // Close menu and reset icon if window is resized to desktop view
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) { // If desktop view
                navigationLinks.classList.remove('active');
                hamburgerBtn.innerHTML = '&#9776;'; // Reset icon
                // hamburgerBtn.style.transform = 'rotate(0deg)';
            }
        });
    } else {
        console.error("Error: Hamburger menu elements not found ('.hamburger-menu' or '.navigation-links'). Check your HTML.");
    }

    // Footer current year
    const currentYearSpan = document.getElementById("currentyear");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    } else {
        console.error("Error: Element with ID 'currentyear' not found. Check your HTML.");
    }

    // Footer last modified date
    const lastModifiedP = document.getElementById("lastModified");
    if (lastModifiedP) {
        lastModifiedP.textContent = `Last Modified: ${document.lastModified}`;
    } else {
        console.error("Error: Element with ID 'lastModified' not found. Check your HTML.");
    }
});