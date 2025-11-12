// function toggleDarkMode() {
//     const container = document.getElementById('simulateDarkMode')
//     const buttonDarkMode = document.getElementById('toggleDarkMode')
//     const dataTheme = container.getAttribute('data-theme')

//     if (dataTheme === 'dark') {
//         container.setAttribute('data-theme', 'light')
//     } else {
//         container.setAttribute('data-theme', 'dark')
//     }
// }

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const localStorageKey = 'themePreference';

// Function to apply the stored theme or default to light
function applyTheme() {
    const storedTheme = localStorage.getItem(localStorageKey);
    if (storedTheme === 'dark') {
        // body.classList.add('dark');
        body.setAttribute('data-theme', 'light')
        body.classList.remove('light');
    } else {
        body.classList.add('light');
        body.setAttribute('data-theme', 'dark')
        body.classList.remove('dark');
    }
}

// Function to toggle the theme
function toggleTheme() {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        body.classList.add('light');
        localStorage.setItem(localStorageKey, 'light');
    } else {
        body.classList.remove('light');
        body.classList.add('dark');
        localStorage.setItem(localStorageKey, 'dark');
    }
}

// Event listener for the toggle button
themeToggle.addEventListener('click', toggleTheme);

// Apply theme on page load
applyTheme();