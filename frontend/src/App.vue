<template>
  <div id="app">
    <Header @toggle-sidebar="toggleSidebar" />
    <Sidebar :isVisible="isSidebarVisible" @close-sidebar="closeSidebar" />
    <router-view />
    <Footer />

    <div v-if="showCookieModal" class="cookie-modal-overlay">
      <div class="cookie-modal">
        <h3>We use cookies</h3>
        <p>
          We use cookies to improve your experience. By continuing, you agree to
          our use of cookies.
        </p>
        <button @click="acceptCookies">Accept</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import Footer from "./components/Footer.vue";
import { useUserStore } from "@/stores/user";

export default {
  name: "App",
  components: { Header, Sidebar, Footer },
  data() {
    return {
      isSidebarVisible: false,
      showCookieModal: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
    closeSidebar() {
      this.isSidebarVisible = false;
    },
    checkCookieConsent() {
      const consent = localStorage.getItem("cookieConsent");
      if (!consent) {
        this.showCookieModal = true;
      }
    },
    acceptCookies() {
      localStorage.setItem("cookieConsent", "true"); 
      this.showCookieModal = false;
    },
  },
  
  created() {
    const userStore = useUserStore();
    userStore.fetchUser();
    this.checkCookieConsent();
  },
};
</script>

<style>
body {
    margin: 0;
    padding: 0;
}
.header {
    background-color: #535352; 
    color: #000000; 
    padding: 15px 20px; 
    display: flex;
    align-items: center; 
    justify-content: space-between; 
    border-bottom-left-radius: 20px; 
    border-bottom-right-radius: 20px; 
}
#NameWeb{
    font-family: 'Platypi', sans-serif;
}

.header .logo {
    display: flex;
    flex-direction: column; 
    align-items: center; 
}
#NameWeb{
    font-weight: bold;
}

.header .search-container {
    flex-grow: 1; 
    display: flex;
    justify-content: center; 
    margin: 0 20px;
}

.header .nav-buttons .btn-traditional {
    border: none;
    background-color: #A8865F; 
    color: #ffffff; 
    border-radius: 20px; 
    margin-left: 10px; 
    padding: 3px 11px;
    font-weight: bold;
}

.header .nav-buttons .btn-traditional:hover {
    background-color: #A8765F;
}
.navbar-toggler-icon {
    display: inline-block;
    width: 2em;
    height: 2.1em;
    vertical-align: middle;
    background-image: var(--bs-navbar-toggler-icon-bg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    background-color: #A8865F;
    border-radius: 5px;
    padding-top: 7px;
    color: #ffffff;
    font-weight: 500;
}



.sidebar {
    position: fixed;
    top: 0;
    right: 0;
    width: 170px;
    height: 100%;
    background-color: #535352;
    color: #ffffff;
    padding: 15px;
    z-index: 1050;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.btn{
    color: white;
    font-weight: 700;
}

.sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}

.sidebar-body {
    display: flex;
    flex-direction: column;
}

.sidebar-body .btn {
    width: 70%; 
    margin-bottom: 10px; 
    font-weight: bold;
    color: white;
    margin-left: 10px;
}

.firstText {
    position: relative; 
    width: 100%;
    min-height: 450px;
    background-image: url('src/assets/StartseiteBild.png');
    background-size: cover; 
    background-position: center;
    margin-top: 20px;
    margin-bottom: 20px;
    background-repeat: no-repeat;
    border-radius: 20px;
    font-family: 'Roboto', sans-serif;
}

.firstText .text {
    position: absolute;
    top: 47%;
    left: 35%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 20px;
    text-align: center;
}

.viewMoreBtn{
    margin-top: 10px;
    padding: 8px 12px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: block;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 119px;
    background-color: #735340;
    color: #ffffff;
}

.offer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 0; 
}

.vertical-line {
    width: 4px; 
    height: 90px; 
    background-color: #D9B68b; 
    margin-bottom: 10px;
    border-radius: 20px;
}

.offer-container h3 {
    color: #D9B68b; 
    font-weight: bold; 
}

.description-container {
    margin: 0px 30px;
}

.description-row {
    display: flex; 
    justify-content: space-between;
    margin-bottom: 10px; 
}

.description-item {
    display: flex;
    flex-direction: row; 
    align-items: center; 
    flex: 0 0 50%; 
    margin-bottom: 20; 
}

.description-image {
    width: 260px; 
    height: 250px; 
    border-radius: 20px; 
    margin-right: 15px; 
}

