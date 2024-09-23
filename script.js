document.addEventListener('DOMContentLoaded', function() {
    // Sidebar toggle
    const sidebar = document.getElementById('sidebar');
    const openSidebarBtn = document.getElementById('openSidebar');
    const closeSidebarBtn = document.getElementById('closeSidebar');

    openSidebarBtn.addEventListener('click', () => {
        sidebar.classList.add('open');
    });

    closeSidebarBtn.addEventListener('click', () => {
        sidebar.classList.remove('open');
    });

    // Tabs functionality
    const tabTriggers = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const tab = trigger.dataset.tab;

            tabTriggers.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            trigger.classList.add('active');
            document.querySelector(`.tab-content[data-tab="${tab}"]`).classList.add('active');
        });
    });

    // Animate progress bars
    const progressBars = document.querySelectorAll('.progress-bar > div');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });

    // Typewriter effect for the welcome message
    const welcomeMessage = document.querySelector('.welcome-message');
    const text = welcomeMessage.textContent;
    welcomeMessage.textContent = '';
    welcomeMessage.classList.add('typewriter');

    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            welcomeMessage.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();

    // Initialize Lucide icons
    lucide.createIcons();
});

document.addEventListener('DOMContentLoaded', function() {
    // Sidebar and other existing functionalities

    // Modal functionality
    const loginModal = document.getElementById('loginModal');
    const viewBtns = document.querySelectorAll('.view-btn');
    const closeModal = document.querySelector('.close-modal');

    viewBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });

    // Add submit handler for the login form (you can customize this)
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Logged in successfully!');
        loginModal.style.display = 'none';
    });

    // Rest of your JavaScript remains unchanged
});
