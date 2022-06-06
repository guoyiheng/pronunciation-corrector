<script setup lang="ts">
import { isDark, toggleDark } from '~/logics'

</script>

<template>
  <nav
    flex items-center justify-center
    h-55px px4 w-full bg-white dark:bg="#121212"
    border="b-1 [#3c3c3c1f]"
  >
    <div class="icon-btn i-carbon:wind-power mr-2 scale-90" />
    <h1>
      <b>Fine</b> Website
    </h1>
    <div class="flex-auto" />
    <a
      class="icon-btn"
      i-carbon-logo-github
      rel="noreferrer"
      href="https://github.com/guoyiheng/fxxx-website"
      target="_blank"
      title="GitHub"
      mr-4
    />
    <button class="icon-btn !outline-none" @click="toggleDark()">
      <div v-if="isDark" i-carbon-moon />
      <div v-else i-carbon-sun />
    </button>
  </nav>
</template>
