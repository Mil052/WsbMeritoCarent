<script setup lang="ts">
  import { fuelTypes } from '@/utilities/models/carModel';
  import type { PropType } from 'vue'; 

  const fuel = defineModel('fuel', {type: String as PropType<string | null>});
</script>

<template>
  <div>
    <div v-for="(fuelType, index) in fuelTypes" :key="index" class="my-8">
      <input type="radio" :id="fuelType" :value="fuelType" v-model="fuel">
      <label :for="fuelType" class="ml-3">{{ fuelType }}</label>
    </div>
  </div>
</template>