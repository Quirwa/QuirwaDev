document.querySelector(".lines").addEventListener("click", function () {
    this.classList.toggle("active");
    const tab = document.querySelector(".tab");
    tab.classList.toggle("visible");
  });
  function Top() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  
  function ScrollDown(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }

  window.addEventListener("scroll", function () {
    var topContainer = document.getElementById("Top-Container");
    if (window.scrollY > 0) {
      topContainer.classList.add("Top-ContainerScroll");
    } else {
      topContainer.classList.remove("Top-ContainerScroll");
    }
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

  function openNewTab(url) {
    window.open(url, "_blank");
  }