
function openside(path) {
    window.open(path, '_blank');
  }
        const hours = document.querySelector(".hours");
        const h2 = document.querySelector(".hours h2");
  
        h2.addEventListener("click", () => {
          hours.classList.toggle("active");
        });
  
        function toggleContent() {
          var aboutus = document.getElementById("aboutus");
          var products = document.getElementById("products");
          var headerHeight = document.querySelector(".header").offsetHeight;
  
          if (aboutus.style.display === "none") {
            aboutus.style.display = "block";
            products.style.display = "block";
  
            // Smooth scrolling to reveal the hidden content
            window.scrollBy({
              top: headerHeight,
              behavior: "smooth",
            });
          } else {
            aboutus.style.display = "none";
            products.style.display = "none";
          }
        }
        const body = document.querySelector(".carusel-box");
  
        function changeBackgroundImage(image) {
          body.style.backgroundImage = `url(${image})`;
        }
        let activeCircle = null;
  
        document.addEventListener("DOMContentLoaded", function () {
          const circles = document.querySelectorAll(".circle");
          circles.forEach((circle) => {
            circle.addEventListener("click", () => {
              setActiveCircle(circle);
            });
          });
          setActiveCircle(document.getElementById(`circle1`));
        });
  
        function setActiveCircle(circle) {
          if (activeCircle) {
            activeCircle.classList.remove("active-circle");
          }
          circle.classList.add("active-circle");
          activeCircle = circle;
        }