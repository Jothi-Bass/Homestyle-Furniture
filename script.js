let cart = [];
let total = 0;

function addToCart(name, price, qtyId) {
  let qty = document.getElementById(qtyId).value;
  let itemTotal = price * qty;

  cart.push({ name, qty, itemTotal });
  total += itemTotal;
  displayCart();
}

function displayCart() {
  let cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    let li = document.createElement("li");
    li.innerHTML = `${item.name} (x${item.qty}) - ₹${item.itemTotal}
      <button onclick="removeItem(${index})">❌</button>`;
    cartItems.appendChild(li);
  });

  document.getElementById("total").textContent = total;
}

function removeItem(index) {
  total -= cart[index].itemTotal;
  cart.splice(index, 1);
  displayCart();
}

function placeOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert("✅ Order placed successfully!\nTotal Amount: ₹" + total);
  cart = [];
  total = 0;
  displayCart();
}
