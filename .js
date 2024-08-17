document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#222';
        } else {
            navbar.style.backgroundColor = '#333';
        }
     });

        const links = document.querySelectorAll('nav ul li a');
    
        links.forEach(link => {
            link.addEventListener('mouseover', () => {
                link.style.backgroundColor = '#555';
            });
            link.addEventListener('mouseout', () => {
                link.style.backgroundColor="";
            });
        });
    });
                