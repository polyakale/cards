<template>

  <nav class="p-4 d-flex justify-content-between align-items-center">
    <h1 class="main-title">Guns</h1>
    <!-- Menu -->
    <div class="my-menu-container">
      <div class="my-menu">
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/table" class="nav-link">Guns-Table</RouterLink>
        <RouterLink to="/card" class="nav-link">Cards</RouterLink>
        <div class="animation"></div>
      </div>
    </div>
    <!-- Search -->
    <div class="d-flex align-items-center" role="search">
      <label class="search-label form-label text-nowrap m-0">Searcher:</label>
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="searchInput"
        @keypress.enter="submitSearch" />
      <button class="btn btn-success button" type="button" @click="submitSearch">Search</button>
    </div>
  </nav>

  <div class="p-2">
    <RouterView :searchedWord="searchedWord" />
  </div>
</template>


<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  data() {
    return {
      searchedWord: null,
      searchInput: "",
    };
  },
  methods: {
    submitSearch() {
      if (this.searchInput.trim() !== "") {
        this.searchedWord = this.searchInput;
      } else {
        this.searchedWord = null;
      }
    },
  },
};
</script>

<style scoped>
.main-title {
  text-align: center;
  font-weight: bold;
  font-size: 42px;
}

input {
  border: 3px inset goldenrod !important;
  background: rgb(102, 85, 62) !important;
  color: rgb(204, 204, 204) !important;
  margin-left: 4px !important;
}

.my-menu-container {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  position: relative;
}

.search-label {
  font-weight: bold;
  font-size: 21px;
}

.my-menu {
  font-weight: bold;
  font-size: 23px;
  text-align: center;
  position: relative;
}

nav {
  position: relative;
  width: 100%;
  height: 50px;
  background-color: #5a492f;
  font-size: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 10px !important;
}

nav a {
  line-height: 50px;
  height: 100%;
  font-size: 15px;
  display: inline-block;
  position: relative;
  z-index: 1;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  color: white;
  cursor: pointer;
}

/* Specific widths for links */
.nav-link:nth-child(1) {
  width: 100px;
}

.nav-link:nth-child(2) {
  width: 110px;
}

.nav-link:nth-child(3) {
  width: 100px;
}

/* Animation background */
nav .animation {
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #1abc9c;
  transition: all 0.5s ease;
  border-radius: 8px;
  z-index: 0;
}

/* On hover, move the animation background */
.nav-link:nth-child(1):hover~.animation {
  width: 100px;
  left: 0;
  background-color: #1abc9c;
}

.nav-link:nth-child(2):hover~.animation {
  width: 110px;
  left: 100px;
  background-color: #e74c3c;
}

.nav-link:nth-child(3):hover~.animation {
  width: 100px;
  left: 210px;
  background-color: #3498db;
}
</style>
