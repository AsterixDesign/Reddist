<template lang="pug">
  v-toolbar.root(
    fixed,
    light
  )
    v-toolbar-side-icon(
      light,
      @click.native.stop="toggleDrawer"
    )
    v-toolbar-title {{ appLocation }}
    v-spacer
    v-text-field(
      prepend-icon="search",
      label="Search...",
      hide-details,
      single-line,
      light,
      disabled
    )

    v-menu(
      left,
      bottom,
      origin='top right',
      transition='v-scale-transition'
    )
      v-btn(
        light,
        icon='',
        slot='activator'): v-icon account_circle
      v-list
        v-list-item
          v-list-tile
            v-list-tile-avatar: v-icon account_circle
            v-list-tile-title wtgserpant
          v-list-tile
            v-list-tile-avatar: v-icon exit_to_app
            v-list-tile-title Logout
          v-list-tile
            v-list-tile-avatar: v-icon launch
            v-list-tile-title Login
</template>

<script>
  import Types from 'vue-types'
  export default {
    name: 'AppBar',
    props: {
      toggleDrawer: Types.func.isRequired,
      appLocation: Types.string.isRequired,
      signedIn: Types.bool
    }
  }
</script>

<style lang="stylus" scoped>
  .root
    /**/
</style>
