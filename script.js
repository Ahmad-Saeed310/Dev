let load =document.getElementById("load");
let hero = document.getElementById("hero");

let split = SplitText.create(".splitname")
gsap.from(split.chars, {
    duration: 0.2,
    opacity:0,
    delay: 2.5,
    y: "50%",
    stagger: 0.05,
    mask:"lines",
    ease:"power5"
})

gsap.from(".videohero",{
    scaleY: 0.5,
    duration: 0.2,
    delay:2.5,
})

gsap.from(".nav",{
     Y: 0.5,
    duration: 0.5,

    delay:2.2,
}

)
gsap.from(".split1", {
    scaleX: 0.5,
    duration: 0.5,
    opacity: 0,
    transformOrigin: "left center",
    ease: "power2.out"
});
gsap.from(".split2", {
    scaleX: 0.5,
    duration: 0.5,
    opacity: 0,
    transformOrigin: "center center",
    ease: "power2.out",
    delay: 0.2
});
gsap.from(".split3", {
    scaleX: 0.5,
    duration: 0.5,
    opacity: 0,
    transformOrigin: "right center",
    ease: "power2.out",
    delay: 0.4
});




window.onload = function() {
    let load = document.getElementById("load");
    let hero = document.getElementById("hero");

    // Initially position hero off-screen to the left
    if (hero) {
        hero.classList.add("hidden"); // Ensure hero is displayed
        hero.style.transform = "translateX(100%)";
        hero.style.transition = "transform 0.8s cubic-bezier(0.77, 0, 0.175, 1)";
        hero.style.opacity = "1"; // Make sure it's visible but off-screen
    }    setTimeout(() => {
        // Hide loading screen
        if (load) {
            load.style.opacity = "0";
            load.style.transition = "opacity 0.3s ease-out";
            setTimeout(() => {
                load.style.display = "none";
            }, 300);
        }
        
        // Slide hero section back in from the left
        if (hero) {
            hero.style.transform = "translateX(0)";
            hero.classList.remove("hidden")
        }
    }, 2000);
}

let button = document.getElementById("button1");
function clicked() {
    // button.innerHTML = "Hello";
    // console.log("Hello");
    button.style.left= "100%"

}

// here is the code for the nav
document.addEventListener('DOMContentLoaded', function() {
    let nav = document.querySelector("nav");
    let links = document.querySelectorAll("nav a"); 

    console.log("Nav found:", nav);
    console.log("Links found:", links.length);

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            console.log("Link clicked:", e.target.textContent);
            
            // Remove active class from all links
            links.forEach(l => {
                l.classList.remove("text-white", "bg-black");
                l.classList.add("text-black", "bg-transparent");
            });
            
            // Add active class to clicked link
            link.classList.remove("text-black", "bg-transparent");
            link.classList.add("text-white", "bg-black");
            console.log("Applied classes to:", link.textContent);
            
            let target = e.target.getAttribute("href");
            if (target && target !== "#") {
                document.querySelector(target).scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});

let imageHover = document.querySelector(".hoverImage")
let imageText = document.querySelector("h3")

if (imageHover) {
    imageHover.addEventListener("mouseenter", function() {
        console.log("Mouse entered");
    });
    
    imageHover.addEventListener("mouseleave", function() {
        console.log("Mouse left");
    });
} else {
    console.log("Element with class 'hoverImage' not found");
}

let nav = document.querySelector(".nav");

gsap.from(nav, {
  opacity:0,
    duration: 0.5,
    delay: 2.2,
    ease: "power2.out"

});

