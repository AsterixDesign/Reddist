<template lang="pug">
  v-layout(column).root
    v-flex(xs4)
      template(v-for='(item, i) in items')
        post-card(
          :title="item.title",
          :commentNum="item.num_comments",
          :subReddit="item.subreddit.display_name",
          :upvotesNum="item.score",
          :contentLink="item.url",
          :img="item.url",
          :opUsername="item.author.name"
        )
</template>

<script>
  import { mapActions } from 'vuex'
  import { Reddit } from '../api'

  import { PostCard } from '../components'

  export default {
    name: 'Frontpage',
    components: {
      PostCard
    },
    data () {
      return {
        items: []
      }
    },
    methods: {
      ...mapActions([
        'setCurrentLocation'
      ])
    },
    created () {
      this.setCurrentLocation('Front Page')
      const stuff = async () => {
        const list = await Reddit.getHot({limit: 10})
        console.log(list[0].subreddit.display_name)
        this.items = list
      }
      stuff()
    }
  }
</script>

<style lang="stylus" scoped>
  .root
    /* styles */
</style>
