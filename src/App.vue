<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      REST Countries API app example
    </v-app-bar>

    <v-content>
      <country-card
        v-for="country in countries"
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

export default Vue.extend({
  name: "App",

  components: {
    CountryCard
  },

  data() {
    return {
      countries: [] as Country[],
      defaulTranslations: ["de", "es", "it"]
    };
  },

  async mounted() {
    this.countries = await CountriesService.fetchAll();
  }
});
</script>
