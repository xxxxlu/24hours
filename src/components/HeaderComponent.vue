<template>
  <header class="header">
    <div class="top-bar">
      <div class="container header-container">
        <div class="logo">
          <router-link to="/">
            <img src="https://ext.same-assets.com/876815985.png" alt="24hours.pk Logo">
          </router-link>
        </div>
        <div class="search-cart">
          <div class="search-form">
            <input type="text" placeholder="Search all products..." class="search-input">
            <button class="search-button">
              <span class="search-icon">🔍</span>
            </button>
          </div>
          <div class="auth-links">
            <router-link to="/" class="auth-link">Sign in</router-link>
            <span>or</span>
            <router-link to="/" class="auth-link">Create an Account</router-link>
          </div>
          <div class="cart-wrapper">
            <router-link to="/cart" class="cart-link">
              <span class="cart-icon">🛒</span>
              <span>CART</span>
              <span v-if="cartItemCount > 0" class="cart-count">{{ cartItemCount }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <nav class="main-nav">
      <div class="container">
        <ul class="nav-list">
          <li class="nav-item">
            <router-link to="/" class="nav-link">MORE</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HeaderComponent',
  computed: {
    ...mapGetters(['cartItemCount'])
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}

.logo img {
  height: 60px;
}

.search-cart {
  display: flex;
  align-items: center;
  gap: 15px;
}

.search-form {
  display: flex;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
}

.search-input {
  width: 250px;
  padding: 8px 12px;
  border: none;
  outline: none;
}

.search-button {
  background-color: #1176b8;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
}

.auth-links {
  font-size: 14px;
}

.auth-link {
  color: #1176b8;
  margin: 0 5px;
}

.cart-link {
  display: flex;
  align-items: center;
  background-color: #1176b8;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  position: relative;
}

.cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #ff4500;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

.cart-icon {
  margin-right: 5px;
}

.main-nav {
  background-color: #1176b8;
  padding: 10px 0;
}

.nav-list {
  list-style: none;
  display: flex;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin-right: 15px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  padding: 8px 12px;
  display: block;
}

.nav-link:hover {
  background-color: rgba(255,255,255,0.1);
}
</style>
