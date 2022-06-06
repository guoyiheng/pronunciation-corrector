<script setup lang="ts">
import { isDark, toggleDark } from '~/logics'
</script>

<template>
  <nav flex items-center justify-center h-55px px4 w-full bg-white dark:bg="#121212">
    <div icon-btn-primary i-carbon:voice-activate mr-1 scale-90 />
    <h1 font-serif>Pronunciation <b text-primary>Corrector</b></h1>
    <div w-60 lt-sm="w-auto flex-auto" />
    <a icon-btn-primary i-carbon-logo-github rel="noreferrer" href="https://github.com/guoyiheng/pronunciation-corrector" target="_blank" title="GitHub" mr-4 />
    <button icon-btn-primary @click="toggleDark()">
      <div v-if="isDark" i-carbon-moon />
      <div v-else i-carbon-sun />
    </button>
  </nav>
</template>
