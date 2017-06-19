<template lang="pug">
  v-app.root
    app-drawer
    app-bar(
      :toggleDrawer="toggleDrawerStatus",
      :appLocation="getCurrentLocation"
    )
    main: v-container(fluid): router-view
    v-footer
      span Asterix*Designs
      v-spacer
      span Reddist {{ new Date().getFullYear() }}
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { AppBar, AppDrawer } from '../components'

  export default {
    name: 'DefaultLayout',
    components: {
      AppBar,
      AppDrawer
    },
    methods: {
      ...mapActions([
        'toggleDrawerStatus'
      ])
    },
    computed: {
      ...mapGetters([
        'getCurrentLocation'
      ])
    }
  }
</script>

<style lang="stylus" scoped></style>
