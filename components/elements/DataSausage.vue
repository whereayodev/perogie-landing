<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
})
</script>
<template>
  <NuxtLink class="button data-sausage" external :to="link"> <slot /> {{ text }}</NuxtLink>
</template>
<style lang="scss">
.data-sausage {
  @include border($all: true);
  @include bg-blur;
  position: absolute;
  z-index: 1;

  background: $color-light-50;
  color: $color-dark;

  width: fit-content;
  height: 40px;
  border-radius: 99px;
  top: 30px;

  &:first-of-type {
    left: 35px;
  }

  &:last-of-type {
    right: 35px;
  }

  svg {
    width: 18px;
    height: 18px;

    order: 0;
  }
}
</style>
