<script setup lang="ts">
  import { carMakers } from '@/utilities/models/carModel';

  const maker = defineModel('maker', {type: String, required: true});
</script>

<template>
    <form>
      <h3 class="pref-wiz-header">
        Jakiej marki auta preferujesz?
      </h3>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 xs:gap-6 md:gap-8 my-4 xs:m-6 md:m-8">
        <div class="m-1" v-for="(carMaker, index) in carMakers" :key="index">
          <input type="radio" v-model="maker" :value="carMaker" :id="carMaker">
          <label :for="carMaker" class="ml-3">{{ carMaker }}</label>
        </div>
      </div>
    </form>
</template>