document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('joke-popup').style.display = 'none';
});

// Function to create confetti
function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        document.body.appendChild(confetti);

        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// Trigger confetti when joke popup appears
const showJokePopup = () => {
    document.getElementById('virus-popup').style.display = 'none';
    document.getElementById('joke-popup').style.display = 'flex';
    createConfetti();
};

document.getElementById('surprise-btn').addEventListener('click', function() {
    // Show virus popup
    document.getElementById('virus-popup').style.display = 'flex';

    // Add hacking animation
    document.body.classList.add('hacking');

    // Play sound
    const sound = document.getElementById('hacking-sound');
    sound.play();

    // Play background music
    const bgMusic = document.getElementById('background-music');
    bgMusic.play();

    let countdown = 10;
    const countdownElement = document.getElementById('countdown');
    const progressFill = document.querySelector('.progress-fill');

    const interval = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;
        progressFill.style.width = ((10 - countdown) / 10) * 100 + '%';

        if (countdown === 0) {
            clearInterval(interval);
            showJokePopup();
        }
    }, 1000);
});
