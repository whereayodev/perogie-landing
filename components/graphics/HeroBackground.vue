<script setup lang="ts">
import { gsap } from 'gsap'
import { Observer } from 'gsap/Observer'
import { useElementBounding } from '@vueuse/core'

import type { VarenikItem } from '~~/types'

import VarenikBig from '~~/assets/vectors/varenik-big.svg'

gsap.registerPlugin(Observer)

const { $viewport } = useNuxtApp()

const getRandomNumber = (min: number, max: number) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const root: Ref<HTMLElement | null> = ref(null)
const wrapper: Ref<HTMLElement | null> = ref(null)
const varenikItem: Ref<HTMLElement | null> = ref(null)
const vareniksArray: Ref<VarenikItem[] | null> = ref(null)

const initVareniks = () => {
  let itemsCount = 0
  vareniksArray.value = []

  if ($viewport.isGreaterOrEquals('tablet')) {
    itemsCount = 25
  } else {
    itemsCount = 15
  }

  for (let i = 0; i < itemsCount; i++) {
    const item: VarenikItem = {
      translateX: getRandomNumber(-20, -20),
      translateY: getRandomNumber(-20, 20),
      rotation: getRandomNumber(0, 150)
    }

    vareniksArray.value.push(item)
  }
}

const initPointerAnimation = () => {
  Observer.create({
    target: root.value,
    type: 'pointer',
    debounce: false,
    onMove: (event) => {
      const element = wrapper.value
      const parallaxAmount = 50

      if (!element || !event.x || !event.y) return

      const boundingRect = useElementBounding(element)

      const elementX = boundingRect.left.value + boundingRect.width.value / 2
      const elementY = boundingRect.top.value + boundingRect.height.value / 2

      const offsetX = (elementX - event.x) / window.innerWidth
      const offsetY = (elementY - event.y) / window.innerHeight

      const translateX = offsetX * parallaxAmount
      const translateY = offsetY * parallaxAmount

      element.style.transform = `translate(${translateX}px, ${translateY}px)`
    }
  })
}

onMounted(() => {
  initVareniks()
  initPointerAnimation()
})
</script>
<template>
  <div ref="root" class="hero-background">
    <div v-if="vareniksArray != null" ref="wrapper" class="vareniks-wrapper">
      <VarenikBig
        v-for="i in vareniksArray"
        :key="i"
        ref="varenikItem"
        :font-controlled="false"
        :style="{
          transform: `translate(${i.translateX}%, ${i.translateY}%)`,
          rotate: i.rotation + 'deg'
        }"
      />
    </div>
  </div>
</template>
<style lang="scss">
.hero-background {
  position: absolute;
  inset: 0;

  z-index: 0;

  overflow: hidden;
  animation: color-change 30s linear infinite;

  .vareniks-wrapper {
    display: grid;

    width: 100%;
    height: 100%;

    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);

    gap: 50px;

    svg {
      @include animate-quick(all);
      width: 100%;
      height: 100%;
    }

    @include sm {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@keyframes color-change {
  0% {
    background-color: #fff961;
  }

  25% {
    background-color: #99d5ed;
  }

  50% {
    background-color: #fd8d26;
  }

  75% {
    background-color: #feda5e;
  }

  100% {
    background-color: #fff961;
  }
}
</style>
