<template lang="pug">
  .root
    h1 Home
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'HomePage',
    methods: {
      ...mapActions([
        'setCurrentLocation'
      ])
    },
    created () {
      this.setCurrentLocation('Home')
    }
  }
</script>

<style lang="stylus" scoped></style>
