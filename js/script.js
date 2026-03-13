// Script para el menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navDrawer = document.getElementById('navDrawer');
    const drawerOverlay = document.getElementById('drawerOverlay');

    if (hamburger && navDrawer) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('open');
            navDrawer.classList.toggle('open');
            if (drawerOverlay) {
                drawerOverlay.classList.toggle('open');
            }
        });

        // Cerrar el drawer al hacer clic en un enlace
        navDrawer.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                hamburger.classList.remove('open');
                navDrawer.classList.remove('open');
                if (drawerOverlay) {
                    drawerOverlay.classList.remove('open');
                }
            }
        });
    }

    // Cerrar el drawer al hacer clic en el overlay (si existe)
    if (drawerOverlay) {
        drawerOverlay.addEventListener('click', function() {
            hamburger.classList.remove('open');
            navDrawer.classList.remove('open');
            drawerOverlay.classList.remove('open');
        });
    }
});