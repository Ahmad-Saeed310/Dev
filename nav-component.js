// Navigation component that can be included on any page
function createNavigation(currentPage = 'home') {
    const navHTML = `
        <nav class="fixed bottom-[2vh] left-1/2 transform -translate-x-1/2 z-50 inline-flex font-DMSans gap-[1vh]  bg-stone-300  rounded-full">
            <a href="index.html" class="nav-link px-[3vh] py-[1vh] rounded-full transition-all duration-300 ${currentPage === 'home' ? 'text-white bg-black' : 'text-black bg-transparent'}" data-page="home">Home</a>
            <a href="work.html" class="nav-link px-[3vh] py-[1vh] rounded-full transition-all duration-300 ${currentPage === 'work' ? 'text-white bg-black' : 'text-black bg-transparent'}" data-page="work">Work</a>
            <a href="about.html" class="nav-link px-[3vh] py-[1vh] rounded-full transition-all duration-300 ${currentPage === 'about' ? 'text-white bg-black' : 'text-black bg-transparent'}" data-page="about">About</a>
        </nav>
    `;
    
    return navHTML;
}

// Function to inject navigation into a page
function injectNavigation(currentPage) {
    document.addEventListener('DOMContentLoaded', function() {
        const navContainer = document.getElementById('nav-container');
        if (navContainer) {
            navContainer.innerHTML = createNavigation(currentPage);
        }
        
        // Add click event listeners for navigation
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetPage = this.getAttribute('href');
                
                // Add smooth transition effect
                document.body.style.opacity = '0.7';
                document.body.style.transition = 'opacity 0.3s ease';
                
                setTimeout(() => {
                    window.location.href = targetPage;
                }, 300);
            });
        });
    });
}
