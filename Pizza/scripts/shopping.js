
const products = [
    { name: "Margherita", price: 8.99, image: "images/pizzas/pizza1.png" },
    { name: "Pepperoni", price: 9.99, image: "images/pizzas/pizza2.png" },
  ];

  let cart = [];

  function addToCart(name, price, image) {
    let itemInCart = cart.find((item) => item.name === name);
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      cart.push({ name, price, quantity: 1, image });
    }
    displayCart();
  }

  function removeFromCart(name) {
    cart = cart.filter((item) => item.name !== name);
    displayCart();
  }

  function changeQuantity(index, select) {
    cart[index].quantity = parseInt(select.value);
    displayCart();
  }

  function displayCart() {
    const cartItems = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");
    let total = 0;

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.className = "cart-item";

      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.name;
      li.appendChild(img);

      const details = document.createElement("div");
      details.className = "cart-item-details";

      const name = document.createElement("p");
      name.textContent = item.name;
      details.appendChild(name);

      const price = document.createElement("p");
      price.textContent = `$${item.price.toFixed(2)}`;
      details.appendChild(price);

      const quantitySelect = document.createElement("select");
      quantitySelect.onchange = () => changeQuantity(index, quantitySelect);
      for (let i = 1; i <= 10; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        if (i === item.quantity) {
          option.selected = true;
        }
        quantitySelect.appendChild(option);
      }
      details.appendChild(quantitySelect);

      li.appendChild(details);

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.onclick = () => removeFromCart(item.name);
      li.appendChild(removeButton);

      cartItems.appendChild(li);
      total += item.price * item.quantity;
    });

    totalElement.textContent = total.toFixed(2);
  }
  async function checkout() {
    const container = document.querySelector(".container");
    container.style.opacity = ".3";
    document.getElementById("checkoutSection").style.display = "block";

    document.getElementById("overlay").style.display = "block";
    const cartItems = document.getElementById("checkout-items");
    const totalElement = document.getElementById("checkout-total");
    let total = 0;

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.className = "cart-item";

      const details = document.createElement("div");
      details.className = "cart-item-details";

      const name = document.createElement("p");
      name.textContent = `${item.name} (x${item.quantity})`;
      details.appendChild(name);

      const price = document.createElement("p");
      price.textContent = `$${item.price.toFixed(2)}`;
      details.appendChild(price);

      li.appendChild(details);

      cartItems.appendChild(li);
      total += item.price * item.quantity;
    });

    totalElement.textContent = total.toFixed(2);
  }
  async function checkouts() {
    const emailMessage = document.getElementById("emailMessage").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const cartDetails = cart.map((item) => ({
      name: item.name,
      quantity: item.quantity,
      price: item.price,
      image: item.image,
    }));
    const subject = "Order Confirmation";
    const to = "kaivitzithum@gmail.com";
    const total = parseFloat(document.getElementById("total").textContent);

    try {
      const response = await fetch("http://localhost:3000/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to,
          subject,
          cart: cartDetails,
          total,
          emailMessage,
          phoneNumber,
          name,
          email,
        }),
      });

      if (response.ok) {
        alert("Email sent successfully");
      } else {
        const errorText = await response.text();
        alert(`Failed to send email: ${errorText}`);
      }
    } catch (error) {
      console.error("Dose not work in quirwa preview");
      alert("Dose not work in quirwa preview");
    }
  }
  function closeCheckout() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("checkoutSection").style.display = "none";

    const container = document.querySelector(".container");
    container.style.opacity = "1";
  }