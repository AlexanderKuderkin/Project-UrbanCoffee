import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),

  actions: {
    async fetchUser() {
        console.log("fetchUser wird aufgerufen");
        try {
          const response = await axios.get("/sessionUser");
          console.log("Antwort vom Server:", response.data);
          this.user = response.data; // Speichere die Benutzerdaten
        } catch (error) {
          console.error("Fehler bei fetchUser:", error);
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
    async signUp(fullName, email, password, addressStreet, addressCity, addressPostalCode, addressCountry) {
        let registerInformation = {
          fullName: fullName,
          emailAddress: email,
          password: password,
          addressStreet: addressStreet,
          addressCity: addressCity,
          addressPostalCode: addressPostalCode,
          addressCountry: addressCountry,
        };
      
        console.log("Sending registration data:", registerInformation);
      
        axios
          .post("/register", registerInformation)
          .then((response) => {
            console.log("Registered user:", response.data);
            this.user = response.data;
      
            if (this.user.isSuperAdmin) {
              router.push({ name: "ManageCoffee" });
            } else {
              router.push({ name: "Coffee" });
            }
          })
          .catch((error) => {
            console.error("Registration failed:", error);
          });
      },
      
      
      async logout() {
        const response = await axios.get("/logout")
        this.user = null;
        router.push("/");
    }
      
  },
});
