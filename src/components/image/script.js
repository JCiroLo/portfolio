export default {
  name: 'v-image',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    description: {
      type: String
    }
  }
}
