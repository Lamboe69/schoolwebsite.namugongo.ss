// Carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel img');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 6000); // Change every 3 seconds
if (slides.length) showSlide(currentSlide);

// Tabs
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-buttons button');
    tabs.forEach(tab => {
        tab.style.display = (tab.id === tabId) ? 'block' : 'none';
    });
    buttons.forEach(btn => {
        btn.classList.toggle('active', btn.onclick.toString().includes(tabId));
    });
}

// Accordion
const accordionBtns = document.querySelectorAll('.accordion-btn');
accordionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// Dynamic Table
const subjects = [
    { subject: 'Mathematics', teacher: 'Mr. Okello' },
    { subject: 'Science', teacher: 'Ms. Nalubega' }
];
const tableBody = document.querySelector('#subjectTable tbody');
if (tableBody) {
    subjects.forEach(sub => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${sub.subject}</td><td>${sub.teacher}</td>`;
        tableBody.appendChild(row);
    });
}

// News Form
const newsForm = document.getElementById('newsForm');
if (newsForm) {
    newsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        if (title && description) {
            alert('News/Event submitted successfully!');
            newsForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Lightbox
function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if (name && email && message) {
            alert('Message sent successfully!');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}