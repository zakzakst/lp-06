<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
import loadingMixin from '@/mixins/loading'

export default {
  mixins: [
    loadingMixin,
  ]
}
</script>

<style>
</style>
