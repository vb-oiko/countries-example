<template>
  <v-card class="py-1 px-4 ma-3 grey--text text--darken-2" width="500">
    <v-row>
      <v-col cols="3">
        <v-skeleton-loader type="image" height="70" />
      </v-col>
      <v-col cols="9">
        <v-skeleton-loader type="heading" height="40" />
        <v-skeleton-loader v-for="i in 3" :key="i" type="text" height="24" />
      </v-col>
    </v-row>
    <v-expansion-panels v-for="i in 3" :key="i" class="mb-3">
      <v-expansion-panel>
        <v-expansion-panel-header>
          <v-skeleton-loader type="text" />
        </v-expansion-panel-header>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
