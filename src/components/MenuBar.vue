<script setup lang="ts">
import { websiteArray, websiteRef } from '~/logics'
function scrollInto(name: string) {
  if (websiteRef[name]) {
    websiteRef[name].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}
</script>

<template>
  <div>
    <div v-for="websiteType in websiteArray" :key="websiteType.name" flex>
      <h1
        mb-4 text-sm color="gray-500 hover:gray-700 dark:hover:gray-300" cursor-pointer transition
        @click="scrollInto(websiteType.name)"
      >
        {{ websiteType.name }}
      </h1>
    </div>
  </div>
</template>
