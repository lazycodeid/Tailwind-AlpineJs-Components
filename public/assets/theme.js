
// current theme
document.querySelector('html').setAttribute('data-theme', localStorage.getItem('theme-ilsya') ?? 'light');

// toggle theme
document.querySelectorAll('[data-toggle-theme]').forEach((el) => {
    el.addEventListener('click', () => {
        const theme = document.querySelector('html').getAttribute('data-theme');
        const newTheme = theme === 'light' ? 'dark' : 'light';
        document.querySelector('html').setAttribute('data-theme', newTheme);
        localStorage.setItem('theme-ilsya', newTheme);
    });
});