<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" stateless color="primary" clipped>
      <v-radio-group v-model="selectedRegion" mandatory dark class="ml-3">
        <v-radio
          v-for="region in regions"
          :key="region"
          :label="region"
          :value="region"
        >
        </v-radio>
      </v-radio-group>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="ml-2">REST Countries API app example</span>
    </v-app-bar>

    <v-content>
      <country-card
        v-for="country in filteredCountries"
        :key="country.alpha2Code"
        :country="country"
        :translations="defaulTranslations"
      />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import CountriesService from "./services/countries-service";
import { Country } from "@/types";
import CountryCard from "@/components/CountryCard.vue";

const EMPTY_REGION = "Not Applicable";
const ALL_REGIONS = "All";

export default Vue.extend({
  name: "App",

  components: {
    CountryCard
  },

  data() {
    return {
      drawer: true,
      countries: [] as Country[],
      defaulTranslations: ["de", "es", "it"],
      selectedRegion: ALL_REGIONS
    };
  },

  computed: {
    regions(): string[] {
      const regions = [
        ...new Set(this.countries.map(country => country.region))
      ].map(region => (region === "" ? EMPTY_REGION : region));

      return [...regions, ALL_REGIONS];
    },

    filteredCountries(): Country[] {
      if (this.selectedRegion === ALL_REGIONS) {
        return this.countries;
      }

      const filterRegion =
        this.selectedRegion === EMPTY_REGION ? "" : this.selectedRegion;

      return this.countries.filter(({ region }) => region === filterRegion);
    }
  },

  async mounted() {
    this.countries = await CountriesService.fetchAll();
  }
});
</script>
