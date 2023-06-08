<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    required: false,
    default: null
  }
})
</script>
<template>
  <Head>
    <Title>Perogie Land</Title>
    <Meta
      name="description"
      content="Savor the Irresistible Flavor of Homemade Pierogies, Delivered to Your Doorstep or Available for Takeout."
    />
    <Meta name="og:title" content="Perogie Land" />
    <Meta
      name="og:description"
      content="Savor the Irresistible Flavor of Homemade Pierogies, Delivered to Your Doorstep or Available for Takeout."
    />
    <Meta name="og:type" content="website" />
    <!-- <Meta name="og:url" content="https://www.wheelwidget.com" />
    <Meta name="og:image" content="/og-image.jpg" />
    <Meta name="og:site_name" content="WheelWidget.com" />
    <Meta name="og:locale" :content="$t('seo.og.locale')" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta name="twitter:title" :content="$t('seo.twitter.title')" />
    <Meta name="twitter:description" :content="$t('seo.twitter.description')" />
    <Meta name="twitter:image" content="/og-image.jpg" />
    <Meta name="twitter:site" content="@nextsuomi" />
    <Meta name="twitter:creator" content="@nextsuomi" /> -->
  </Head>
</template>
