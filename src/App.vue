<template>
  <div id="app">
    <div class="flex justify-center items-center h-screen">
    <contenu></contenu>
    </div>
  </div>
</template>

<script>
import Contenu from './components/contenu.vue'

export default {
  name: 'App',
  components: {
    'contenu':Contenu,
  }
}
</script>

<style lang="scss">

</style>
