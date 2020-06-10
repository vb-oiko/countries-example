<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      REST Countries API app example
    </v-app-bar>

    <v-content>
      <div v-for="country in countries" :key="country.alpha2Code">
        {{ country.name }}
      </div>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import CountriesService from "./services/countries-service";
import { Country } from "@/types";

export default Vue.extend({
  name: "App",

  components: {},

  data() {
    return {
      countries: [] as Country[],
    };
  },

  async mounted() {
    this.countries = await CountriesService.fetchAll();
    console.warn(this.countries[0]);
  },
});
</script>
