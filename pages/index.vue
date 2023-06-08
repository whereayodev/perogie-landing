<script setup lang="ts">
const mainPage = await useAsyncStoryblok('home', { version: 'publish' })
</script>
<template>
  <div v-if="mainPage" v-editable="mainPage" class="main-wrapper">
    <UtilitySEOWrapper />
    <BlocksHeroBlock :blok="mainPage.content.HeroBlock" />
    <BlocksSeoTextBlock
      :blok="mainPage.content.SeoTextBlock"
      :header="mainPage.content.HeaderBlock"
    />
    <BlocksMenuBlock :blok="mainPage.content.MenuBlock" />
    <BlocksContactsMapBlock :blok="mainPage.content.ContactBlock" />
    <NavigationAppFooter :blok="mainPage.content.FooterBlock" />
  </div>
</template>
