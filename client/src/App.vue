<template>
  <div id="app">
    <input type="text" name="" value="">
    <button type="button" name="button" @click="send">Send</button>
  </div>
</template>

<script>
import IO from 'socket.io-client'

export default {
  name: 'app',
  date () {
    return {}
  },
  created () {
    var socket = IO('http://localhost:3000')

    console.log(socket)
  },
  methods: {
    send () {}
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
