<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true
  },
  href: {
    type: String,
    required: true
  }
})
</script>
<template>
  <nuxt-link class="container row g5 align justify center short-link" :to="href">
    {{ text }}
    <SvgoArrowRightLink :font-controlled="false" filled="false" />
  </nuxt-link>
</template>
<style lang="scss">
a.short-link {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  text-transform: capitalize;

  text-decoration: none;

  color: #717171;
}
</style>
