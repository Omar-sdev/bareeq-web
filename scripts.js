function toggleSidebar(event) {
    event.stopPropagation();
    const sidebar = document.getElementById('sidebar');
    const burger = document.getElementById('burger');
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        burger.style.opacity = '1'; // Fade in burger icon
    } else {
        sidebar.classList.add('open');
        burger.style.opacity = '0'; // Fade out burger icon
    }
}

function closeSidebar(event) {
    event.stopPropagation();
    const sidebar = document.getElementById('sidebar');
    const burger = document.getElementById('burger');
    if (sidebar.classList.contains('open') && !event.target.closest('#sidebar') && !event.target.closest('.burger')) {
        sidebar.classList.remove('open');
        burger.style.opacity = '1'; // Fade in burger icon
    }
}

function closeSidebarButton(event) {
    event.stopPropagation();
    const sidebar = document.getElementById('sidebar');
    const burger = document.getElementById('burger');
    sidebar.classList.remove('open');
    burger.style.opacity = '1'; // Fade in burger icon
}

function scrollToSection(event, sectionId) {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    const sidebar = document.getElementById('sidebar');
    const burger = document.getElementById('burger');
    sidebar.classList.remove('open');
    burger.style.opacity = '1'; // Fade in burger icon
}