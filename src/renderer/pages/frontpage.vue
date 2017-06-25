<template lang="pug">
  v-layout(column).root
    v-flex(xs4).post-list
      template(v-for='(item, i) in items')
        post-card.pt-2(
          :title="item.title",
          :commentNum="item.num_comments",
          :subreddit="item.subreddit.display_name",
          :score="item.score",
          :contentLink="item.url",
          :previewImg="item.thumbnail",
          :postAuthor="item.author.name",
          :postId="item.id"
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
      ]),
      fetchPosts: async function () {
        this.items = await Reddit.getHot({limit: 50})
      }
    },
    created () {
      this.setCurrentLocation('r/FrontPage')
      this.fetchPosts()
    }
  }
</script>

<style lang="stylus" scoped>
  .root
    .post-list
      overflow-y scroll
      height 100vh
</style>
