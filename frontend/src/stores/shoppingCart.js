// stores/shoppingCart.js
import { defineStore } from "pinia";

export const useShoppingCartStore = defineStore("shoppingCart", {
  state: () => ({
    cart: [],
  }),
  actions: {
    async addToCart(coffee) {
      try {
        this.cart.push = ({productId: coffee.id, name:coffee.id, quantity: 1,})

        alert(`${coffee.name} was added to the cart.`);
      } catch (error) {
        console.error("Failed to add to cart:", error);
        alert("Failed to add item to cart.");
      }
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
