<template>
  <div class="payment-success">
    <div class="container">
      <div class="success-card">
        <div class="success-icon">✓</div>
        <h1 class="success-title">Payment Successful!</h1>
        <p class="success-message">Thank you for your purchase. Your order has been received and is now being processed.</p>

        <div class="order-details">
          <h2 class="details-title">Order Details</h2>

          <div class="details-row">
            <span class="details-label">Order Number:</span>
            <span class="details-value">{{ orderNumber }}</span>
          </div>

          <div class="details-row">
            <span class="details-label">Date:</span>
            <span class="details-value">{{ currentDate }}</span>
          </div>

          <div class="details-row">
            <span class="details-label">Payment Method:</span>
            <span class="details-value">Cash on Delivery</span>
          </div>

          <div class="details-row">
            <span class="details-label">Total:</span>
            <span class="details-value">Rs.{{ formatPrice(totalPrice + 150) }}</span>
          </div>
        </div>

        <p class="delivery-info">
          A confirmation has been sent to your email address.
          Your order will be delivered in 2-5 business days.
        </p>

        <div class="action-buttons">
          <router-link to="/" class="home-btn" @click="clearCart">
            CONTINUE SHOPPING
          </router-link>
          <button class="track-btn">
            TRACK ORDER
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PaymentSuccess',
  data() {
    return {
      orderNumber: 'ORD-' + Math.floor(100000 + Math.random() * 900000)
    }
  },
  computed: {
    ...mapGetters(['totalPrice']),
    currentDate() {
      const date = new Date()
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  },
  methods: {
    ...mapActions(['clearCart']),
    formatPrice(price) {
      return price.toLocaleString()
    }
  },
  mounted() {
    // In a real application, this would happen on the server side after payment confirmation
    this.clearCart()
  }
}
</script>

<style scoped>
.payment-success {
  padding: 60px 0;
  background-color: #f9f9f9;
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
}

.success-card {
  max-width: 600px;
  margin: 0 auto;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  padding: 40px;
  text-align: center;
}

.success-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  background-color: #4CAF50;
  color: white;
  font-size: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.success-title {
  font-size: 28px;
  color: #333;
  margin-bottom: 15px;
}

.success-message {
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
}

.order-details {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 30px;
  text-align: left;
}

.details-title {
  font-size: 18px;
  margin-bottom: 15px;
  color: #333;
}

.details-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
}

.details-row:last-child {
  border-bottom: none;
}

.details-label {
  font-weight: bold;
  color: #666;
}

.details-value {
  color: #333;
}

.delivery-info {
  margin-bottom: 30px;
  color: #666;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.home-btn, .track-btn {
  padding: 12px 20px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}

.home-btn {
  background-color: #1176b8;
  color: white;
}

.track-btn {
  background-color: #f5f5f5;
  color: #333;
  border: none;
}

@media (max-width: 768px) {
  .payment-success {
    padding: 30px 15px;
  }

  .success-card {
    padding: 20px;
  }

  .action-buttons {
    flex-direction: column;
    gap: 10px;
  }

  .home-btn, .track-btn {
    width: 100%;
  }
}
</style>
