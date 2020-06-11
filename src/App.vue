<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      REST Countries API app example
    </v-app-bar>
    <v-content>
      <v-row>
        <v-col cols="3">
          <v-card>
            <v-card-text>
              <v-radio-group v-model="selectedRegion" mandatory>
                <v-radio
                  v-for="region in regions"
                  :key="region"
                  :label="region"
                  :value="region"
                >
                </v-radio>
              </v-radio-group>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="9">
          <country-card
            v-for="country in filteredCountries"
            :key="country.alpha2Code"
            :country="country"
            :translations="defaulTranslations"
          />
        </v-col>
      </v-row>
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
