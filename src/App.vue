<template>
  <div class="container-fluid">
    <nav class="my-border p-4 d-flex justify-content-between align-items-center">
      <!-- Menu -->
      <div class="my-menu">
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/table">Guns-Table</RouterLink> |
        <RouterLink to="/card">Cards</RouterLink> |
      </div>
      <!-- Search -->
      <div class="d-flex align-items-center" role="search">
        <label class="search-label form-label text-nowrap m-0">Searcher:</label>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-success button" type="submit">Search</button>
      </div>
    </nav>
  </div>

  <div class="p-2">
    <RouterView />
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {};
</script>

<style scoped></style>
