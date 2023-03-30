export default {
  name: 'v-header',
  props: {
    show: {
      type: String,
      required: true
    }
  },
  methods: {
    isRouteActive (hash) {
      return this.$route.hash === hash
    }
  }
}
