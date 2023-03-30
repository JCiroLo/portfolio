export default {
  name: 'v-canvas',
  data () {
    return {
      time: 0,
      velocity: 0.1,
      velocityTarget: 0.005,
      width: 0,
      height: 0,
      lastX: 0,
      lastY: 0,
      MAX_OFFSET: 300,
      SPACING: 6,
      POINTS_PER_LAP: 4,
      SHADOW_STRENGTH: 120
    }
  },
  computed: {
    POINTS () {
      return this.MAX_OFFSET / this.SPACING
    },
    PEAK () {
      return this.MAX_OFFSET * 0.25
    }
  },
  methods: {
    setup (canvas, context) {
      this.resize(canvas)
      this.step(context)
    },
    render (context) {
      let x = 0
      let y = 0
      const cx = this.width / 2
      const cy = this.height / 2

      // context.globalCompositeOperation = 'lighter'
      context.strokeStyle = '#fff'
      context.shadowColor = '#fff'
      context.lineWidth = 2
      context.beginPath()

      for (let i = this.POINTS; i > 0; i--) {
        const value = i * this.SPACING + (this.time % this.SPACING)

        const ax = Math.sin(value / this.POINTS_PER_LAP) * Math.PI
        const ay = Math.cos(value / this.POINTS_PER_LAP) * Math.PI

        x = ax * value
        y = ay * value * 0.9

        const o = 1 - Math.min(value, this.PEAK) / this.PEAK

        y -= Math.pow(o, 2) * 200
        y += (200 * value) / this.MAX_OFFSET
        y += (x / cx) * this.width * 0

        context.globalAlpha = 1 - value / this.MAX_OFFSET
        context.shadowBlur = this.SHADOW_STRENGTH * o

        context.lineTo(cx + x, cy + y)
        context.stroke()

        context.beginPath()
        context.moveTo(cx + x, cy + y)
      }

      context.lineTo(cx, cy - 200)
      context.lineTo(cx, 0)
      context.stroke()
    },
    resize (canvas) {
      this.width = canvas.width = window.innerWidth
      this.height = canvas.height = window.innerHeight
    },
    step (context) {
      this.time += this.velocity
      this.velocity += (this.velocityTarget - this.velocity) * 0.3

      this.clear(context)
      this.render(context)

      requestAnimationFrame(() => {
        this.step(context)
      })
    },
    clear (context) {
      context.clearRect(0, 0, this.width, this.height)
    }
  },
  mounted () {
    const canvas = this.$refs.canvas
    const context = canvas.getContext('2d')

    this.setup(canvas, context)
  }
}
