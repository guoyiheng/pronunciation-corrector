<template>
  <main font-sans text="gray-700 dark:gray-200">
    <NavBar fixed z-999 />
    <MenuBar sm:fixed relative w-180px py10 pl-10 pt-75px />
    <router-view p-10 sm:pl-180px sm:pt-75px />
  </main>
</template>
