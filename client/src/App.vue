<template>
  <div id="app">
    <ul>
      <li v-for="m in messages" v-text="m"></li>
    </ul>
    <input v-model="message" @keydown.enter="send">
    <button type="button" @click="send">Send</button>
  </div>
</template>

<script>
import IO from 'socket.io-client'
var socket = IO(`http://${window.location.hostname}:3000`)

export default {
  name: 'app',
  data () {
    return {
      message: 'Hello Vue!',
      messages: []
    }
  },
  created () {
    let self = this
    socket.on('get message', function (msg) {
      self.messages.push(msg)
    })
  },
  methods: {
    send () {
      let self = this

      socket.emit('send message', self.message)

      self.message = ''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
