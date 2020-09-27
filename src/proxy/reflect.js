const dinner = {
  meal: 'tacos'
}

const handler = {
  get(target, prop, receiver) {
    console.log('track', ...arguments)
    // track(target, prop)
    return Reflect.get(...arguments)
  },
  set(target, prop, value, receiver) {
    console.log('trigger', ...arguments)
    // trigger(target, prop)
    return Reflect.set(...arguments)
  }
}

const proxy = new Proxy(dinner, handler)
proxy.meal = 1
console.log(proxy.meal)

// intercepted!
// tacos