// // Select the target section
// const section = document.querySelector("#about");

// // Function to check if section is near the bottom of the viewport
// const isSectionNearViewportBottom = () => {
//   const rect = section.getBoundingClientRect();
//   const viewportHeight = window.innerHeight;

//   return rect.top <= viewportHeight - 60;
// };

// // Event handler for scroll and load events
// const handleScrollAndLoad = () => {
//   if (isSectionNearViewportBottom()) {
//     alert("The section is near the bottom of the viewport!");
//     // Remove event listeners once the section is detected
//     window.removeEventListener("scroll", handleScrollAndLoad);
//     window.removeEventListener("load", handleScrollAndLoad);
//   }
// };

// // Attach event listeners for scroll and load events
// window.addEventListener("scroll", handleScrollAndLoad);
// window.addEventListener("load", handleScrollAndLoad);

/****************************lazyload************************* */
// Function to check if section is near the bottom of the viewport
// const isSectionNearViewportBottom = section => {
//   const rect = section.getBoundingClientRect();
//   const viewportHeight = window.innerHeight;

//   return rect.top <= viewportHeight;
// };
// Lazy load JavaScript file
// const lazyLoadJS = src => {
//   const script = document.createElement("script");
//   script.src = src;
//   script.defer = true;
//   document.head.appendChild(script);
// };

// Lazy load CSS file
// const lazyLoadCSS = href => {
//   const link = document.createElement("link");
//   link.rel = "stylesheet";
//   link.href = href;
//   link.onload = () => {
//     link.onload = null;
//     link.removeAttribute("onload");
//   };
//   document.head.appendChild(link);
// };
// Check if each section is near the bottom of the viewport and lazy load corresponding files
// Function to check if section is near the bottom of the viewport
const isSectionNearViewportBottom = section => {
  const rect = section.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  return rect.top <= viewportHeight + 220;
};

// Lazy load JavaScript file
const lazyLoadJS = src => {
  const script = document.createElement("script");
  script.src = src;
  script.defer = true;
  document.head.appendChild(script);
};

// Lazy load CSS file
const lazyLoadCSS = href => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  link.onload = () => {
    link.onload = null;
    link.removeAttribute("onload");
  };
  document.head.appendChild(link);
};

// Check if each section is near the bottom of the viewport and lazy load corresponding files
const handleScroll = () => {
  const personality = document.getElementById("personality");
  const about = document.getElementById("about");
  const skills = document.getElementById("skills");
  const portfolio = document.getElementById("portfolio");
  const qualifications = document.getElementById("qualifications");
  const services = document.getElementById("services");
  const testimonial = document.getElementById("testimonial");
  const blog = document.getElementById("blog");
  if (
    personality &&
    isSectionNearViewportBottom(personality) &&
    !personality.classList.contains("lazy-loaded")
  ) {
    lazyLoadCSS("assets/css/personalities.css");
    personality.classList.add("lazy-loaded");
  }
  if (
    about &&
    isSectionNearViewportBottom(about) &&
    !about.classList.contains("lazy-loaded")
  ) {
    lazyLoadCSS("assets/css/about.css");
    about.classList.add("lazy-loaded");
  }

  if (
    skills &&
    isSectionNearViewportBottom(skills) &&
    !skills.classList.contains("lazy-loaded")
  ) {
    lazyLoadCSS("assets/css/skills.css");
    lazyLoadJS("assets/js/skills.js");
    skills.classList.add("lazy-loaded");
  }
  if (
    portfolio &&
    isSectionNearViewportBottom(portfolio) &&
    !portfolio.classList.contains("lazy-loaded")
  ) {
    lazyLoadCSS("assets/css/portfolio.css");
    // lazyLoadJS("assets/js/portfolio.js");
    lazyLoadCSS("assets/css/responsive.css");
    portfolio.classList.add("lazy-loaded");
  }
  if (
    qualifications &&
    isSectionNearViewportBottom(qualifications) &&
    !qualifications.classList.contains("lazy-loaded")
  ) {
    lazyLoadCSS("assets/css/qualifications.css");
    qualifications.classList.add("lazy-loaded");
  }
  if (
    services &&
    isSectionNearViewportBottom(services) &&
    !services.classList.contains("lazy-loaded")
  ) {
    lazyLoadCSS("assets/css/services.css");
    lazyLoadCSS("assets/css/responsive.css");
    services.classList.add("lazy-loaded");
  }
  if (
    testimonial &&
    isSectionNearViewportBottom(testimonial) &&
    !testimonial.classList.contains("lazy-loaded")
  ) {
    lazyLoadCSS("assets/css/testimonials.css");
    lazyLoadJS("assets/js/testimonials.js");
    testimonial.classList.add("lazy-loaded");
  }
  if (
    blog &&
    isSectionNearViewportBottom(blog) &&
    !blog.classList.contains("lazy-loaded")
  ) {
    lazyLoadCSS("assets/css/blog.css");
    lazyLoadJS("assets/js/blog.js");

    blog.classList.add("lazy-loaded");
  }
};

// Attach event listener for scroll event
window.addEventListener("scroll", handleScroll);
