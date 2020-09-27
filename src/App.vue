<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <div id="modal-container"></div>
  <button @click="modalOpen = true">Open full screen modal! (With teleport!)</button>
  <teleport to="#modal-container">
    <div v-if="modalOpen" class="modal">
      <div>
        I'm a teleported modal!
        (My parent is "body")
        <button @click="modalOpen = false">Close</button>
      </div>
    </div>
  </teleport>
  <user user="jack"></user>
  <reactive></reactive>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
// import * as ref from './composition/reflect.js'
import User from './components/User.jsx'
import Reactive from './components/Reactive.jsx'

export default {
  name: "App",
  components: {
    HelloWorld,
    Reactive,
    User
  },
  data() {
    return {
      modalOpen: false
    };
  },
  mounted() {
  }
};
</script>

<style lang="css">
.modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 300px;
  height: 300px;
  padding: 5px;
}
</style>