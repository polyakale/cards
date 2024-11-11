<template>
  <h2>Cards</h2>
  <div class="card-responsive">
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
      <GunCard v-for="gun in filteredGuns" :key="gun.id" :id="gun.id" @detailsModalHandling="detailsModalHandler(gun)">
        <template v-slot:image>
          <img :src="gun.image" :alt="gun.name" class="card-image" />
        </template>
        <template v-slot:name>
          <h5 v-html="searchIndicator(gun.name)"></h5>
        </template>
      </GunCard>
    </div>

    <GunModal v-if="selectedGun" :name="searchIndicator(selectedGun.name)" @close="selectedGun = null">
      <img :src="selectedGun.image" :alt="selectedGun.name"
        class="float-start col-12 col-sm-6 col-lg-4 me-1 modal-image" />
      <div v-html="descFormat"></div>
    </GunModal>
  </div>
</template>

<script>
import GunCard from "../components/GunCard.vue";
import GunModal from "../components/GunModal.vue";
class Gun {
  constructor({ id, image, name, type, placeOfOrigin, designer, designed, cartridge, muzzleVelocity, description, }) {
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
export default {
  props: {
    searchedWord: {
      type: String,
      default: null
    },
  }
  ["guns"],
  components: {
    GunCard,
    GunModal,
  },
  data() {
    return {
      selectedGun: null,
    };
  },
  computed: {
    descFormat() {
      return this.selectedGun?.description?.length
        ? this.selectedGun.description.map((d) => this.searchIndicator(d)).join("")
        : `<p>No description available</p>`;
    },
    filteredGuns() {
      const lowerCaseSearch = this.searchedWord?.toLowerCase() || "";
      return this.guns.filter((g) => {
        const nameMatches = g.name.toLowerCase().includes(lowerCaseSearch);
        const descriptionMatches = g.description.some(desc =>
          desc.toLowerCase().includes(lowerCaseSearch)
        );
        return nameMatches || descriptionMatches;
      });
    },
  },
  methods: {
    detailsModalHandler(gun) {
      const foundGun = this.guns.find(g => g.id === gun.id);
      this.selectedGun = foundGun ? new Gun(foundGun) : null;
    },
    searchIndicator(text) {
      if (this.searchedWord) {
        const searchRegex = new RegExp(this.searchedWord, "gi");
        return text.replace(searchRegex, (match) => `<span class="mark">${match}</span>`);
      }
      return text;
    },
    onClickDetails(gun) {
      this.selectedGun = gun;
    },
  },
};
</script>
