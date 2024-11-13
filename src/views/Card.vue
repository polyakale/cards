<template>
  <h2>Cards</h2>
  <div class="card-responsive">
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
      <NukeCard
        v-for="nuke in filteredNukes"
        :key="nuke.id"
        :id="nuke.id"
        @detailsModalHandling="detailsModalHandler(nuke)"
      >
        <template v-slot:image>
          <img :src="nuke.image" :alt="nuke.name" class="card-image" />
        </template>
        <template v-slot:name>
          <h5 v-html="searchIndicator(nuke.name)"></h5>
        </template>
      </NukeCard>
    </div>

    <NukeModal v-if="selectedNuke" :name="searchIndicator(selectedNuke.name)" @close="selectedNuke = null">
      <img
        :src="selectedNuke.image"
        :alt="selectedNuke.name"
        class="float-start col-12 col-sm-6 col-lg-4 me-1 modal-image"
      />
      <div v-html="descFormat"></div>
    </NukeModal>
  </div>
</template>

<script>
import NukeCard from "../components/NukeCard.vue";
import NukeModal from "../components/NukeModal.vue";

class Nuke {
  constructor({
    id,
    image,
    name,
    type,
    placeOfOrigin,
    designer,
    designed,
    cartridge,
    muzzleVelocity,
    description,
  }) {
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
  props: ["nukes", "searchedWord"],
  components: {
    NukeCard,
    NukeModal,
  },
  data() {
    return {
      selectedNuke: null,
    };
  },
  computed: {
    descFormat() {
      return this.selectedNuke?.description?.length
        ? this.selectedNuke.description.map((d) => this.searchIndicator(d)).join("")
        : `<p>No description available</p>`;
    },
    filteredNukes() {
      const lowerCaseSearch = this.searchedWord?.toLowerCase() || "";
      return this.nukes.filter((n) => {
        const nameMatches = n.name.toLowerCase().includes(lowerCaseSearch);
        const descriptionMatches = Array.isArray(n.description)
          ? n.description.some((desc) => desc.toLowerCase().includes(lowerCaseSearch))
          : false;
        return nameMatches || descriptionMatches;
      });
    },
  },
  methods: {
    detailsModalHandler(nuke) {
      const foundNuke = this.nukes.find((n) => n.id === nuke.id);
      this.selectedNuke = foundNuke ? new Nuke(foundNuke) : null; // Corrected to use Nuke
    },
    searchIndicator(text) {
      if (this.searchedWord) {
        const searchRegex = new RegExp(this.searchedWord, "gi");
        return text.replace(searchRegex, (match) => `<span class="mark">${match}</span>`);
      }
      return text;
    },
    onClickDetails(nuke) {
      this.selectedNuke = nuke;
    },
  },
};
</script>