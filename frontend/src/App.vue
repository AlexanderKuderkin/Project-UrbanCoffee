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
/* the Header styling*/
/*done*/
.header {
    background-color: #535352; 
    color: #000000; 
    padding: 15px 20px; 
    display: flex;
    align-items: center; 
    justify-content: space-between; /* space between logo and other */
    border-bottom-left-radius: 20px; 
    border-bottom-right-radius: 20px; 
}
/*done*/
#NameWeb{
    font-family: 'Platypi', sans-serif;
}

/*done*/
.header .logo {
    display: flex;
    flex-direction: column; /* Logo and Text underneath each other */
    align-items: center; 
}
/*done*/
#NameWeb{
    font-weight: bold;
}

/*done*/
.header .search-container {
    flex-grow: 1; /* takes the space that is free */
    display: flex;
    justify-content: center; 
    margin: 0 20px;
}

/*done*/
.header .nav-buttons .btn-traditional {
    border: none;
    background-color: #A8865F; 
    color: #ffffff; 
    border-radius: 20px; 
    margin-left: 10px; 
    padding: 3px 11px;
    font-weight: bold;
}

/*done*/
.header .nav-buttons .btn-traditional:hover {
    background-color: #A8765F;
}
/*done*/
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



/* Sidebar Styling */
/*done*/
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

/*done*/
.btn{
    color: white;
    font-weight: 700;
}

/* Sidebar Header */
/*done*/
.sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}

/* Sidebar Body ~ buttons are underneath each other */
/*done*/
.sidebar-body {
    display: flex;
    flex-direction: column;
}

/*done*/
.sidebar-body .btn {
    width: 70%; 
    margin-bottom: 10px; 
    font-weight: bold;
    color: white;
    margin-left: 10px;
}

/* First picture and text*/
/*done*/
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

/* style for the first text */
/*done*/
.firstText .text {
    position: absolute;
    top: 47%;
    left: 35%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 20px;
    text-align: center;
}

/*done*/
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

/*Between things*/
/*done*/
.offer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 0; 
}

/*done*/
.vertical-line {
    width: 4px; /* thickness of the line */
    height: 90px; /* how long the line is */
    background-color: #D9B68b; 
    margin-bottom: 10px;
    border-radius: 20px;
}

/*done*/
.offer-container h3 {
    color: #D9B68b; 
    font-weight: bold; 
}

/*What we Offer container*/
/*done*/
.description-container {
    margin: 0px 30px;
}

/*done*/
.description-row {
    display: flex; 
    justify-content: space-between;
    margin-bottom: 10px; 
}

/*done*/
.description-item {
    display: flex;
    flex-direction: row; 
    align-items: center; 
    flex: 0 0 50%; 
    margin-bottom: 20; 
}

/*done*/
.description-image {
    width: 260px; 
    height: 250px; 
    border-radius: 20px; 
    margin-right: 15px; 
}

/*done*/
.description-text h3 {
    color: #A8865F; 
    margin-top: 5px;
    margin-bottom: 5px;
    text-align: center; 
    font-family: 'Noto Sans', sans-serif;
}

/*done*/
.description-text p {
    color: #000000; 
    padding-left: 30px;
    padding-right: 30px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
}

/*done*/
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

/*Advertising container*/
/*done*/
.advertising-container {
    position: relative; 
    margin: 20px 20px; /* Zentriert den Container und gibt vertikalen Abstand */
    min-height: 200px;
    background-image: url('src/assets/kaffeepulver_cleanup.jpg');
    background-size: cover; 
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 20px;
    padding: 20px; 
    text-align: center; 
}

/*done*/
.advertising-text {
    position: relative; 
    color: white;
    font-size: 20px;
    margin-bottom: 30px; /* Abstand unter dem Text */
    font-size: xx-large;
    font-family: 'Roboto', sans-serif;
}

/*done*/
.signInBtn, .btn-traditional {
    /* Übernehme exakt die gleichen Stile */
    border: none;
    background-color: #A8865F;
    color: #ffffff;
    border-radius: 20px;
    padding: 3px 11px;
    font-weight: bold;
    cursor: pointer;
    margin-left: 10px;
    width: 81.75px; /* Exakte Breite des Header-Buttons */
    height: 37px;   /* Exakte Höhe des Header-Buttons */
}

