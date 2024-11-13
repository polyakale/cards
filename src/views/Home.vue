<template>
  <div class="carousel-container">
    <button class="carousel-arrow left" @click="prevImage">&#10094;</button>
    <div class="image-container">
      <div class="images" :style="getImagesStyle">
        <img 
          v-for="(image, index) in images" 
          :key="index"
          :src="image" 
          :class="['carousel-image', { active: index === currentIndex }]"
          alt="Carousel image" 
        />
      </div>
    </div>
    <button class="carousel-arrow right" @click="nextImage">&#10095;</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        '/AK47.png',
        '/favicon.png',
        '/AK47.png',
      ]
    };
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    }
  },
  computed: {
    getImagesStyle() {
      return {
        transform: `translateX(-${this.currentIndex * 100}%)`,
        transition: 'transform 0.5s ease-in-out'
      };
    }
  }
};
</script>

<style scoped>
.carousel-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 80%;
  height: 400px;
  margin: 0 auto;
}

.image-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.images {
  display: flex;
  width: 100%;
}

.carousel-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.carousel-image.active {
  opacity: 1;
}

.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  font-size: 24px;
  cursor: pointer;
  z-index: 1;
}

.left {
  left: 0;
}

.right {
  right: 0;
}
</style>
