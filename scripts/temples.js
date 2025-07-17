

document.addEventListener('DOMContentLoaded', () => {

    
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const navigationLinks = document.querySelector('.navigation-links');

    if (hamburgerBtn && navigationLinks) { 
        hamburgerBtn.addEventListener('click', () => {
            navigationLinks.classList.toggle('active'); 
            
            
            if (navigationLinks.classList.contains('active')) {
                hamburgerBtn.innerHTML = '&#x2715;';
                hamburgerBtn.style.transform = 'rotate(90deg)';
            } else {
                hamburgerBtn.innerHTML = '&#9776;'; 
                hamburgerBtn.style.transform = 'rotate(0deg)';
            }
        });

        
        navigationLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 768) { 
                    navigationLinks.classList.remove('active');
                    hamburgerBtn.innerHTML = '&#9776;';
                    hamburgerBtn.style.transform = 'rotate(0deg)';
                }
            });
        });

        
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) { 
                navigationLinks.classList.remove('active');
                hamburgerBtn.innerHTML = '&#9776;';
                hamburgerBtn.style.transform = 'rotate(0deg)';
            }
        });
    } else {
        console.error("Error: Hamburger menu items not found ('.hamburger-menu' or '.navigation-links')'). Check your HTML.");
    }
    

    const currentYearSpan = document.getElementById("currentyear");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    } else {
        console.error("Error: Element with ID 'currentyear' not found. Check your HTML.");
    }

    const lastModifiedP = document.getElementById("lastModified");
    if (lastModifiedP) {
        lastModifiedP.textContent = `Last Modified: ${document.lastModified}`;
    } else {
        console.error("Error: Element with ID 'lastModified' not found. Check your HTML.");
    }
   
});