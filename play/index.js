import Vue from 'vue'
import Vuetify from 'vuetify'
import { play } from 'vue-play'

import '../src/renderer/styles/App.styl'

import { PostCard } from '../src/renderer/components'

Vue.use(Vuetify)

play('MyButton')
  .add('with text', `
    <v-btn @click="$log('123')">Hello</v-btn>
  `)

play(PostCard)
  .add('with only title', `
    <post-card
      title="Some title bro eat cookies"/>
  `)
  .add('with title & image', `
    <post-card
      title="Some title bro eat cookies"
      img="https://i.imgur.com/RRbmyvl.jpg"/>
  `)
  .add('With all props', `
    <post-card
      title="Some title bro eat cookies"
      img="https://i.imgur.com/RRbmyvl.jpg"
      :upvotesNum="20"
      :commentNum="100"
      subReddit="random"
      contentLink="http://www.google.com?=apple/"
      opUsername="wtgserpant"/>
  `)
