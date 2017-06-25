<template lang="pug">
  .post-card
    v-card
      v-card-row
        v-card-title
          span {{ this.title }}
        .pr-3.post-info
          span.up-votes {{ this.score }}
          br
          span
            v-icon(small).pr-1 mode_comment
            | {{ this.commentNum }}
      v-card-row(v-if="validPreview")
        img(:src="validPreview")
      v-card-row
        .info-container.pr-3.pl-3
          span
            v-icon book
            | {{ `r/${this.subreddit}` | truncate(8) }}
          span
            v-icon link
            | {{ this.urlHostName | truncate(7) }}
          span
            v-icon perm_identity
            | {{ `u/${this.postAuthor}` | truncate(8) }}
      v-card-row(actions)
        v-btn(icon)
          v-icon save
        v-spacer
        v-btn(icon)
          v-icon thumb_up
        v-btn(icon)
          v-icon thumb_down
</template>

<script>
  import Types from 'vue-types'
  import ValidUrl from 'valid-url'
  import { URL } from 'url'

  export default {
    name: 'PostCard',
    props: {
      title: Types.string.def('title'),
      score: Types.number.def(2000),
      commentNum: Types.number.def(20),
      previewImg: Types.string,
      subreddit: Types.string.def('aww'),
      contentLink: Types.string.def('http://www.google.com?=hello?'),
      postAuthor: Types.string.def('ballbuster'),
      postId: Types.string
    },
    data () {
      return {}
    },
    computed: {
      urlHostName () {
        const url = new URL(this.contentLink)
        const hostname = url.hostname
        if (hostname.indexOf('www.') > -1) {
          return hostname.split('.').splice(1, hostname.length - 1).join('.')
        }
        return hostname
      },
      validPreview () {
        if (ValidUrl.isUri(this.previewImg)) return this.previewImg
        return ''
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .post-card
    .post-info
      font-size 1em
      text-align right
      i
        font-size 1em
      .up-votes
        font-size 1.3em
    .info-container
      display flex
      align-content center
      justify-content space-between
      width 100%
      font-size 0.9em
      i
        font-size 1.3em
    img
      width 100%
      display block
</style>
