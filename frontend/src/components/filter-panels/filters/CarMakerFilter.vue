<script setup lang="ts">
  import { carMakers } from '@/utilities/models/carModel';
  import type { PropType } from 'vue';

  const maker = defineModel('maker', {type: String as PropType<string | null>});
</script>

<template>
  <select name="maker" v-model="maker" class="w-full px-2 py-1 outline-none border border-neutral-400 rounded-md">
    <option value="" >-- Wybierz markę --</option>
    <option v-for="(carMaker, index) in carMakers" :key="index" :value="carMaker">
      {{ carMaker }}
    </option>
  </select>
</template>