.description-text h3 {
    color: #A8865F; 
    margin-top: 5px;
    margin-bottom: 5px;
    text-align: center; 
    font-family: 'Noto Sans', sans-serif;
}

.description-text p {
    color: #000000; 
    padding-left: 30px;
    padding-right: 30px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
}

@media (max-width: 1000px) {
    .description-row {
        flex-direction: column; 
        align-items: center; 
    }

    .description-item {
        flex: 1 0 100%; 
        margin-bottom: 20px; 
        flex-direction: column; 
        align-items: center; 
    }

    .description-image {
        margin-right: 0; 
        margin-bottom: 10px; 
    }
}

.advertising-container {
    position: relative; 
    margin: 20px 20px; 
    min-height: 200px;
    background-image: url('src/assets/kaffeepulver_cleanup.jpg');
    background-size: cover; 
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 20px;
    padding: 20px; 
    text-align: center; 
}

.advertising-text {
    position: relative; 
    color: white;
    font-size: 20px;
    margin-bottom: 30px; 
    font-size: xx-large;
    font-family: 'Roboto', sans-serif;
}

.signInBtn, .btn-traditional {
    border: none;
    background-color: #A8865F;
    color: #ffffff;
    border-radius: 20px;
    padding: 3px 11px;
    font-weight: bold;
    cursor: pointer;
    margin-left: 10px;
    width: 81.75px; 
    height: 37px;   
}

.signInBtn:hover, .btn-traditional:hover {
    background-color: #A8765F;
}

.footer {
    background-image: url('src/assets/Kaffe_Footer.jpg'); 
    background-size: cover;
    background-position: center;
    color: #ffffff;
    padding: 40px 20px;
    text-align: center;
    display: flex;
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: flex-start; 
    position: static; 
    bottom: 0;
    width: 100%;
    min-height: 200px; 
    margin-top: 20px;
}

.footer-content {
    position: relative;
    z-index: 2;
    max-width: 300px; 
    padding: 0 10px; 
    font-family: 'Roboto', sans-serif;
}

.footer h5 {
    color: #ffffff;
    margin-bottom: 10px;
}

.footer a {
    color: #e0c097;
    text-decoration: none;
}

.footer a:hover {
    text-decoration: underline;
}

@media (max-width: 768px) {
    .footer {
        padding: 20px 10px;
    }
    .footer-content {
        max-width: 100%; 
    }
}


.explanation-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin: 20px;
    flex-wrap: wrap; 
}

@media (max-width: 860px) {
    .explanation-container {
        flex-direction: column; 
        align-items: center; 
    }
}

.KaffeePour {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 250px;
    max-width: 280px;
}

.KaffeePour img {
    max-width: 100%;
    height: auto;
    border-radius: 20px; 
}

h3 {
    margin-top: 0;
}

.OurStory-Container,
.OurGoal-Container {
    flex: 1;
    color: #735340;
    min-width: 250px;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;            
    display: flex;
    flex-direction: column;        
    align-items: center;           
    font-family: 'Roboto', sans-serif;
}

.OurStory-Container h3,
.OurGoal-Container h3,
.OurStory-Container p,
.OurGoal-Container p {
    display: inline-block;         
    text-align: center;            
    margin: 0 auto;                
    font-family: 'Roboto', sans-serif;
}



.card{
    border-radius: 30px;
}

.star-color {
    color: #735340; 
  }

  .btn-view-more, .btn-buy-more {
    margin-top: 10px;
    padding: 8px 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: block; 
    width: 80%; 
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 119px;
    background-color: #735340;
  }

  .btn-view-more {
    color: #fff;
  }

  .btn-view-more:hover {
    background-color: #D9B68b;
  }

  .btn-buy-more {
    background-color: #735340;
    color: #fff;
  }

  .btn-buy-more:hover {
    background-color: #D9B68b;
  }

  .mb-2 {
    margin-bottom: 30px!important;
    font-family: 'Roboto', sans-serif;
}
.cookie-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.cookie-modal {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 400px;
}

.cookie-modal h3 {
  margin-top: 0;
  font-size: 1.5rem;
  color: #333;
}

.cookie-modal p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
}

.cookie-modal button {
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
}

.cookie-modal button:hover {
  background-color: #45a049;
}
.toast {
  position: fixed;
  top: 40px; 
  left: 40%; 
  transform: translateX(-50%); 
  background-color: #4caf50; 
  color: white;
  padding: 15px 20px;
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.5s, transform 0.5s;
  z-index: 1000;
}

.toast.error {
  background-color: #f44336; 
}

.toast.show {
  opacity: 1;
  transform: translateY(0);
}

</style>