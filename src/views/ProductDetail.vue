<template>
  <div class="product-detail" v-if="product">
    <div class="container">
      <div class="breadcrumb">
        <router-link to="/">Home</router-link> >
        <router-link to="/">{{ product.category }}</router-link> >
        <span>{{ product.name }}</span>
      </div>

      <div class="product-container">
        <div class="product-images">
          <div class="main-image">
            <img :src="selectedImage" :alt="product.name">
          </div>
          <div class="thumbnail-container">
            <div
              v-for="(image, index) in product.images"
              :key="index"
              class="thumbnail"
              :class="{ active: selectedImage === image }"
              @click="selectedImage = image"
            >
              <img :src="image" :alt="product.name">
            </div>
          </div>
        </div>

        <div class="product-info">
          <h1 class="product-title">{{ product.name }}</h1>

          <div class="product-pricing">
            <div class="price-container">
              <span class="price">Rs.{{ formatPrice(product.price) }}</span>
              <span v-if="product.savings > 0" class="regular-price">Rs.{{ formatPrice(product.regularPrice) }}</span>
            </div>
            <div v-if="product.savings > 0" class="savings">
              Save Rs.{{ formatPrice(product.savings) }}
            </div>
          </div>

          <div class="quantity-selector">
            <span>Quantity</span>
            <div class="quantity-controls">
              <button @click="decrementQuantity" class="quantity-btn">-</button>
              <input type="number" v-model="quantity" min="1" class="quantity-input">
              <button @click="incrementQuantity" class="quantity-btn">+</button>
            </div>
          </div>

          <div class="product-actions">
            <button @click="addToCartHandler" class="add-to-cart-btn">
              ADD TO CART
            </button>
            <button class="buy-now-btn">
              BUY IT NOW
            </button>
          </div>

          <div class="product-description">
            <ul class="description-list">
              <li v-for="(item, index) in product.description" :key="index">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>

      <section class="recommended-products">
        <h2 class="section-title">We Also Recommend</h2>
        <div class="recommended-grid">
          <product-card
            v-for="recommendedProduct in recommendedProducts"
            :key="recommendedProduct.id"
            :product="recommendedProduct"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'ProductDetail',
  components: {
    ProductCard
  },
  data() {
    return {
      quantity: 1,
      selectedImage: ''
    }
  },
  computed: {
    ...mapGetters(['getProductById']),
    product() {
      const product = this.getProductById(this.$route.params.id);
      if (product && !this.selectedImage) {
        this.selectedImage = product.images[0]
      }
      return product
    },
    recommendedProducts() {
      return this.$store.state.products
        .filter(p => p.id !== this.product.id)
        .slice(0, 5)
    }
  },
  methods: {
    ...mapActions(['addToCart']),
    formatPrice(price) {
      return price.toLocaleString()
    },
    incrementQuantity() {
      this.quantity++
    },
    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity--
      }
    },
    addToCartHandler() {
      this.addToCart({
        product: this.product,
        quantity: parseInt(this.quantity)
      })
    }
  }
}
</script>

<style scoped>
.product-detail {
  padding: 30px 0;
}

.breadcrumb {
  margin-bottom: 20px;
  font-size: 14px;
  color: #666;
}

.breadcrumb a {
  color: #1176b8;
  text-decoration: none;
}

.breadcrumb a:hover {
  text-decoration: underline;
}

.product-container {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 40px;
}

.product-images {
  flex: 1;
  min-width: 300px;
}

.main-image {
  border: 1px solid #eee;
  margin-bottom: 15px;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  background-color: white;
}

.main-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.thumbnail-container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.thumbnail {
  width: 60px;
  height: 60px;
  border: 1px solid #eee;
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
}

.thumbnail.active {
  border-color: #1176b8;
}

.thumbnail img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.product-info {
  flex: 1;
  min-width: 300px;
}

.product-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.product-pricing {
  margin-bottom: 20px;
}

.price-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.price {
  font-size: 24px;
  font-weight: bold;
  color: #1176b8;
}

.regular-price {
  font-size: 16px;
  text-decoration: line-through;
  color: #999;
}

.savings {
  margin-top: 5px;
  color: #ff4500;
  font-weight: bold;
}

.quantity-selector {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
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

.quantity-input {
  width: 50px;
  height: 30px;
  text-align: center;
  border: none;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
}

.product-actions {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
}

.add-to-cart-btn, .buy-now-btn {
  padding: 12px 20px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  flex: 1;
}

.add-to-cart-btn {
  background-color: #1176b8;
  color: white;
}

.buy-now-btn {
  background-color: #ff4500;
  color: white;
}

.product-description {
  border-top: 1px solid #eee;
  padding-top: 20px;
}

.description-list {
  padding-left: 20px;
  margin-bottom: 0;
}

.description-list li {
  margin-bottom: 10px;
}

.section-title {
  font-size: 20px;
  margin-bottom: 20px;
  color: #1176b8;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.recommended-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

@media (max-width: 768px) {
  .recommended-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .recommended-grid {
    grid-template-columns: 1fr;
  }
}
</style>
