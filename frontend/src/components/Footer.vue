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
        <a href="#impressum" @click="openDialog('impressum')">Impressum</a>,<br />
        <a href="#contact" @click="openDialog('contact')">Contact Form</a>, and<br />
        <a href="#privacy-policy" @click="openDialog('privacy')">Privacy Policy</a>
      </p>
      <div class="social-icons">
        <a href="https://www.facebook.com" target="_blank" aria-label="Facebook">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" aria-label="Instagram">
          <i class="fab fa-instagram"></i>
        </a>
      </div>

      <!-- Dialog for Policies -->
      <dialog id="policy-dialog">
        <h2>{{ dialogTitle }}</h2>
        <p v-html="dialogContent"></p>
        <button @click="closeDialog">Close</button>
      </dialog>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      dialogTitle: '',
      dialogContent: '',
    };
  },
  methods: {
    openDialog(section) {
      const dialog = document.getElementById('policy-dialog');
      switch (section) {
        case 'impressum':
          this.dialogTitle = 'Impressum';
          this.dialogContent = `
            <strong>UrbanCoffee</strong><br />
            Owner: John Doe<br />
            Address: Coffee Street 123, 45678 Coffee City<br />
            Email: <a href="mailto:UrbanCoffee@support.com">UrbanCoffee@support.com</a><br />
            Phone: +49 123 456 7890<br />
            VAT ID: DE123456789<br />
          `;
          break;
        case 'contact':
          this.dialogTitle = 'Contact Form';
          this.dialogContent = `
            <form>
              <label for="name">Name:</label><br />
              <input type="text" id="name" name="name" required /><br /><br />
              <label for="email">Email:</label><br />
              <input type="email" id="email" name="email" required /><br /><br />
              <label for="message">Message:</label><br />
              <textarea id="message" name="message" rows="4" required></textarea><br /><br />
              <button type="submit">Send</button>
            </form>
          `;
          break;
        case 'privacy':
          this.dialogTitle = 'Privacy Policy';
          this.dialogContent = `
            <strong>Last updated: 2025.01.11</strong><br><br>
            Thank you for visiting UrbanCoffee. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and disclose your information when you visit our website or purchase our products.<br><br>
            ...
          `;
          break;
      }
      dialog.showModal();
    },
    closeDialog() {
      const dialog = document.getElementById('policy-dialog');
      dialog.close();
    },
  },
};
</script>

<style scoped>
.footer {
  background-image: url('@/assets/Kaffe_Footer.jpg'); /* Hintergrundbild */
  background-size: cover;
  background-position: center;
  color: #ffffff;
  padding: 40px 20px;
  display: flex;
  flex-direction: column; /* Inhalte untereinander anordnen */
  align-items: flex-start; /* Gesamter Block bleibt links */
  justify-content: flex-start; /* Von oben nach unten ausrichten */
  width: 100%;
  min-height: 200px;
  margin-top: 20px;
}

.footer-content {
  max-width: 300px; /* Breite des Inhaltsblocks begrenzen */
  font-family: 'Roboto', sans-serif;
  text-align: center; /* Inhalt innerhalb des Blocks zentrieren */
  margin-left: 0; /* Block bleibt auf der linken Seite */
}

.footer h5 {
  margin-bottom: 10px;
}

.footer p {
  margin: 0 0 20px;
}

.footer a {
  color: #e0c097;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

.social-icons {
  margin-top: 20px; /* Abstand nach oben für die Icons */
  display: flex;
  justify-content: center; /* Icons innerhalb des Blocks zentrieren */
  gap: 15px; /* Abstand zwischen den Icons */
}

.social-icons a {
  color: #ffffff;
  font-size: 20px; /* Standardgröße der Icons */
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #e0c097; /* Farbe beim Hover */
}

@media (max-width: 768px) {
  .footer {
    padding: 20px 10px;
  }

  .footer-content {
    max-width: 100%; /* Für kleinere Bildschirme */
  }
}

dialog {
  border: none;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 400px;
  max-width: 90%;
  background-color: white;
  text-align: center;
}

dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
