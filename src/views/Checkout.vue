<template>
  <div class="checkout-page">
    <div class="container">
      <h1 class="page-title">CHECKOUT</h1>

      <div v-if="cart.length === 0" class="empty-checkout">
        <p>Your cart is empty. Please add items to your cart before proceeding to checkout.</p>
        <router-link to="/" class="continue-shopping">Continue shopping</router-link>
      </div>

      <div v-else class="checkout-container">
        <div class="checkout-form">
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

          <div class="action-buttons">
            <router-link to="/checkout/personal-info" class="proceed-btn">
              PROCEED TO NEXT STEP
            </router-link>
            <router-link to="/cart" class="back-btn">
              BACK TO CART
            </router-link>
          </div>
        </div>

        <div class="payment-options">
          <h2 class="form-title">We Accept</h2>
          <div class="payment-methods">
            <div class="payment-method">
              <img src="../assets/easypaisa.png" alt="easypaisa">
              <span>easypaisa</span>
            </div>
            <div class="payment-method">
              <img src="../assets/Frame.png" alt="Frame">
              <span>Frame</span>
            </div>
          </div>

          <div class="secure-checkout">
            <div class="secure-icon">🔒</div>
            <div class="secure-text">Secure Checkout</div>
          </div>

          <div class="satisfaction-guarantee">
            <h3>100% Satisfaction Guarantee</h3>
            <p>If you are not satisfied with your purchase, we offer a 7-day return policy.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Checkout',
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['totalPrice'])
  },
  methods: {
    formatPrice(price) {
      return price.toLocaleString()
    }
  }
}
</script>

<style scoped>
.checkout-page {
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

.payment-options {
  flex: 1;
  min-width: 250px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 4px;
  align-self: flex-start;
}

.form-title {
  margin-bottom: 20px;
  font-size: 18px;
  color: #333;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.order-items {
  margin-bottom: 20px;
}

.order-item {
  display: flex;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.item-image {
  position: relative;
  width: 60px;
  height: 60px;
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
}

.item-price {
  color: #1176b8;
}

.price-details {
  margin-bottom: 30px;
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

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.proceed-btn, .back-btn {
  padding: 12px;
  text-align: center;
  border-radius: 4px;
  font-weight: bold;
  text-decoration: none;
}

.proceed-btn {
  background-color: #1176b8;
  color: white;
}

.back-btn {
  background-color: #f5f5f5;
  color: #333;
}

.payment-methods {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
}

.payment-method {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.payment-method img {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.secure-checkout {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px;
  background-color: #f0f8ff;
  border-radius: 4px;
  margin-bottom: 20px;
}

.secure-icon {
  font-size: 20px;
}

.secure-text {
  font-weight: bold;
}

.satisfaction-guarantee {
  padding: 15px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #eee;
}

.satisfaction-guarantee h3 {
  font-size: 16px;
  margin-bottom: 10px;
  color: #333;
}

.satisfaction-guarantee p {
  font-size: 14px;
  color: #666;
}

@media (max-width: 768px) {
  .checkout-container {
    flex-direction: column;
  }

  .checkout-form, .payment-options {
    min-width: 100%;
  }
}
</style>
