function createCrystal() {
    const crystal = document.createElement('div');
    crystal.classList.add('crystal');

    // Set random position and animation
    crystal.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(crystal);

    // Animate the crystal
    setTimeout(() => {
        crystal.style.top = '100vh';
        crystal.style.transition = 'top 3s linear';
    }, 10);

    // Remove the crystal after animation
    crystal.addEventListener('transitionend', () => {
        crystal.remove();
    });
}

// Create crystals at intervals
setInterval(createCrystal, 500);
