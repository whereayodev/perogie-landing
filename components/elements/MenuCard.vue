<script setup lang="ts">
import type { MenuCard } from '~/types'

withDefaults(defineProps<MenuCard>(), {})
</script>
<template>
  <div class="container col menu-card">
    <ElementsImageSlider :pictures="images" />
    <div class="container col w100p g20 data-container">
      <div class="container col g15 w100p info">
        <NuxtLink external :to="productLink">{{ productName }}</NuxtLink>
        <p>{{ productSpecs }}</p>
      </div>
      <p class="price">{{ productPrice }}</p>
    </div>
  </div>
</template>
<style lang="scss">
.menu-card {
  width: 300px;

  .data-container {
    padding-top: 25px;

    .info {
      a {
        font-weight: 600;
        font-size: 16px;
        line-height: 125%;
        letter-spacing: 0.02em;
        text-transform: capitalize;

        text-decoration: none;

        color: $color-dark;
      }

      p {
        font-size: 15px;
        line-height: 18px;
        letter-spacing: 0.02em;

        color: $color-grey;

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }

    .price {
      font-weight: 400;
      font-size: 16px;
      line-height: 125%;
      letter-spacing: 0.02em;
      text-transform: capitalize;

      color: $color-dark;
    }
  }
}
</style>
