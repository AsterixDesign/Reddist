<template lang="pug">
  v-navigation-drawer.root.grey.lighten-4.pb-0(
    persistent,
    height='100%',
    light,
    v-model="drawerStatus"
  )
    v-list
      v-list-tile.mt-4.logo(
        avatar,
        tag='div'
      )
        v-list-tile-avatar
          img(
            src='http://wcdn2.dataknet.com/static/resources/icons/set109/18a0c87d.png'
          )
        v-list-tile-content.pl-3
          v-list-tile-title.text Reddist

      template(v-for='(item, i) in items')

        v-layout(
          row,
          v-if='item.heading',
          align-center,
          :key='i'
        )
          v-flex(xs6)
            v-subheader(v-if='item.heading')
              | {{ item.heading }}

        v-divider.my-4(
          dark,
          v-else-if='item.divider',
          :key='i'
        )

        v-list-item(
          :key='i',
          v-else
        )
          v-list-tile(
            :to="item.to",
            :router="item.router",
          )
            v-list-tile-action
              v-icon {{ item.icon }}
            v-list-tile-content
              v-list-tile-title
                | {{ item.text }}
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'AppDrawer',
    data: () => ({
      items: [
        { divider: true },
        { heading: 'Main' },
        {
          icon: 'star',
          text: 'Front Page',
          router: true,
          to: '/r/frontpage'
        },
        {
          icon: 'radio_button_unchecked',
          text: 'All',
          router: true
        },
        {
          icon: 'lightbulb_outline',
          text: 'Popular',
          router: true
        },
        {
          icon: 'settings',
          text: 'Settings',
          router: true,
          to: '/settings'
        },
        { divider: true },
        { heading: 'Subreddits' },
        {
          icon: 'refresh',
          text: 'Refresh',
          router: true
        },
        { divider: true },
        { icon: 'help', text: 'Help' }
      ]
    }),
    methods: {
      ...mapActions(['setDrawerStatus'])
    },
    computed: {
      ...mapGetters(['isDrawerOpen']),
      drawerStatus: {
        get () {
          return this.isDrawerOpen
        },
        set (value) {
          this.setDrawerStatus(value)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .root
    .logo
      img
        height 60px
        width 60px
      .text
        font-size 2em
        font-weight 800
</style>
