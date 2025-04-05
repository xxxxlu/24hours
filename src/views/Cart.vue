<template>
  <div class="cart-page">
    <div class="container">
      <h1 class="page-title">SHOPPING CART</h1>

      <div v-if="cart.length === 0" class="empty-cart">
        <p>Your cart is currently empty.</p>
        <router-link to="/" class="continue-shopping">Continue browsing here.</router-link>
      </div>

      <div v-else class="cart-container">
        <div class="cart-items">
          <div class="cart-header">
            <div class="cart-col product-col">Product</div>
            <div class="cart-col price-col">Price</div>
            <div class="cart-col quantity-col">Quantity</div>
            <div class="cart-col total-col">Total</div>
          </div>

          <div class="cart-item" v-for="item in cart" :key="item.product.id">
            <div class="cart-col product-col">
              <div class="product-info">
                <div class="product-image">
                  <img :src="item.product.image" :alt="item.product.name">
                </div>
                <div class="product-details">
                  <router-link :to="'/product/' + item.product.id" class="product-name">
                    {{ item.product.name }}
                  </router-link>
                  <button @click="removeFromCart(item.product.id)" class="remove-btn">
                    Remove
                  </button>
                </div>
              </div>
            </div>

            <div class="cart-col price-col">
              <span class="price">Rs.{{ formatPrice(item.product.price) }}</span>
            </div>

            <div class="cart-col quantity-col">
              <div class="quantity-controls">
                <button
                  @click="updateQuantity(item.product.id, item.quantity - 1)"
                  class="quantity-btn"
                  :disabled="item.quantity <= 1"
                >
                  -
                </button>
                <input
                  type="number"
                  v-model="item.quantity"
                  min="1"
                  @change="updateQuantity(item.product.id, item.quantity)"
                  class="quantity-input"
                >
                <button
                  @click="updateQuantity(item.product.id, item.quantity + 1)"
                  class="quantity-btn"
                >
                  +
                </button>
              </div>
            </div>

            <div class="cart-col total-col">
              <span class="item-total">Rs.{{ formatPrice(item.product.price * item.quantity) }}</span>
            </div>
          </div>
        </div>

        <div class="cart-summary">
          <h2 class="summary-title">Order Summary</h2>

          <div class="summary-row">
            <span>Subtotal</span>
            <span>Rs.{{ formatPrice(totalPrice) }}</span>
          </div>

          <div class="summary-row">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>

          <div class="summary-row total-row">
            <span>Total</span>
            <span>Rs.{{ formatPrice(totalPrice) }}</span>
          </div>

          <div class="checkout-actions">
            <router-link to="/checkout" class="checkout-btn">
              PROCEED TO CHECKOUT
            </router-link>
            <router-link to="/" class="continue-shopping-btn">
              CONTINUE SHOPPING
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'Cart',
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['totalPrice'])
  },
  methods: {
    ...mapActions(['removeFromCart', 'updateCartQuantity']),
    formatPrice(price) {
      return price.toLocaleString()
    },
    updateQuantity(productId, quantity) {
      if (quantity < 1) return
      this.updateCartQuantity({ productId, quantity })
    }
  }
}
</script>

<style scoped>
.cart-page {
  padding: 30px 0 60px;
}

.page-title {
  margin-bottom: 30px;
  color: #1176b8;
}

.empty-cart {
  text-align: center;
  padding: 50px 0;
  background-color: #f9f9f9;
  border-radius: 4px;
}

.continue-shopping {
  color: #1176b8;
  text-decoration: none;
  font-weight: bold;
}

.continue-shopping:hover {
  text-decoration: underline;
}

.cart-container {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.cart-items {
  flex: 2;
  min-width: 500px;
}

@media (max-width: 768px) {
  .cart-items {
    min-width: 100%;
  }
}

.cart-header {
  display: flex;
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 4px 4px 0 0;
  font-weight: bold;
}

.cart-item {
  display: flex;
  padding: 15px;
  border-bottom: 1px solid #eee;
}

.cart-col {
  padding: 0 10px;
}

.product-col {
  flex: 3;
}

.price-col, .total-col {
  flex: 1;
  display: flex;
  align-items: center;
}

.quantity-col {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-info {
  display: flex;
  align-items: center;
}

.product-image {
  width: 80px;
  height: 80px;
  margin-right: 15px;
}

.product-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.product-details {
  display: flex;
  flex-direction: column;
}

.product-name {
  color: #333;
  text-decoration: none;
  margin-bottom: 10px;
  font-weight: bold;
}

.product-name:hover {
  color: #1176b8;
}

.remove-btn {
  background: none;
  border: none;
  color: #999;
  text-decoration: underline;
  cursor: pointer;
  padding: 0;
  text-align: left;
  font-size: 14px;
}

.remove-btn:hover {
  color: #ff4500;
}

.quantity-controls {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
}

.quantity-btn {
  background-color: #f5f5f5;
  border: none;
  width: 30px;
  height: 30px;
  font-size: 16px;
  cursor: pointer;
}

.quantity-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.quantity-input {
  width: 40px;
  height: 30px;
  text-align: center;
  border: none;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
}

.item-total {
  font-weight: bold;
}

.cart-summary {
  flex: 1;
  min-width: 300px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 4px;
  align-self: flex-start;
}

.summary-title {
  margin-bottom: 20px;
  font-size: 18px;
  color: #333;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.total-row {
  font-weight: bold;
  font-size: 18px;
  border-bottom: none;
}

.checkout-actions {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.checkout-btn, .continue-shopping-btn {
  text-align: center;
  padding: 12px;
  border-radius: 4px;
  font-weight: bold;
  text-decoration: none;
}

.checkout-btn {
  background-color: #1176b8;
  color: white;
}

.continue-shopping-btn {
  background-color: #f5f5f5;
  color: #333;
}
</style>
