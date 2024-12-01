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

.footer-content {
  position: relative;
  z-index: 2;
  max-width: 300px; /* Limit width on larger screens */
  padding: 0 10px; /* Add padding for smaller screens */
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
    max-width: 100%; /* Für kleinere Bildschirme */
  }
}
</style>
