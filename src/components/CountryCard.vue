<template>
  <v-card class="py-1 px-4 ma-3 grey--text text--darken-2" max-width="500">
    <v-row>
      <v-col cols="3">
        <v-img
          :src="country.flag"
          :alt="`Flag of ${country.name}`"
          class="flag-shadow"
        />
      </v-col>
      <v-col cols="9">
        <div class="display-1 blue-grey--text text--darken-3">
          {{ country.name }}
        </div>
        <div>
          Region: <strong>{{ country.region }}</strong>
        </div>
        <div>
          Capital: <strong>{{ country.capital }}</strong>
        </div>
        <div>
          Population: <strong>{{ country.population }}</strong>
        </div>
      </v-col>
    </v-row>
    <v-expansion-panels class="mb-3">
      <v-expansion-panel>
        <v-expansion-panel-header>Timezones</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div v-for="timezone in country.timezones" :key="timezone">
            {{ timezone }}
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>Currencies</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div v-for="currency in country.currencies" :key="currency.code">
            {{ `${currency.name} ${currency.symbol}` }}
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>Name Translations</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div
            v-for="translation in filterdTranslations"
            :key="translation.key"
          >
            {{ translation.key }}: {{ translation.value }}
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Country } from "@/types";

export default Vue.extend({
  props: {
    country: {
      required: true,
      type: Object as () => Country
    },
    translations: {
      required: false,
      default: Array
    }
  },

  computed: {
    filterdTranslations(): { key: string; value: string }[] {
      const allTranslations = Object.entries(this.country.translations).map(
        ([key, value]) => ({
          key,
          value
        })
      );

      return this.translations.length === 0
        ? allTranslations
        : allTranslations.filter(({ key }) => this.translations.includes(key));
    }
  }
});
</script>

<style lang="css" scoped>
.flag-shadow {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
</style>
