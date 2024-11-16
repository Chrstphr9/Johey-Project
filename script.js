document.addEventListener("DOMContentLoaded", function() {
    const clickMeBtn = document.getElementById('clickMeBtn');
    const confettiContainer = document.getElementById('confetti-container');

    clickMeBtn.addEventListener('click', function() {
        createConfetti();
    });

    function createConfetti() {
        for (let i = 0; i < 200; i++) {  // Increased to 200 pieces of confetti
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');

            // Randomize confetti size and color
            confetti.style.backgroundColor = getRandomColor();
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.animationDuration = `${Math.random() * 2 + 3}s`;
            confetti.style.width = `${Math.random() * 10 + 5}px`;
            confetti.style.height = `${Math.random() * 15 + 5}px`;

            confettiContainer.appendChild(confetti);

            // Remove confetti after animation ends
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }

    function getRandomColor() {
        const colors = ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff', '#ff9f40', '#ffd700', '#adff2f'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
});
