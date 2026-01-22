const links = document.querySelectorAll('.link');
const pages = document.querySelectorAll('.pg');
const btn = document.querySelector('.btn');
const nav = document.getElementById('nav');

function changePage(pg) {
    pages.forEach(p => p.classList.remove('active'));
    links.forEach(l => l.classList.remove('active'));
    
    document.getElementById(pg).classList.add('active');
    document.querySelector(`[data-page="${pg}"]`).classList.add('active');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

links.forEach(l => {
    l.addEventListener('click', (e) => {
        e.preventDefault();
        const pg = l.getAttribute('data-page');
        changePage(pg);
    });
});

btn.addEventListener('click', (e) => {
    e.preventDefault();
    changePage('events');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

const dotsContainer = document.getElementById('dots');
for (let i = 0; i < 30; i++) {
    const d = document.createElement('div');
    d.className = 'dot';
    d.style.left = Math.random() * 100 + '%';
    d.style.top = Math.random() * 100 + '%';
    d.style.animationDelay = Math.random() * 15 + 's';
    d.style.animationDuration = (Math.random() * 10 + 10) + 's';
    
    const colors = ['#6366f1', '#ec4899', '#f59e0b'];
    d.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    dotsContainer.appendChild(d);
}
