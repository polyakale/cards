<template>
  <h2>Nukes Table</h2>
  <div class="table-responsive" v-if="filteredNukes.length">
    <table>
      <thead class="table-header">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Image</th>
          <th>Type</th>
          <th>Place of Origin</th>
          <th>Designer</th>
          <th>Designed</th>
          <th>Cartridge</th>
          <th>Muzzle Velocity</th>
        </tr>
      </thead>
      <tbody class="table-body">
        <tr v-for="nuke in filteredNukes" :key="nuke.id">
          <td>{{ nuke.id }}</td>
          <td v-html="searchIndicator(nuke.name)"></td>
          <td>
            <img class="table-image" :src="nuke.image" :alt="nuke.name" @click="onClickDetails(nuke)" />
          </td>
          <td v-html="searchIndicator(nuke.type)"></td>
          <td v-html="searchIndicator(nuke.placeOfOrigin)"></td>
          <td v-html="searchIndicator(nuke.designer)"></td>
          <td v-html="searchIndicator(nuke.designed)"></td>
          <td v-html="searchIndicator(nuke.cartridge)"></td>
          <td>{{ nuke.muzzleVelocity }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p v-else>No nukes found.</p>

  <NukeModal v-if="selectedNuke" :name="searchIndicator(selectedNuke.name)" @close="selectedNuke = null">
    <img :src="selectedNuke.image" :alt="selectedNuke.name"
      class="float-start col-12 col-sm-6 col-lg-4 me-1 modal-image" />
    <div v-html="searchIndicator(descFormat)"></div>
  </NukeModal>
</template>

<script>
import NukeModal from "../components/NukeModal.vue";

export default {
  props: {
    nukes: {
      type: Array,
      default: () => [], // Provide an empty array if nukes is undefined
    },
    searchedWord: {
      type: String,
      default: "", // Provide an empty string if searchedWord is undefined
    },
  },
  components: {
    NukeModal,
  },
  data() {
    return {
      nukes: [],
      selectedNuke: null,
    };
  },
  computed: {
    descFormat() {
      return Array.isArray(this.selectedNuke?.description)
        ? this.selectedNuke.description.map((d) => `<p>${d}</p>`).join("")
        : `<p>No description available</p>`;
    },
    computed: {
      filteredNukes() {
        const lowerCaseSearch = this.searchedWord?.toLowerCase() || "";
        return (this.nukes || []).filter((n) => {
          const nameMatches = n?.name?.toLowerCase().includes(lowerCaseSearch) || false;
          const descriptionMatches = Array.isArray(n?.description)
            ? n.description.some((desc) => desc?.toLowerCase().includes(lowerCaseSearch))
            : false;
          const typeMatches = n?.type?.toLowerCase().includes(lowerCaseSearch) || false;
          const originMatches = n?.placeOfOrigin?.toLowerCase().includes(lowerCaseSearch) || false;
          const designerMatches = n?.designer?.toLowerCase().includes(lowerCaseSearch) || false;
          const muzzleVelocityMatches = n?.muzzleVelocity?.toLowerCase().includes(lowerCaseSearch) || false;

          return (
            nameMatches ||
            descriptionMatches ||
            typeMatches ||
            originMatches ||
            designerMatches ||
            muzzleVelocityMatches
          );
        });
      },
    },
  },
  methods: {
    searchIndicator(text) {
      if (this.searchedWord) {
        const regex = new RegExp(this.searchedWord, "gi");
        return text ? text.replace(regex, (match) => `<span class="mark p-0">${match}</span>`) : text;
      }
      return text;
    },
    onClickDetails(nuke) {
      this.selectedNuke = nuke;
    },
  },
};
</script>