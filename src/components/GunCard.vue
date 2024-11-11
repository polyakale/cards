<template>
  <div class="card-container">
    <div class="card">
      <slot name="image"></slot>
      <div class="card-body">
        <slot name="name"></slot>

        <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#gunModal"
          @click="onClickDetails()">
          Details
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  methods: {
    onClickDetails() {
      this.$emit("detailsModalHandling", { id: this.id });
    },
  },
};
</script>

<style scoped>
.card {
    transition: transform 0.2s ease-in-out, outline 0.2s, opacity 0.2s;
    border: 4px groove rgb(49, 43, 26)!important;
    background: rgb(56, 47, 33)!important;
    font-family: 'Courier New', monospace;
    flex: 1 1 calc(25% - 20px);
    color: white !important;
    margin: 10px;
}
.card:hover {
    border: 4px double rgba(224, 191, 0, 0.63)!important;
    outline: 5px solid rgba(0, 0, 0, 0.295);
    transform: translateY(3px);
    color: yellow!important;
    opacity: 0.8;
}
.card:not(:hover) {
    transition: transform 0.75s ease-in-out, outline 1s, opacity 0.8s;
    outline: 5px solid transparent;
    opacity: 1;
}
.card-container {
    justify-content: flex-start;
    flex-wrap: wrap; 
    display: flex;
}
.card-image {
    max-height: 170px;
    max-width: 240px;
    min-height: 170px;
    min-width: 240px;
}
.card-responsive {
    overflow-x: hidden;
    overflow-y: auto;
    height: 73vh;
}
.card-responsive::-webkit-scrollbar {
    width: 12px;
}
.card-responsive::-webkit-scrollbar-track {
    border: 1px solid #5c4e00;
    background: #6e6453;
    border-radius: 6px;
}
.card-responsive::-webkit-scrollbar-thumb {
    border: 1px solid #4b442f;
    background: #4d463d;
    border-radius: 6px;
}
.card-responsive::-webkit-scrollbar-thumb:hover {
    background: #524836c7;
} 
</style>