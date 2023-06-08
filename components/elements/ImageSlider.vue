<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core'
import type { Picture } from '~/types'

defineProps({
  pictures: {
    type: Array as () => Picture[],
    required: true
  }
})

const pictureElements = ref(null)
const imagesWrapper: Ref<HTMLElement | null> = ref(null)

const visibleMap = ref([])

const buttonsVisible = ref(false)

const scroll = (direction: string) => {
  if (direction === 'left') {
    imagesWrapper.value.scrollBy(-100, 0)
  } else if (direction === 'right') {
    imagesWrapper.value.scrollBy(100, 0)
  }
}

onMounted(() => {
  if (!pictureElements.value || !pictureElements.value[0]) return

  for (const pic of pictureElements.value) {
    const targetVisible = useElementVisibility(pic)
    visibleMap.value.push(targetVisible)
  }
})
</script>
<template>
  <div
    class="slider-wrapper"
    @mouseenter="buttonsVisible = true"
    @mouseleave="buttonsVisible = false"
  >
    <div ref="imagesWrapper" class="container row g5 nowrap images">
      <img
        v-for="i of pictures"
        ref="pictureElements"
        :key="i.alt"
        :src="i.filename"
        :alt="i.alt"
      />
    </div>
    <Transition name="slide-fade-left">
      <ElementsScrollButton
        v-if="buttonsVisible && !visibleMap[0].value"
        left
        @click="scroll('left')"
      />
    </Transition>
    <Transition name="slide-fade-right">
      <ElementsScrollButton
        v-if="buttonsVisible && !visibleMap[visibleMap.length - 1].value"
        @click="scroll('right')"
      />
    </Transition>
    <div v-if="visibleMap.length > 1" class="container row g5 p5 dots">
      <SvgoSliderDot
        v-for="i in visibleMap"
        :key="i"
        ref="dot"
        :class="{ active: i.value }"
        :font-controlled="false"
        filled="false"
      />
    </div>
  </div>
</template>
<style lang="scss">
.slider-wrapper {
  position: relative;

  overflow: hidden;

  aspect-ratio: 1 / 1;

  width: 100%;
  border-radius: 12px;

  .images {
    @include hide-scrollbar;

    overflow: hidden;
    max-width: 100%;
    max-height: 100%;
    overflow-x: scroll;

    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    z-index: 0;

    img {
      scroll-snap-align: start;
      scroll-snap-stop: always;
      aspect-ratio: 1 / 1;

      object-fit: cover;

      width: 100%;
    }
  }

  .dots {
    position: absolute;

    left: 50%;

    transform: translateX(-50%);

    bottom: 5px;

    z-index: 2;

    svg {
      @include animate-quick(all);
      opacity: 0.2;

      &.active {
        opacity: 1;
      }
    }
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;

    z-index: 1;

    pointer-events: none;

    background: linear-gradient(180deg, rgb(25 25 25 / 0%) 76.08%, rgba(25 25 25 / 75%) 100%);
  }
}
</style>
