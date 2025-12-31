<script setup lang="ts">
  const minYear = defineModel('minYear', {type: String, required: true});
  const minCapacity = defineModel('minCapacity', {type: String, required: true});
  
  const currentYear = new Date().getFullYear();
</script>

<template>
  <form>
    <h3 class="pref-wiz-header">
      Podaj minimalny rok produkcji auta.
    </h3>
    <div class="flex flex-col md:flex-row lg:mx-8 my-4 xs:my-6 md:my-8 gap-y-1 gap-x-8 lg:gap-x-12">
      <input type="range" v-model="minYear" id="price" :min="currentYear - 10" :max="currentYear" step="1" class="basis-1/2">
      <label for="price">Auto nie starsze niż {{ minYear }} r.</label>
    </div>
    <h3 class="pref-wiz-header">
      Podaj minimalną ilość miejsc w samochodzie.
    </h3>
    <div class="grid grid-cols-2 gap-4 xs:gap-6 md:gap-8 my-4 xs:m-6 md:m-8">
      <div>
        <input type="radio" id="capacity-two" value="2" v-model="minCapacity">
        <label for="capacity-two" class="ml-3">2 osoby</label>
      </div>
      <div>
        <input type="radio" id="capacity-four" value="4" v-model="minCapacity">
        <label for="capacity-four" class="ml-3">4 osoby</label>
      </div>
      <div>
        <input type="radio" id="capacity-five" value="5" v-model="minCapacity">
        <label for="capacity-five" class="ml-3">5 osób</label>
      </div>
      <div>
        <input type="radio" id="capacity-more" value="6" v-model="minCapacity">
        <label for="capacity-more" class="ml-3">6 osób i więcej</label>
      </div>
    </div>
  </form>
</template>