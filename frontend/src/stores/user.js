import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),

  actions: {
    async fetchUser() {
        try {
          const response = await axios.get("/sessionUser");
          this.user = response.data;
        } catch (error) {
          this.user = null;
        }
      },      
      
    async signIn(email, password) {
      let loginInformation = { emailAddress: email, password: password };
      axios
        .post("/login", loginInformation)
        .then((response) => {
          this.user = response.data;
          router.push("/ManageCoffee");
        })
        .catch((error) => {
          console.error("Login failed:", error);
        });
    },
    async signUp(fullName, email, password, addressCountry, addressCity, addressPostalCode, addressStreet) {
      let registerInformation = {
          fullName: fullName,
          emailAddress: email,
          password: password,
          addressCountry: addressCountry,
          addressCity: addressCity,
          addressPostalCode: addressPostalCode,
          addressStreet: addressStreet,
      };
    
      try {
          const response = await axios.post("/register", registerInformation);
          this.user = response.data;
  
          if (this.user.isSuperAdmin) {
              router.push({ name: "ManageCoffee" });
          } else {
              router.push({ name: "Coffee" });
          }
      } catch (error) {
          console.error("Registration failed:", error);
          throw error;
      }
  },
  
  showToast(message, type = "success") {
      this.toastMessage = message;
      this.toastType = type;
      setTimeout(() => {
          this.toastMessage = null;
          this.toastType = "";
      }, 3000);
  },  
      
      
      async logout() {
        const response = await axios.get("/logout")
        this.user = null;
        router.push("/");
    }
      
  },
});
