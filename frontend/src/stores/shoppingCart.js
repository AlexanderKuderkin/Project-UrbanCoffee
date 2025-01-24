// stores/shoppingCart.js
import { defineStore } from "pinia";

export const useShoppingCartStore = defineStore("shoppingCart", {
  state: () => ({
    cart: JSON.parse(localStorage.getItem("cart")) || [],
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
          imagePath: coffee.imagePath,
          quantity: 1,
        });
      }
  
      localStorage.setItem("cart", JSON.stringify(this.cart));
  
    },

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
