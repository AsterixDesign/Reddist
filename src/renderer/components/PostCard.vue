<template lang="pug">
  .post-card
    v-card
      v-card-row
        v-card-title
          span {{ this.title }}
        .pr-3.post-info
          span.up-votes {{ this.upvotesNum }}
          br
          span
            v-icon(small) mode_comment
            | {{ this.commentNum }}
      v-card-row(v-if="img")
        img(:src="img")
      v-card-row
        .info-container.pr-3.pl-3
          span
            v-icon book
            | {{ `r/${this.subReddit}` }}
          span
            v-icon link
            | {{ this.contentLinkRoot }}
          span
            v-icon perm_identity
            | {{ `u/${this.opUsername}` }}
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
  import { getRootDomain } from '../util'

  export default {
    name: 'PostCard',
    props: {
      title: Types.string.def('title'),
      upvotesNum: Types.number.def(2000),
      commentNum: Types.number.def(20),
      img: Types.string,
      subReddit: Types.string.def('aww'),
      contentLink: Types.string.def('http://www.google.com?=hello?'),
      opUsername: Types.string.def('ballbuster')
    },
    data () {
      return {
        contentLinkRoot: getRootDomain(this.contentLink)
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
