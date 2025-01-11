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
        <a href="#privacy-policy" @click="openDialog('privacy')">Privacy Policy</a>,<br />
        <a href="#terms-of-service" @click="openDialog('terms')">Terms of Service</a>, and<br />
        <a href="#refund-policy" @click="openDialog('refund')">Refund Policy</a>
      </p>

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
    openDialog(policy) {
      const dialog = document.getElementById('policy-dialog');
      switch (policy) {
        case 'privacy':
          this.dialogTitle = 'Privacy Policy';
          this.dialogContent = `
            <strong>Last updated: 2025.01.11</strong><br><br>
            Thank you for visiting UrbanCoffee. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and disclose your information when you visit our website or purchase our products.<br><br>
            <strong>1. Information We Collect</strong><br>
            We may collect the following types of information:<br>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, shipping address, billing address, phone number, and payment information when you make a purchase.</li>
              <li><strong>Account Information:</strong> If you create an account, we collect your login credentials and any information you choose to provide.</li>
              <li><strong>Device Information:</strong> IP address, browser type, operating system, and other technical details to enhance your browsing experience.</li>
              <li><strong>Usage Data:</strong> Pages viewed, time spent on the site, and other interactions to understand how users engage with our website.</li>
            </ul><br>
            <strong>2. How We Use Your Information</strong><br>
            We use the collected information for the following purposes:<br>
            <ul>
              <li><strong>To Fulfill Orders:</strong> Process your purchases, deliver products, and handle returns or refunds.</li>
              <li><strong>Customer Support:</strong> Respond to inquiries and provide assistance.</li>
              <li><strong>Marketing:</strong> Send promotional offers and updates about our products (if you opt-in).</li>
              <li><strong>Analytics:</strong> Improve our website, products, and user experience.</li>
              <li><strong>Compliance:</strong> Meet legal obligations and protect against fraudulent activities.</li>
            </ul><br>
            <strong>3. Cookies and Tracking Technologies</strong><br>
            We use cookies and similar technologies to:<br>
            <ul>
              <li>Remember your preferences.</li>
              <li>Track your activity on our site.</li>
              <li>Provide personalized product recommendations.</li>
            </ul><br>
            You can manage your cookie preferences through your browser settings.<br><br>
            <strong>4. Sharing Your Information</strong><br>
            We do not sell your personal information. However, we may share it with:<br>
            <ul>
              <li><strong>Service Providers:</strong> Payment processors, shipping companies, and marketing platforms to facilitate our services.</li>
              <li><strong>Legal Authorities:</strong> If required by law or to protect our rights.</li>
            </ul><br>
            <strong>5. Your Rights</strong><br>
            Depending on your location, you may have the right to:<br>
            <ul>
              <li>Access, correct, or delete your personal data.</li>
              <li>Opt-out of marketing communications.</li>
              <li>Restrict certain data processing activities.</li>
            </ul><br>
            To exercise these rights, contact us at [Your Support Email].<br><br>
            <strong>6. Data Security</strong><br>
            We implement industry-standard security measures to protect your personal data. However, no online platform is entirely secure, and we cannot guarantee absolute data security.<br><br>
            <strong>7. Retention</strong><br>
            We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by law.<br><br>
            <strong>8. Changes to This Privacy Policy</strong><br>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date.<br><br>
            <strong>9. Contact Us</strong><br>
            If you have questions or concerns about this Privacy Policy, please contact us at:<br>
            <ul>
              <li><strong>Email:</strong> [UrbanCoffee@support.com]</li>
              <li><strong>Phone:</strong> [Your Support Phone Number]</li>
              <li><strong>Address:</strong> [Your Business Address]</li>
            </ul>
          `;
          break;
          case 'terms':
            this.dialogTitle = 'Terms of Service';
            this.dialogContent = `
              <strong>Last updated: 2025.01.11</strong><br><br>
              Welcome to UrbanCoffee. By accessing or using our services, you agree to be bound by the following terms and conditions. Please read them carefully.<br><br>

              <strong>1. Acceptance of Terms</strong><br>
              By using our website, you acknowledge that you have read and understood these terms. If you do not agree, please refrain from using our services.<br><br>

              <strong>2. Eligibility</strong><br>
              You must be at least 18 years old to make purchases on our website. By doing so, you confirm that you meet this requirement.<br><br>

              <strong>3. Use of the Website</strong><br>
              You agree to use our website for lawful purposes only and refrain from engaging in activities that may disrupt its functionality or violate any applicable laws.<br><br>

              <strong>4. Orders and Payments</strong><br>
              All purchases are subject to availability and confirmation of the order price. Payments must be completed at the time of purchase.<br><br>

              <strong>5. Shipping and Delivery</strong><br>
              We strive to deliver your products in a timely manner. Shipping times may vary depending on your location and external factors beyond our control.<br><br>

              <strong>6. Returns and Refunds</strong><br>
              Our refund policy outlines the scenarios in which refunds may be issued. Please review it for details.<br><br>

              <strong>7. Intellectual Property</strong><br>
              All content on our website, including text, graphics, logos, and images, is the property of [Your Coffee Website Name] and is protected by copyright laws.<br><br>

              <strong>8. Limitation of Liability</strong><br>
              We are not liable for any indirect, incidental, or consequential damages arising from the use of our website or services.<br><br>

              <strong>9. Changes to Terms</strong><br>
              We reserve the right to update these terms at any time. Any changes will be effective immediately upon posting on our website.<br><br>

              <strong>10. Contact Us</strong><br>
              If you have any questions about these terms, please contact us at:<br>
              <ul>
                <li><strong>Email:</strong> [UrbanCoffee@support.com]</li>
                <li><strong>Phone:</strong> [Your Support Phone Number]</li>
                <li><strong>Address:</strong> [Your Business Address]</li>
              </ul>
            `;
            break;

            case 'refund':
              this.dialogTitle = 'Refund Policy';
              this.dialogContent = `
                <strong>Last updated: 2025.01.11</strong><br><br>
                At UrbanCoffee, we value customer satisfaction and aim to provide the best experience. This Refund Policy outlines the conditions under which refunds may be granted.<br><br>
                <strong>1. Eligibility for Refunds</strong><br>
                Refunds may be issued under the following circumstances:<br>
                <ul>
                  <li>The product received is defective or damaged.</li>
                  <li>The wrong product was delivered.</li>
                  <li>The order was canceled before shipping.</li>
                </ul><br>
                <strong>2. Refund Process</strong><br>
                To request a refund, please contact our customer support team within 14 days of receiving your order. Include your order number and a detailed description of the issue.<br><br>
                <strong>3. Non-Refundable Items</strong><br>
                The following items are not eligible for refunds:<br>
                <ul>
                  <li>Gift cards.</li>
                  <li>Perishable goods (e.g., coffee beans) that have been opened.</li>
                  <li>Items purchased on clearance or during special promotions.</li>
                </ul><br>
                <strong>4. Refund Method</strong><br>
                Approved refunds will be processed using the original payment method. Please allow 5-10 business days for the refund to reflect in your account.<br><br>
                <strong>5. Contact Us</strong><br>
                For refund inquiries, reach out to:<br>
                <ul>
                  <li><strong>Email:</strong> [UrbanCoffee@support.com]</li>
                  <li><strong>Phone:</strong> [Your Support Phone Number]</li>
                  <li><strong>Address:</strong> [Your Business Address]</li>
                </ul>
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
