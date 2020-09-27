import { reactive, watchEffect, onMounted } from 'vue'

export default {
  setup(props, context) {
    const state = reactive({
      count: 0,
    })

    function add() {
      state.count++
    }
    
    watchEffect(() => {
      // document.body.innerHTML = `count is ${state.count}`
    })

    onMounted(() => {
      // setInterval(() => {
      //   add()
      // }, 100)
    })

    return {
      state
    }
  },
  render() {
    return (<h2 ref='root' >{this.state.count}</h2>)
  }
}