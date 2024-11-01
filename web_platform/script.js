// Define the initial last scroll position and the elements to be manipulated
let lastScrollTop = 0;
const header = document.querySelector('header');
const logoContainer = document.querySelector('.logo-container');

// Debounce function to limit the rate at which the scroll event handler is executed
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Function to handle scroll event
function handleScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        header.style.top = '-100px'; // Move header out of view
        logoContainer.style.top = '-160px'; // Move logo completely out of view
    } else {
        // Scrolling up
        header.style.top = '0'; // Bring header back into view
        logoContainer.style.top = '0'; // Bring logo back into view
    }
    lastScrollTop = Math.max(currentScroll, 0); // For Mobile or negative scrolling
}

// Add event listener for scroll with debounce to improve performance
window.addEventListener('scroll', debounce(handleScroll, 10));






