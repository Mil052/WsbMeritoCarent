<script setup lang="ts">
  import type { PropType } from 'vue';

  const gearbox = defineModel('gearbox', {type: String as PropType<string | null>});
</script>

<template>
  <div>
    <div class="my-8">
      <input type="radio" id="manual" value="Manualna" v-model="gearbox">
      <label for="manual" class="ml-3">
        Manualna
      </label>
    </div>
    <div class="my-8">
      <input type="radio" id="automatic" value="Automatyczna" v-model="gearbox">
      <label for="automatic" class="ml-3">
        Automatyczna
      </label>
    </div>
  </div>
</template>