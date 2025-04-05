<template>
  <div class="checkout-personal-info">
    <div class="container">
      <h1 class="page-title">CHECKOUT - PERSONAL INFORMATION</h1>

      <div v-if="cart.length === 0" class="empty-checkout">
        <p>Your cart is empty. Please add items to your cart before proceeding to checkout.</p>
        <router-link to="/" class="continue-shopping">Continue shopping</router-link>
      </div>

      <div v-else class="checkout-container">
        <div class="checkout-form">
          <h2 class="form-title">Customer Information</h2>

          <form @submit.prevent="submitForm" class="personal-info-form">
            <div class="form-group">
              <label for="fullName">Full Name</label>
              <input type="text" id="fullName" v-model="formData.fullName" required class="form-control">
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="formData.email" required class="form-control">
            </div>

            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" v-model="formData.phone" required class="form-control">
            </div>

            <div class="form-group">
              <label for="address">Address</label>
              <input type="text" id="address" v-model="formData.address" required class="form-control">
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="city">City</label>
                <input type="text" id="city" v-model="formData.city" required class="form-control">
              </div>

              <div class="form-group">
                <label for="zipCode">Zip / Postal Code</label>
                <input type="text" id="zipCode" v-model="formData.zipCode" required class="form-control">
              </div>
            </div>

            <div class="form-group">
              <label for="country">Country</label>
              <select id="country" v-model="formData.country" required class="form-control">
                <option value="Pakistan">Pakistan</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div class="form-group">
              <label for="notes">Order Notes (Optional)</label>
              <textarea id="notes" v-model="formData.notes" class="form-control"></textarea>
            </div>

            <div class="form-group">
              <label>Payment Method</label>
              <div class="payment-methods">
                <label class="payment-method">
                  <input type="radio" v-model="formData.paymentMethod" value="easypaisa" required>
                  <img src="../assets/easypaisa.png" alt="Easypaisa">
                </label>
                <label class="payment-method">
                  <input type="radio" v-model="formData.paymentMethod" value="jazzcash" required>
                  <img src="../assets/Frame.png" alt="Frame">
                </label>
              </div>
            </div>

            <div class="action-buttons">
              <button type="submit" class="proceed-btn">
                COMPLETE ORDER
              </button>
              <router-link to="/checkout" class="back-btn">
                BACK
              </router-link>
            </div>
          </form>
        </div>

        <div class="order-summary">
          <h2 class="form-title">Order Summary</h2>

          <div class="order-items">
            <div class="order-item" v-for="item in cart" :key="item.product.id">
              <div class="item-image">
                <img :src="item.product.image" :alt="item.product.name">
                <span class="item-quantity">{{ item.quantity }}</span>
              </div>
              <div class="item-details">
                <div class="item-name">{{ item.product.name }}</div>
                <div class="item-price">Rs.{{ formatPrice(item.product.price * item.quantity) }}</div>
              </div>
            </div>
          </div>

          <div class="price-details">
            <div class="price-row">
              <span>Subtotal</span>
              <span>Rs.{{ formatPrice(totalPrice) }}</span>
            </div>
            <div class="price-row">
              <span>Shipping</span>
              <span>Rs.150.00</span>
            </div>
            <div class="price-row total-row">
              <span>Total</span>
              <span>Rs.{{ formatPrice(totalPrice + 150) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'CheckoutPersonalInfo',
  data() {
    return {
      formData: {
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: '',
        country: 'Pakistan',
        notes: '',
        paymentMethod: ''
      }
    }
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['totalPrice'])
  },
  methods: {
    ...mapActions(['setCheckoutInfo', 'clearCart']),
    formatPrice(price) {
      return price.toLocaleString()
    },
    submitForm() {
      this.setCheckoutInfo({
        fullName: this.formData.fullName,
        email: this.formData.email,
        phone: this.formData.phone,
        address: this.formData.address,
        city: this.formData.city,
        zipCode: this.formData.zipCode,
        country: this.formData.country,
        notes: this.formData.notes,
        paymentMethod: this.formData.paymentMethod,
      })

      // In a real app, you would send the order to the backend here
      this.$router.push('/payment-success')
    }
  }
}
</script>

<style scoped>
.checkout-personal-info {
  padding: 30px 0 60px;
}

.page-title {
  margin-bottom: 30px;
  color: #1176b8;
}

.empty-checkout {
  text-align: center;
  padding: 50px 0;
  background-color: #f9f9f9;
  border-radius: 4px;
}

.continue-shopping {
  color: #1176b8;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  margin-top: 15px;
}

.continue-shopping:hover {
  text-decoration: underline;
}

.checkout-container {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.checkout-form {
  flex: 2;
  min-width: 300px;
}

.order-summary {
  flex: 1;
  min-width: 250px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 4px;
  align-self: flex-start;
  position: sticky;
  top: 20px;
}

.form-title {
  margin-bottom: 20px;
  font-size: 18px;
  color: #333;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.personal-info-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-row {
  display: flex;
  gap: 15px;
}

.form-row .form-group {
  flex: 1;
}

.form-control {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

textarea.form-control {
  min-height: 100px;
  resize: vertical;
}

select.form-control {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23333' viewBox='0 0 16 16'%3E%3Cpath d='M8 9.5l4-4 .5.5L8 10.5 3.5 6l.5-.5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: calc(100% - 10px) center;
  padding-right: 30px;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: normal;
}

.terms-link {
  color: #1176b8;
  text-decoration: none;
}

.terms-link:hover {
  text-decoration: underline;
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}

.proceed-btn,
.back-btn {
  padding: 12px;
  text-align: center;
  border-radius: 4px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
}

.proceed-btn {
  background-color: #1176b8;
  color: white;
  border: none;
}

.back-btn {
  background-color: #f5f5f5;
  color: #333;
}

.order-items {
  margin-bottom: 20px;
  max-height: 300px;
  overflow-y: auto;
}

.order-item {
  display: flex;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.item-image {
  position: relative;
  width: 50px;
  height: 50px;
  margin-right: 15px;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.item-quantity {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #1176b8;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

.item-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.item-name {
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 14px;
}

.item-price {
  color: #1176b8;
  font-size: 14px;
}

.price-details {
  margin-bottom: 20px;
}

.price-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.total-row {
  font-weight: bold;
  font-size: 18px;
  border-bottom: none;
}

.payment-methods {
  display: flex;
  gap: 20px;
  margin-top: 10px;
}

.payment-method {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.payment-method:hover {
  border-color: #1176b8;
}

.payment-method input[type="radio"] {
  margin: 0;
}

.payment-method img {
  height: 30px;
  object-fit: contain;
}

.payment-method input[type="radio"]:checked+img {
  opacity: 1;
}

.payment-method:has(input[type="radio"]:checked) {
  border-color: #1176b8;
  background-color: #f0f7fc;
}


@media (max-width: 768px) {
  .checkout-container {
    flex-direction: column;
  }

  .checkout-form,
  .order-summary {
    min-width: 100%;
  }

  .form-row {
    flex-direction: column;
    gap: 15px;
  }

  .order-summary {
    position: relative;
    top: 0;
  }
}
</style>
