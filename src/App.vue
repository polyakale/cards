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
  provide() {
    return {
      guns: [
        {
          id: 1,
          image: "AK47.png",
          name: "AK-47",
          type: "Assault rifle",
          placeOfOrigin: "Soviet Union",
          designer: "Mikhail Kalashnikov",
          designed: "1947",
          cartridge: "7.62x39mm",
          muzzleVelocity: "715 m/s",
          description: [
            "The AK-47, officially known as the Avtomat Kalashnikova, is a gas-operated assault rifle that became one of the most widely used firearms in the world. Its design is based on simplicity, reliability, and ease of production, which contributed to its mass adoption by various military forces.",
            "Renowned for its durability, the AK-47 can function effectively in harsh conditions, including extreme temperatures and dirt. Its 7.62x39mm cartridge offers a good balance between recoil and stopping power, making it a favored choice in many conflicts around the globe.",
          ],
        }
      ],
    }
  },
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
  background: rgb(102, 85, 62) !important;
  border: 3px inset goldenrod !important;
  color: rgb(204, 204, 204) !important;
  margin-left: 4px !important;
}

.search-label {
  font-weight: bold;
  font-size: 21px;
}

.my-menu {
  position: relative;
  text-align: center;
  font-weight: bold;
  font-size: 23px;
}

.my-menu-container {
  justify-content: center;
  position: relative;
  display: flex;
  flex-grow: 1;
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
  color: rgb(153, 153, 153);
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
  transition: all 0.5s ease;
  border-radius: 55px;
  z-index: 0;
}

/* On hover, move the animation background */
.nav-link:nth-child(1):hover~.animation {
  width: 100px;
  left: 0;
  background-color: #815f1a;
}

.nav-link:nth-child(2):hover~.animation {
  width: 110px;
  left: 100px;
  background-color: #8f8f8f;
}

.nav-link:nth-child(3):hover~.animation {
  width: 100px;
  left: 210px;
  background-color: #30729e;
}
</style>
