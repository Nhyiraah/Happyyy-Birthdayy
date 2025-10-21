// 🌟 Firefly canvas setup
const canvas = document.getElementById('fireflies');
const ctx = canvas.getContext('2d');

// Set initial canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Resize canvas on window change
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Create fireflies
let fireflies = [];
for (let i = 0; i < 50; i++) {
    fireflies.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        glow: Math.random() * 0.5 + 0.5
    });
}

// Animate fireflies
function drawFireflies() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fireflies.forEach(f => {
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 140, 0, ${f.glow})`;
        ctx.fill();

        f.x += f.dx;
        f.y += f.dy;

        // Bounce off edges
        if (f.x < 0 || f.x > canvas.width) f.dx *= -1;
        if (f.y < 0 || f.y > canvas.height) f.dy *= -1;
    });
    requestAnimationFrame(drawFireflies);
}

drawFireflies();

// 🎉 Page transitions
function showMessage() {
    document.getElementById('welcome').classList.add('hidden');
    const message = document.getElementById('message');
    message.classList.remove('hidden');
    message.scrollTop = 0;
}

function showScrapbook() {
    document.getElementById('message').classList.add('hidden');
    const scrapbook = document.getElementById('scrapbook');
    scrapbook.classList.remove('hidden');
    scrapbook.scrollTop = 0;
}

// 🔙 Optional: Back button logic
function goBackToMessage() {
    document.getElementById('scrapbook').classList.add('hidden');
    const message = document.getElementById('message');
    message.classList.remove('hidden');
    message.scrollTop = 0;
}