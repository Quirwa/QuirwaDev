
window.addEventListener("scroll", function () {
    var topContainer = document.getElementById("Top-Container");
    if (window.scrollY > 0) {
      topContainer.classList.add("Top-ContainerScroll");
    } else {
      topContainer.classList.remove("Top-ContainerScroll");
    }
  });
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    { threshold: 0.1 }
  );
  var containers = document.querySelectorAll(".showanimation");
  containers.forEach(function (container) {
    observer.observe(container);
  });
  let lastScrollTop = 0;
  const statusDiv = document.getElementById("Top-Container");
  function checkScrollDirection() {
    const scrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    if (lastScrollTop - scrollTop > 7.5) {
      statusDiv.classList.remove("hide");
    } else if (scrollTop > lastScrollTop) {
      statusDiv.classList.add("hide");
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }
  window.addEventListener("scroll", checkScrollDirection);
  let activeCircle = null;
  function showdiscription(number) {
    const everyProduct = document.querySelectorAll(".product-text");

    everyProduct.forEach((product) => {
      product.classList.remove("active");
    });

    const text = document.getElementById(`text${number}`);
    if (text === activeCircle) {
      activeCircle = null;
      return;
    }
    activeCircle = text;
    text.classList.toggle("active");
  }