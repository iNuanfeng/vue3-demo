import {
  h,
  ref,
  onMounted,
  watch,
  toRefs
} from 'vue'
import {
  fetchUserRepositories
} from '../api/user.js'

export default {
  // components: { RepositoriesFilters, RepositoriesSortBy, RepositoriesList },
  props: {
    user: {
      type: String
    }
  },
  // setup(props) {
  //   console.log('setup') // { user: '' }

  //   return {} // anything returned here will be available for the rest of the component
  // },
  // inside our component
  setup(props, context) {
    const root = ref(null)
    
    const { user } = toRefs(props)
    const repositories = ref([])
    
    const getUserRepositories = async () => {
    console.log('context', context)

      repositories.value = await fetchUserRepositories(user.value)
    }
    
    onMounted(getUserRepositories)
    onMounted(() => {
      console.log(root.value)
    })

    watch(user, getUserRepositories)
    // setTimeout(() => {
    //   user = 'james'
    // }, 2000)
    
    return {
      repositories,
      getUserRepositories
    }
  },
  mounted() {
    console.log('mounted')
    setTimeout(() => {
      // this.user = 'james'
    }, 1000)
  },
  render() {
    return (<h2 ref='root' >{this.repositories}</h2>)
  }
}