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

      <dialog id="policy-dialog">
        <h2 class="dialog-title">{{ dialogTitle }}</h2>
        <div class="dialog-content" v-html="dialogContent"></div>
        <button class="dialog-close" @click="closeDialog">Close</button>
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
            <strong>Last updated: 2025.01.11</strong><br /><br />
            <h3>Introduction</h3>
            <p>Welcome to UrbanCoffee! We value your privacy and are committed to protecting your personal data. This privacy policy outlines how we handle your information when you use our website or purchase our products.</p>
            <h3>1. Data We Collect</h3>
            <p>We may collect and process the following data:</p>
            <ul>
              <li><strong>Contact Information:</strong> Name, email address, phone number, and address.</li>
              <li><strong>Payment Information:</strong> Payment details for purchases, securely processed by third-party payment gateways.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and usage data via cookies and analytics tools.</li>
            </ul>
            <h3>2. How We Use Your Data</h3>
            <p>Your data is used to:</p>
            <ul>
              <li>Process and deliver your orders.</li>
              <li>Provide customer support and handle inquiries.</li>
              <li>Improve our website and personalize your experience.</li>
              <li>Send promotional communications, where consent is given.</li>
            </ul>
            <h3>3. Data Sharing</h3>
            <p>We share your data with:</p>
            <ul>
              <li>Third-party service providers (e.g., payment processors, delivery services).</li>
              <li>Law enforcement, if legally required.</li>
            </ul>
            <h3>4. Cookies</h3>
            <p>We use cookies to enhance your browsing experience. You can manage cookie preferences through your browser settings.</p>
            <h3>5. Your Rights</h3>
            <p>You have the right to:</p>
            <ul>
              <li>Access your data.</li>
              <li>Request corrections to your data.</li>
              <li>Request deletion of your data.</li>
              <li>Withdraw consent for data processing.</li>
            </ul>
            <p>For inquiries, contact us at <a href="mailto:UrbanCoffee@support.com">UrbanCoffee@support.com</a>.</p>
            <h3>6. Data Security</h3>
            <p>We implement robust measures to protect your data. However, no method of transmission over the internet is 100% secure.</p>
            <h3>7. Updates</h3>
            <p>We may update this policy periodically. Please review it regularly.</p>
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
  background-image: url('@/assets/Kaffe_Footer.jpg');
  background-size: cover;
  background-position: center;
  color: #ffffff;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  min-height: 250px;
  margin-top: 20px;
  font-family: 'Roboto', sans-serif;
}

.footer-content {
  max-width: 300px;
  text-align: center;
  margin-left: 0;
}

.footer h5 {
  margin-bottom: 10px;
  font-size: 1.2em;
  font-weight: bold;
}

.footer p {
  margin: 0 0 20px;
  line-height: 1.5;
}

.footer a {
  color: #e0c097;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

.social-icons {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.social-icons a {
  color: #ffffff;
  font-size: 20px;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #e0c097;
}

@media (max-width: 768px) {
  .footer {
    padding: 20px 10px;
  }

  .footer-content {
    max-width: 100%;
  }
}

dialog {
  border: none;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 400px;
  max-width: 90%;
  background-color: #ffffff;
  text-align: left;
}

dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.4);
}

.dialog-title {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 15px;
}

.dialog-content {
  font-size: 1em;
  line-height: 1.6;
}

.dialog-close {
  margin-top: 20px;
  background-color: #e0c097;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  color: #ffffff;
  cursor: pointer;
  font-size: 1em;
}

.dialog-close:hover {
  background-color: #d1a87c;
}
</style>
