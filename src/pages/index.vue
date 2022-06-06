<script setup lang="ts">
import type { Website } from '~/logics'
import { historyVisit, setWebsiteRef, websiteArray } from '~/logics'

function handleVisit(website: Website) {
  window.open(website.link)
  historyVisit.value.unshift(website)
  // object array unique
  const history = historyVisit.value.map(i => JSON.stringify(i))
  historyVisit.value = [...new Set(history)].map(i => JSON.parse(i))
  if (historyVisit.value.length > 4)
    historyVisit.value.pop()
}

</script>

<template>
  <div>
    <div v-for="websiteType in websiteArray" :ref="(el: HTMLElement) => setWebsiteRef(el, websiteType.name)"
      :key="websiteType.name" mb-10 mt--75px pt-75px>
      <h1 mb-4 font-bold tracking-wide>
        {{ websiteType.name }}
      </h1>
      <div flex="~ wrap" gap-2 />
    </div>
  </div>
</template>
