<template>
  <h2>Cards</h2>
  <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
    <GunCard v-for="gun in guns" :key="gun.id" :id="gun.id" @detailsModalHandling="detailsModalHandler">
      <template v-slot:image>
        <img :src="gun.image" :alt="gun.name" class="card-image" />
      </template>
      <template v-slot:name>
        <h5>{{ gun.name }}</h5>
      </template>
    </GunCard>
  </div>

  <GunModal :name="selectedGun.name" v-if="selectedGun">
    <img :src="selectedGun.image" :alt="selectedGun.name"
      class="float-start col-12 col-sm-6 col-lg-4 me-1 p-2 card-image">
    <div v-html="descFormat"></div>
  </GunModal>
</template>

<script>
class Gun {
  constructor(id = 0, image = null, name = null, type = null, placeOfOrigin = null, designer = null, designed = 0, cartridge = null, muzzleVelocity = null, description = []) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.type = type;
    this.placeOfOrigin = placeOfOrigin;
    this.designer = designer;
    this.designed = designed;
    this.cartridge = cartridge;
    this.muzzleVelocity = muzzleVelocity;
    this.description = description;
  }
}

import GunCard from '@/components/GunCard.vue';
import GunModal from '@/components/GunModal.vue';

export default {
  props: ["guns"],
  components: {
    GunCard,
    GunModal,
  },
  data() {
    return {
      selectedGun: null,
    };
  },
  methods: {
    detailsModalHandler(id) {
      this.selectedGun = this.guns.find((g) => g.id === id.id);
      console.log(id.id);
    },
  },
  computed: {
    descFormat() {
      return this.selectedGun && this.selectedGun.description ? this.selectedGun.description.map(d => `<p>${d}</p>`).join("") : `<p>No description available</p>`;
    },
  },
};
</script>

<style></style>
