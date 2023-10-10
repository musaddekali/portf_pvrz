// simple function to use for callback in the intersection observer
const changeNav = (entries) => {
  entries.forEach((entry) => {
    // verify the element is intersecting
    if (entry.isIntersecting && entry.intersectionRatio >= .55) {
      // remove old active class
      document
        .querySelector(".nav_link_active")
        .classList.remove("nav_link_active");
      const id = entry.target.getAttribute("id");
      // find matching link & add appropriate class
      document
        .querySelector(`[href="#${id}"]`)
        .classList.add("nav_link_active");
    }
  });
};

// init the observer
const options = {
  threshold: 0.9,
};

const observer = new IntersectionObserver(changeNav, options);

// target the elements to be observed
const sections = document.querySelectorAll("section");
sections.forEach((section) => {
  observer.observe(section);
});
