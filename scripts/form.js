const products = [
        {
            id: "fc-1888",
            name: "flux capacitor",
            averagerating: 4.5
        },
        {
            id: "fc-2050",
            name: "power laces",
            averagerating: 4.7
        },
        {
            id: "fs-1987",
            name: "time circuits",
            averagerating: 3.5
        },
        {
            id: "ac-2000",
            name: "low voltage reactor",
            averagerating: 3.9
        },
        {
            id: "jj-1969",
            name: "warp equalizer",
            averagerating: 5.0
        }
    ];

document.addEventListener('DOMContentLoaded', () => {
            
    const selectElement = document.getElementById('productName');
            
        products.forEach(product => {
            const option = document.createElement('option');
                
             option.value = product.id;
                
            option.textContent = product.name;
            selectElement.appendChild(option);
            
        });
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