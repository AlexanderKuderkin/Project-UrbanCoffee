// stores/shoppingCart.js
import { defineStore } from "pinia";

export const useShoppingCartStore = defineStore("shoppingCart", {
  state: () => ({
    cart: JSON.parse(localStorage.getItem("cart")) || [], // Lade Daten aus localStorage
}),
actions: {
    async addToCart(coffee) {
      const existingItem = this.cart.find(item => item.productId === coffee.id);
  
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.cart.push({
          productId: coffee.id,
          name: coffee.name,
          price: coffee.price,
          quantity: 1,
        });
      }
  
      // Speichere den aktuellen Warenkorb in localStorage
      localStorage.setItem("cart", JSON.stringify(this.cart));
  
      alert(`${coffee.name} was added to the cart.`);
    },
    /*
    async removeFromCart(productId) {
      try {
        const response = await axios.delete(`/cart/${productId}`);
        this.cart = response.data.cart; // Backend-Daten im Store aktualisieren
      } catch (error) {
        console.error("Error removing item from cart:", error);
      }
    },
    */
    async clearCart() {
        try {
            this.cart = [];
            localStorage.removeItem("cart");
            } catch (error) {
            console.error("Error clearing cart:", error);
          }
    },
  },
  getters: {
    totalItems() {
      return this.cart.reduce((total, item) => total + item.quantity, 0);
    },
    totalPrice() {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
});
