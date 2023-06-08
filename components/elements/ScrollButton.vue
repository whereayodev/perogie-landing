<script setup lang="ts">
defineProps({
  left: {
    type: Boolean,
    required: false
  }
})
</script>
<template>
  <button class="scroll-button icon-only" :class="{ left: left }">
    <SvgoChevronRight v-if="!left" :font-controlled="false" filled="false" />
    <SvgoChevronLeft v-if="left" :font-controlled="false" filled="false" />
  </button>
</template>
<style scoped lang="scss">
.scroll-button {
  position: absolute;
  width: 34px;
  height: 34px;
  top: calc(50% - 34px / 2 - 1px);
  right: 5px;
  padding: 0;

  z-index: 2;

  border-radius: 99px;

  @include border($all: true);
  @include shadow-m;

  &.left {
    right: unset;
    left: 5px;
  }
}
</style>
