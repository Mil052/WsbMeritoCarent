<script setup lang="ts">
  const maxMileage = defineModel('maxMileage', {type: String, required: true});
  const maxPrice = defineModel('maxPrice', {type: String, required: true});
</script>

<template>
  <form>
    <h3 class="pref-wiz-header">
      Podaj maksymalny przebieg auta.
    </h3>
    <div class="flex flex-col md:flex-row lg:mx-8 my-4 xs:my-6 md:my-8 gap-y-1 gap-x-8 lg:gap-x-12">
      <input type="range" v-model="maxMileage" id="mileage" min="50000" max="300000" step="10000" class="basis-1/2">
      <label for="mileage">Maks. przebieg: {{ maxMileage }} km</label>
    </div>
    <h3 class="pref-wiz-header">
      Podaj maksymalną cenę za godzinę wynajmu.
    </h3>
    <div class="flex flex-col md:flex-row lg:mx-8 my-4 xs:my-6 md:my-8 gap-y-1 gap-x-8 lg:gap-x-12">
      <input type="range" v-model="maxPrice" id="price" min="0" max="60" step="5" class="basis-1/2">
      <label for="price">Maksymalna cena: {{ maxPrice }} zł/godz.</label>
    </div>
  </form>
</template>