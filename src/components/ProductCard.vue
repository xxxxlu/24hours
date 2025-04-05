<template>
  <div class="product-card">
    <router-link :to="'/product/' + product.id" class="product-link">
      <div class="product-image">
        <img :src="product.image" :alt="product.name">
      </div>
      <div class="product-info">
        <h3 class="product-name">{{ product.name }}</h3>
        <div class="product-price">
          <span class="sale-price">Rs.{{ formatPrice(product.price) }}</span>
          <span v-if="product.savings > 0" class="regular-price">Rs.{{ formatPrice(product.regularPrice) }}</span>
        </div>
        <div v-if="product.savings > 0" class="product-savings">
          Save Rs.{{ formatPrice(product.savings) }}
        </div>
      </div>
    </router-link>
    <button @click="addToCartHandler" class="add-to-cart-btn">ADD TO CART</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(['addToCart']),
    formatPrice(price) {
      return price.toLocaleString()
    },
    addToCartHandler() {
      this.addToCart({
        product: this.product,
        quantity: 1  // 设置默认数量为1，因为这里没有quantity输入
      })
    }
  }
}
</script>

<style scoped>
.product-card {
  border: 1px solid #eee;
  border-radius: 4px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.product-link {
  text-decoration: none;
  color: inherit;
  display: block;
  flex: 1;
}

.product-image {
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: white;
}

.product-image img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}

.product-info {
  padding: 15px;
}

.product-name {
  font-size: 14px;
  margin-bottom: 10px;
  min-height: 40px;
  color: #333;
}

.product-price {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
}

.sale-price {
  font-weight: bold;
  color: #1176b8;
}

.regular-price {
  text-decoration: line-through;
  color: #999;
  font-size: 14px;
}

.product-savings {
  color: #ff4500;
  font-size: 14px;
  font-weight: bold;
}

.add-to-cart-btn {
  background-color: #1176b8;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  width: 100%;
  font-weight: bold;
  transition: background-color 0.3s;
}

.add-to-cart-btn:hover {
  background-color: #0e5c92;
}
</style>
