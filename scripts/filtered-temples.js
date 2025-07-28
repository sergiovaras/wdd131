document.addEventListener('DOMContentLoaded', () => {
    
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const navigationLinks = document.querySelector('.navigation-links');
    const navFilterLinks = document.querySelectorAll('.navigation-links a'); 
    const templesContainer = document.querySelector('.temples'); 
    const currentFilterTitle = document.querySelector('.first'); 
  
    console.log('Elemento currentFilterTitle encontrado:', currentFilterTitle); 
    
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedP = document.getElementById("lastModified");


    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7", 
            area: 11500,
            imageUrl: "https://raw.githubusercontent.com/sergiovaras/wdd131/refs/heads/main/image/aba-nigeria-temple-lds-273999.webp"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://raw.githubusercontent.com/sergiovaras/wdd131/refs/heads/main/image/manti-temple-768192.webp"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://raw.githubusercontent.com/sergiovaras/wdd131/refs/heads/main/image/payson-utah-temple-exterior-1416671.webp"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://raw.githubusercontent.com/sergiovaras/wdd131/refs/heads/main/image/yigo_guam_temple_2.webp"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://raw.githubusercontent.com/sergiovaras/wdd131/refs/heads/main/image/washington_dc_temple-exterior-2.webp"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://raw.githubusercontent.com/sergiovaras/wdd131/refs/heads/main/image/lima-peru-temple-evening-1075606-wallpaper.webp"
        },
        {
            templeName: "Mexico City",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://raw.githubusercontent.com/sergiovaras/wdd131/refs/heads/main/image/mexico-city-temple-exterior-1518361-wallpaper.webp"
        },
        {
            templeName: "Salt Lake",
            location: "Salt Lake City, Utah, United States",
            dedicated: "1893, April, 6",
            area: 253000,
            imageUrl: "https://raw.githubusercontent.com/sergiovaras/wdd131/refs/heads/main/image/salt_lake_temple_lds.webp"
        },
        {
            templeName: "Rome",
            location: "Rome, Italy",
            dedicated: "2019, March, 10",
            area: 40000,
            imageUrl: "https://raw.githubusercontent.com/sergiovaras/wdd131/refs/heads/main/image/02_TempiodiRoma_Esterno_II.webp"
        },
        {
            templeName: "Buenos Aires",
            location: "Buenos Aires, Argentina",
            dedicated: "1986, January, 17",
            area: 17683,
            imageUrl: "https://raw.githubusercontent.com/sergiovaras/wdd131/refs/heads/main/image/TemploBsAs2012_1.webp"
        },
        {
            templeName: "Bogota",
            location: "Cundimarca, Colombia",
            dedicated: "1999, April, 24",
            area: 53500,
            imageUrl: "https://raw.githubusercontent.com/sergiovaras/wdd131/refs/heads/main/image/bogota_colombia_temple_lds.webp"
        },
        {
            templeName: "Cordoba",
            location: "Cordoba, Argentina",
            dedicated: "2015, May, 17",
            area: 34369,
            imageUrl: "https://raw.githubusercontent.com/sergiovaras/wdd131/refs/heads/main/image/Cordoba_Temple_exterior_night2015_resized.webp"
        }
    ];

    

    
    function getDedicatedYear(dedicatedDateString) {
        const dateParts = dedicatedDateString.split(', ');
        if (dateParts.length > 0) {
            return parseInt(dateParts[0]);
        }
        return 0; 
    }

    
    function createTempleCard(temple) {
        const figure = document.createElement('figure');
        figure.classList.add('temple-card');

        const img = document.createElement('img');
        const figcaption = document.createElement('figcaption');
        const locationP = document.createElement('p');
        const dedicatedP = document.createElement('p');
        const areaP = document.createElement('p');

        
        img.onerror = function() {
            this.onerror = null; 
            this.src = `https://placehold.co/400x250/333333/FFFFFF?text=Imagen+no+disponible`;
        };

        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = 'lazy'; 
        img.width = 400;
        img.height = 250; 

        figcaption.textContent = temple.templeName;
        locationP.innerHTML = `<span>Location:</span> ${temple.location}`;
        dedicatedP.innerHTML = `<span>Dedicated:</span> ${temple.dedicated}`;
        areaP.innerHTML = `<span>Area:</span> ${temple.area.toLocaleString()} pies²`; 

       
        
        figure.appendChild(figcaption);
        figure.appendChild(locationP);
        figure.appendChild(dedicatedP);
        figure.appendChild(areaP);
        figure.appendChild(img);

        return figure;
    }

    
    function displayTemples(filterType) {
       
        templesContainer.innerHTML = '';
        
        let filteredTemples = temples; 

        
        if (currentFilterTitle) { 
            switch (filterType) {
                case 'all':
                    currentFilterTitle.textContent = 'Home';
                    break;
                case 'old':
                    currentFilterTitle.textContent = 'Temples Old';
                    break;
                case 'new':
                    currentFilterTitle.textContent = 'Temples New';
                    break;
                case 'large':
                    currentFilterTitle.textContent = 'Temples Large';
                    break;
                case 'small':
                    currentFilterTitle.textContent = 'Temples Small';
                    break;
            }
        } else {
            console.error("Error: currentFilterTitle es null. No se puede actualizar el título.");
        }

        
        switch (filterType) {
            case 'old':
               
                filteredTemples = temples.filter(temple => getDedicatedYear(temple.dedicated) < 1900);
                break;
            case 'new':
                
                filteredTemples = temples.filter(temple => getDedicatedYear(temple.dedicated) > 2000);
                break;
            case 'large':
                
                filteredTemples = temples.filter(temple => temple.area > 90000);
                break;
            case 'small':
                
                filteredTemples = temples.filter(temple => temple.area < 10000);
                break;
            case 'all':
            default:
              
                break;
        }

        
        if (filteredTemples.length > 0) {
            filteredTemples.forEach(temple => {
                const card = createTempleCard(temple);
                templesContainer.appendChild(card);
            });
        } else {
           
            const noTemplesMessage = document.createElement('p');
            noTemplesMessage.classList.add('no-temples-message');
            noTemplesMessage.textContent = 'No se encontraron templos para esta categoría.';
            templesContainer.appendChild(noTemplesMessage);
        }

      
        navFilterLinks.forEach(link => {
            if (link.dataset.filter === filterType) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        });
    }


 
    if (hamburgerBtn && navigationLinks) {
        hamburgerBtn.addEventListener('click', () => {
            navigationLinks.classList.toggle('active'); 

            if (navigationLinks.classList.contains('active')) {
                hamburgerBtn.innerHTML = '&#x2715;'; 
            } else {
                hamburgerBtn.innerHTML = '&#9776;';
            }
        });

        
        navigationLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 768) { 
                    navigationLinks.classList.remove('active');
                    hamburgerBtn.innerHTML = '&#9776;'; 
                }
            });
        });

        
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) { 
                navigationLinks.classList.remove('active');
                hamburgerBtn.innerHTML = '&#9776;'; 
            }
        });
    } else {
        console.error("Error: Elementos del menú de hamburguesa no encontrados ('.hamburger-menu' o '.navigation-links'). Verifique su HTML.");
    }


    navFilterLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 
            const filter = event.target.dataset.filter; 
            displayTemples(filter); 
        });
    });

   
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    } else {
        console.error("Error: Elemento con ID 'currentyear' no encontrado. Verifique su HTML.");
    }

    if (lastModifiedP) {
        lastModifiedP.textContent = `Última Modificación: ${document.lastModified}`;
    } else {
        console.error("Error: Elemento con ID 'lastModified' no encontrado. Verifique su HTML.");
    }

    
    displayTemples('all');
});
