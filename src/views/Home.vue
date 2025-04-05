<template>
  <div class="home">
    <div class="hero-banner">
      <img src="https://ext.same-assets.com/3246991048.jpeg" alt="Kiryana Banner" class="banner-image">
    </div>

    <div class="container">
      <section class="products-section">
        <div class="section-header">
          <h2 class="section-title">BEST SELLERS</h2>
          <router-link to="/" class="view-all-link">More best sellers</router-link>
        </div>

        <div class="products-grid">
          <product-card v-for="product in products" :key="product.id" :product="product" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'Home',
  components: {
    ProductCard
  },
  computed: {
    ...mapState({
      products: state => state.products
    })
  }
}
</script>

<style scoped>
.home {
  padding-bottom: 50px;
}

.hero-banner {
  width: 100%;
  margin-bottom: 30px;
}

.banner-image {
  width: 100%;
  display: block;
}

.products-section {
  margin-bottom: 40px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.section-title {
  color: #1176b8;
  font-size: 20px;
  margin: 0;
}

.view-all-link {
  color: #1176b8;
  font-size: 14px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>