/*done*/
.signInBtn:hover, .btn-traditional:hover {
    background-color: #A8765F;
}

/* the footer styling */
/*done*/
.footer {
    background-image: url('src/assets/Kaffe_Footer.jpg'); /* our background */
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
    min-height: 200px; /* Minimum height for the footer */
    margin-top: 20px;
}

/*done*/
.footer-content {
    position: relative;
    z-index: 2;
    max-width: 300px; /* Limit width on larger screens */
    padding: 0 10px; /* Add padding for smaller screens */
    font-family: 'Roboto', sans-serif;
}

/*done*/
.footer h5 {
    color: #ffffff;
    margin-bottom: 10px;
}

/*done*/
.footer a {
    color: #e0c097;
    text-decoration: none;
}

/*done*/
.footer a:hover {
    text-decoration: underline;
}

/*done*/
@media (max-width: 768px) {
    .footer {
        padding: 20px 10px;
    }
    .footer-content {
        max-width: 100%; 
    }
}

/*
Florent Gjoshi
*/

/*done*/
.explanation-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin: 20px;
    flex-wrap: wrap; /* Ermöglicht Umbruch bei kleineren Bildschirmen */
}

/*done*/
@media (max-width: 860px) {
    .explanation-container {
        flex-direction: column; 
        align-items: center; 
    }
}

/*done*/
.KaffeePour {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 250px;
    max-width: 280px;
}

/*done*/
.KaffeePour img {
    max-width: 100%;
    height: auto;
    border-radius: 20px; /* Für abgerundete Ecken beim Bild */
}

/*done*/
h3 {
    margin-top: 0;
}

/* Container für Our Story und Our Goal */
/*done*/
.OurStory-Container,
.OurGoal-Container {
    flex: 1;
    color: #735340;
    min-width: 250px;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;            /* Zentriert den Inhalt */
    display: flex;
    flex-direction: column;        /* Stellt sicher, dass Überschrift über dem Text bleibt */
    align-items: center;           /* Zentriert Inhalt horizontal */
    font-family: 'Roboto', sans-serif;
}

/* Überschrift und Text innerhalb des Containers zentrieren */
/*done*/
.OurStory-Container h3,
.OurGoal-Container h3,
.OurStory-Container p,
.OurGoal-Container p {
    display: inline-block;         /* Nimmt nur die Breite des Inhalts ein */
    text-align: center;            /* Zentriert den Text innerhalb des Elements */
    margin: 0 auto;                /* Zentriert das Element im Container */
    font-family: 'Roboto', sans-serif;
}



/*Alex seins*/
.card{
    border-radius: 30px;
}

/*done*/
.star-color {
    color: #735340; /* Farbe für Sterne */
  }

  /*done*/
  .btn-view-more, .btn-buy-more {
    margin-top: 10px;
    padding: 8px 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: block; /* Button auf eine neue Zeile setzen */
    width: 80%; /* Optional: Breite der Buttons für Klarheit */
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 119px;
    background-color: #735340;
  }

  /*done*/
  .btn-view-more {
    color: #fff;
  }

  /*done*/
  .btn-view-more:hover {
    background-color: #D9B68b;
  }

  /*done*/
  .btn-buy-more {
    background-color: #735340;
    color: #fff;
  }

  /*done*/
  .btn-buy-more:hover {
    background-color: #D9B68b;
  }

  /*done*/
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

/* Modal Box */
.cookie-modal {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 400px;
}

/* Modal Title */
.cookie-modal h3 {
  margin-top: 0;
  font-size: 1.5rem;
  color: #333;
}

/* Modal Text */
.cookie-modal p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
}

/* Accept Button */
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
  top: 40px; /* Adjust the distance from the top */
  left: 40%; /* Align to the center horizontally */
  transform: translateX(-50%); /* Center it perfectly */
  background-color: #4caf50; /* Green for success */
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
  background-color: #f44336; /* Rot für Fehler */
}

.toast.show {
  opacity: 1;
  transform: translateY(0);
}

</style>