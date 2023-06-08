<script setup lang="ts">
import { useElementBounding } from '@vueuse/core'

defineProps({
  blok: {
    type: Object,
    required: true
  }
})

const aboutActive: Ref<boolean> = ref(false)
const menuActive: Ref<boolean> = ref(false)

const root: Ref<HTMLElement | null> = ref(null)

const { top } = useElementBounding(root)
</script>
<template>
  <header ref="root" :class="{ top: top == 0 }" class="container row">
    <div class="container row left-section">
      <button class="button transparent" :class="{ active: aboutActive }">Perogie Land</button>
      <NuxtLink
        v-for="i of blok[1].LinksGroup"
        :key="i"
        :to="i.href.url"
        :class="{ active: menuActive }"
        class="button transparent"
      >
        {{ i.text }}
      </NuxtLink>
    </div>
    <div class="container row g5 right-section">
      <NuxtLink
        external
        to="https://www.ubereats.com/ca/store/perogies-land/R1dKOfUNTqCo8Awc5GcSaQ"
        class="button orange icon"
      >
        Order now
        <SvgoArrowRight :font-controlled="false" filled="false" />
      </NuxtLink>
    </div>
  </header>
</template>
<style lang="scss">
header {
  @include border($top: true, $right: true, $left: true);
  @include animate-quick(all);
  @include bg-blur;

  background: $color-white;
  width: 90vw;
  height: 75px;
  border-radius: 32px 32px 0 0;
  padding: 15px;
  left: 5vw;
  position: sticky;
  justify-content: space-between;

  z-index: 10;

  top: 75px;

  // States

  &.top {
    @include shadow-m;

    border-radius: 0 0 32px 32px;

    background: $color-white-blur;
  }

  // Inners

  > .left-section {
    order: 0;
  }

  > .right-section {
    order: 1;
  }

  // Adaptive

  @include sm {
    width: 100vw;
    left: 0;

    .left-section > a {
      display: none;
    }
  }
}
</style>
