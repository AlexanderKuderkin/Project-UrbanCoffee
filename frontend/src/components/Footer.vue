<template>
  <footer class="footer">
    <div class="footer-content">
      <h5>Customer Support</h5>
      <p>
        Need help? Reach us at 
        <a href="mailto:UrbanCoffee@support.com">UrbanCoffee@support.com</a>
      </p>
      <h5>Legal Information</h5>
      <p>
        Links to your<br />
        <a href="#privacy-policy">Privacy Policy</a>,<br />
        <a href="#terms-of-service">Terms of Service</a>, and<br />
        <a href="#refund-policy">Refund Policy</a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-image: url('@/assets/Kaffe_Footer.jpg'); /* Hintergrundbild */
  background-size: cover;
  background-position: center;
  color: #ffffff; /* Weißer Text */
  padding: 40px 20px; /* Innenabstand */
  text-align: center; /* Zentriert den Text */
  flex-direction: column; /* Spaltenlayout */
  justify-content: center; /* Inhalte zentrieren */
  align-items: center; /* Inhalte horizontal zentrieren */
  width: 100%; /* Volle Breite */
  min-height: 200px; /* Mindesthöhe */
}

.footer-content {
  max-width: 600px; /* Maximalbreite für den Inhalt */
}

.footer h5 {
  color: #ffffff;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 18px;
}

.footer p {
  color: #e0c097; /* Dezente Goldfarbe */
  margin-bottom: 15px;
  font-size: 16px;
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
    padding: 20px;
  }

  .footer-content {
    max-width: 100%; /* Für kleinere Bildschirme */
  }
}
</style>
