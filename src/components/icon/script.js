export default {
  name: 'v-icon',
  props: {
    type: {
      type: String,
      default: 'fal'
    },
    name: {
      type: String,
      required: true
    },
    fixed: {
      type: Boolean,
      default: true
    },
    spin: {
      type: Boolean
    }
  }
}
