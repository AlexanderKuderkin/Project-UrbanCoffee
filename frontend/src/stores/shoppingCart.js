// stores/shoppingCart.js
import { defineStore } from "pinia";
import axios from "axios";

export const useShoppingCartStore = defineStore("shoppingCart", {
  state: () => ({
    cart: [], // Warenkorb-Daten im Frontend
  }),
  actions: {
    async fetchCart() {
      try {
        const response = await axios.get("/cart"); // Backend-Daten abrufen
        this.cart = response.data; // Warenkorb im Store aktualisieren
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    },
    async addToCart(coffee) {
      try {
        const response = await axios.post("/cart", {
          productId: coffee.id,
          quantity: 1,
        });
        this.cart = response.data.cart; // Backend-Daten im Store speichern
        alert(`${coffee.name} was added to the cart.`);
      } catch (error) {
        console.error("Failed to add to cart:", error);
        alert("Failed to add item to cart.");
      }
    },
    async removeFromCart(productId) {
      try {
        const response = await axios.delete(`/cart/${productId}`);
        this.cart = response.data.cart; // Backend-Daten im Store aktualisieren
      } catch (error) {
        console.error("Error removing item from cart:", error);
      }
    },
    async clearCart() {
      try {
        const response = await axios.delete("/cart"); // Alle Artikel löschen
        this.cart = response.data.cart; // Leeren Warenkorb synchronisieren
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
