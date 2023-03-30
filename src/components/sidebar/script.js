export default {
  name: 'v-sidebar',
  props: {
    show: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      anchors: ['#home', '#about', '#skills', '#portfolio', '#contact']
    }
  },
  computed: {
    pointerPosition () {
      return this.anchors.indexOf(this.$route.hash.split('/')[0])
    }
  }
}
