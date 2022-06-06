<script setup lang="ts">
import raw from '../data.json'

const data = ref(raw)
const word = ref('')
const phonetic = ref('')
const region = ref('us')
const show = ref(false)

const play = (item: any, r: string) => {
  const audio = new Audio(item[`voice_${r}`])
  audio.addEventListener('playing', () => {
    word.value = item.word
    region.value = r
    phonetic.value = item[`phonetic_${r}`]

    show.value = true
  })
  audio.addEventListener('pause', () => {
    show.value = false
  })
  audio.play()
}

const practice = (item: any) => {
  window.open(`https://www.google.com/search?q=how+to+pronounce+${item.word.replace(/\s/g, '+')}`, '_blank')
}
</script>

<template>
  <div py-4>
    <table m-auto>
      <thead>
        <tr text-center>
          <th />
          <th>UK</th>
          <th>US</th>
          <th lt-sm:hidden>Wrong</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.word">
          <td word-block text-right @click="practice(item)">
            {{ item.word }}
          </td>
          <td word-block opacity-75 text-sm @click="play(item, 'uk')">/{{ item.phonetic_uk }}/</td>
          <td word-block opacity-75 text-sm @click="play(item, 'us')">/{{ item.phonetic_us }}/</td>
          <td word-block opacity-75 text-sm text-red-600 dark:text-red-400 lt-sm:hidden>/{{ item.phonetic_wrong }}/</td>
        </tr>
      </tbody>
    </table>
  </div>
  <Transition name="fade">
    <div v-show="show" fixed flex bg-white dark:bg-hex-121212 inset-0>
      <div m-auto>
        <div text-5xl mb-4>
          {{ word }}
        </div>
        <div opacity-50>[{{ region.toUpperCase() }}] /{{ phonetic }}/</div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
