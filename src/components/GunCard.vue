<template>
  <div class="col">
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
      this.$emit("detailsModalHandler", { id: this.id });
    },
  },
};
</script>

<style></style>