
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const product = entry.target;
            if (product.classList.contains("left-product")) {
              product.classList.add("visible-left");
            } else if (product.classList.contains("right-product")) {
              product.classList.add("visible-right");
            } else {
              product.classList.add("visible-middle");
            }
            observer.unobserve(product);
          }
        });
      });

      document.querySelectorAll(".product").forEach((product) => {
        observer.observe(product);
      });