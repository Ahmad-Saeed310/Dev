

let imageContainers = document.querySelectorAll(".zoom"); // Get all image containers
let imageTexts = document.querySelectorAll(".hoverText");
let black = document.querySelectorAll(".black");

imageContainers.forEach((container, index) => {
  const imageHover = container.querySelector(".hoverImage"); // Get the image inside container
  const imageText = imageTexts[index]; // Get the corresponding text
  const blacks = black[index];

  container.addEventListener("mouseenter", () => {
    console.log(`Mouse entered container ${index}`);
    
    // GSAP animations for hover enter
    gsap.to(imageText, {
      opacity: 1,
      duration: .1,
      ease: "expo.out"
    });
    
    gsap.to(imageHover, {
      scale: 1.2,
      color: "rgba(255, 255, 255, 1)",
      duration: 0.7,
      ease: "power4.inOut"
    });

    gsap.to(blacks, {
      opacity: 0.2,
      duration: 0.5,
      ease: "power4.inOut"
    });

  });

  container.addEventListener("mouseleave", () => {
    console.log(`Mouse left container ${index}`);
    
    // GSAP animations for hover leave
    gsap.to(imageText, {
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
    
    gsap.to(imageHover, {
      scale: 1,
      backgroundSize: "100%",
      duration: 1,
      ease: "power2.inOut"
    });
    
    gsap.to(blacks,
      {
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      }
    )
   
  });
});

let initialScale = document.querySelectorAll(".enlarge");

initialScale.forEach(element => {
  // Get the current position of the element
  const rect = element.getBoundingClientRect();
  const elementCenterX = rect.left + rect.width / 2;
  const elementCenterY = rect.top + rect.height / 2;
  
  // Calculate screen center
  const screenCenterX = window.innerWidth / 2;
  const screenCenterY = window.innerHeight / 2;
  
  // Convert 3vh to pixels for margin
  const marginVH = window.innerHeight * 0.01; // 3vh in pixels
  
  // Calculate available screen space (minus margins)
  const availableWidth = window.innerWidth - (marginVH * 2);
  const availableHeight = window.innerHeight - (marginVH * 2);
  
  // Calculate scale to fit within available space
  const scaleToFitWidth = availableWidth / rect.width;
  const scaleToFitHeight = availableHeight / rect.height;
  const scaleToFillScreen = Math.min(scaleToFitWidth, scaleToFitHeight);
  
  // Calculate the distance from element center to screen center
  const deltaX = screenCenterX - elementCenterX;
  const deltaY = screenCenterY - elementCenterY;
  
  gsap.fromTo(element, {
    scale: scaleToFillScreen,
    x: deltaX,
    y: deltaY,
  }, {
    scale: 1,
    x: 0,
    y: 0,
    duration: 0.8,
    ease: "power4.out"
  });
});


// here is the image animation 
const imageanimation = document.getElementById("image1");

let index =1;

const totalimages = 8;

setInterval(()=>{
  let imagearr = [
    "https://images.unsplash.com/photo-1639395241103-9c855f93a90c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDE2fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1636378721469-ef6a89079bd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1749254853436-4be77358f454?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDMwfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1700334429792-9914405370c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1647724065041-628d5b61c145?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ1fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1637940669007-be26aad81ec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1677793545973-8a45a86909eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8"
  ]

  imageanimation.style.backgroundImage = `url(${imagearr[index-1]})`;
imageanimation.style.transition = "background-image 0.9s cubic-bezier(0.19, 1, 0.22, 1)";
imageanimation.style.backgroundPosition = "center"  

index++;
if(index > totalimages) index = 1;

},1600

)