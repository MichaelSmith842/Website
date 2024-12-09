// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  // Placeholder for future interactive features
console.log("JavaScript loaded successfully!");

// Timeline Data
const timelineData = [
    {
      image: "images/image1.jpg",
      title: "Event 1",
      text: "Description for Event 1."
    },
    {
      image: "images/image2.jpg",
      title: "Event 2",
      text: "Description for Event 2."
    },
    {
      image: "images/image3.jpg",
      title: "Event 3",
      text: "Description for Event 3."
    },
    {
      image: "images/image4.jpg",
      title: "Event 4",
      text: "Description for Event 4."
    },
    {
      image: "images/image5.jpg",
      title: "Event 5",
      text: "Description for Event 5."
    }
  ];
  
  // DOM Elements
  const slider = document.getElementById("timeline-slider");
  const image = document.getElementById("timeline-image");
  const title = document.getElementById("timeline-title");
  const text = document.getElementById("timeline-text");
  
  // Update Timeline Content
  function updateTimeline(value) {
    const event = timelineData[value];
    image.src = event.image;
    title.textContent = event.title;
    text.textContent = event.text;
  }
  
  // Initial Content Load
  updateTimeline(slider.value);
  
  // Event Listener
  slider.addEventListener("input", () => {
    updateTimeline(slider.value);
  });
  