<template>
  <div class="text-center">
    <v-container>
      <v-row justify="center">
        <v-container class="max-width">
          <v-pagination
            v-model="page"
            class="my-4"
            :length="5"
          >
            <template v-slot:page="{ page }">
              <span
                class="custom-pagination-item"
                :class="{ 'custom-selected-page': page === this.page }"
              >
                {{ page }}
              </span>
            </template>
          </v-pagination>

          <!-- Add arrow buttons -->
          <v-btn @click="goToPreviousPage" icon>
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn @click="goToNextPage" icon>
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-container>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
    };
  },
  methods: {
    goToPreviousPage() {
      if (this.page > 1) {
        this.page--;
      }
    },
    goToNextPage() {
      // Assuming 40 is the total number of pages
      if (this.page < 40) {
        this.page++;
      }
    },
  },
};
</script>

<style scoped>
.text-center {
  /* Add your styling for the text-center class if needed */
}

.custom-pagination-item {
  margin: 0 4px !important;
  padding: 8px !important;
  cursor: pointer !important;
}

.custom-selected-page {
  background-color: green !important;
  color: white !important;
  border-radius: 4px !important;
}
</style>
