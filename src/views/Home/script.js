import header from '../../components/header/index.vue'
import sidebar from '../../components/sidebar/index.vue'
import canvas from '../../components/canvas/index.vue'

export default {
  name: 'portfolio',
  components: {
    'v-header': header,
    'v-sidebar': sidebar,
    'v-canvas': canvas
  },
  data () {
    return {
      options: {
        licenseKey: 'gplv3-license',
        scrollingSpeed: 1000,
        scrollOverflow: 'fp-noscroll',
        anchors: ['home', 'about', 'skills', 'portfolio', 'contact'],
        slidesNavigation: true,
        controlArrows: false,
        credits: { enabled: false },
        beforeLeave: this.onChangeSection,
        onSlideLeave: this.onChangeSlide
      },
      settings: {
        about: {
          interestsAnimation: null,
          currentInterest: 0
        }
      },
      currentSection: 'home',
      currentSlide: 0
    }
  },
  methods: {
    onChangeSection (from, to, direction) {
      this.currentSection = to.anchor

      if (to.anchor === 'about') {
        this.settings.about.interestsAnimation = setInterval(() => {
          this.settings.about.currentInterest =
            (this.settings.about.currentInterest + 1) % 5
        }, 5000)
      } else {
        if (this.settings.about.interestsAnimation) {
          clearInterval(this.settings.about.interestsAnimation)
        }
      }
    },
    onChangeSlide (section, from, to, direction) {
      this.currentSlide = to.index
    },
    onChangeRoute (anchor, slide = 0) {
      this.$refs.fullpage.api.moveTo(anchor, slide)
    }
  }
}
