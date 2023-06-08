<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: null
  }
})
</script>
<template>
  <div class="container row g15 w100p align center menu-heading">
    <img v-if="icon != null" :src="icon" class="icon" alt="menu-icon" />
    <h2>{{ text }}</h2>
  </div>
</template>
<style lang="scss">
.menu-heading {
  max-width: 1245px;

  .icon {
    max-width: 68px;
    max-height: 44px;

    object-fit: contain;
  }
}
</style>
