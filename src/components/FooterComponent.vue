<template>
  <footer class="footer">
    <div class="container footer-content">
      <div class="footer-section">
        <h3>SUPPORT</h3>
        <ul class="footer-links">
          <li><router-link to="/">Merchant Communication</router-link></li>
          <li><router-link to="/">Frequently Asked Questions</router-link></li>
          <li><router-link to="/">RETURN POLICY</router-link></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>CONTACT US</h3>
        <p><strong>Karachi</strong></p>
        <p>Office Number 1203, 12th Floor, Uni Centre, I.I Chundrigar Road, Karachi, Pakistan.</p>
        <p>Email: cheaptronic@zontec.club</p>
      </div>
      <div class="footer-section">
        <h3>NEWSLETTER</h3>
        <p>Promotions, new products and sales. Directly to your inbox.</p>
        <div class="newsletter-form">
          <input type="email" placeholder="Email Address" class="newsletter-input">
          <button class="newsletter-button">SIGN UP</button>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <p>Copyright © 2025 | Powered by Data Network Solutions</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
.footer {
  background-color: #f5f5f5;
  padding-top: 30px;
  margin-top: auto;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
}

.footer-section {
  flex: 1;
  min-width: 250px;
}

.footer-section h3 {
  font-size: 16px;
  margin-bottom: 15px;
  color: #444;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-links a {
  color: #666;
  text-decoration: none;
}

.footer-links a:hover {
  color: #1176b8;
}

.newsletter-form {
  display: flex;
  margin-top: 15px;
}

.newsletter-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-right: none;
  outline: none;
}

.newsletter-button {
  background-color: #1176b8;
  color: white;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
}

.footer-bottom {
  background-color: #f5f5f5;
  padding: 15px 0;
  margin-top: 30px;
  border-top: 1px solid #ddd;
  text-align: center;
  color: #666;
  font-size: 14px;
}
</style>
