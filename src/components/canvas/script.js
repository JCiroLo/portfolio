import * as THREE from 'three'

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { CinematicCamera } from 'three/addons/cameras/CinematicCamera.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'

export default {
  name: 'v-canvas',
  props: {
    render: Boolean
  },
  data () {
    return {
      config: {
        camera: {
          theta: 0,
          velocity: 0.1,
          radius: 15,
          focalLength: 6
        },
        lights: {
          theta: 0,
          velocity: 0.5,
          radius: 100,
          intensity: 1
        },
        bloomPass: {
          strength: 1,
          threshold: 0.05,
          radius: 1
        },
        innerPlanet: {
          thetaX: 0,
          thetaY: 0.001,
          thetaZ: 0
        },
        outerPlanet: {
          thetaX: 0,
          thetaY: 0.005,
          thetaZ: 0.001
        }
      }
    }
  },
  computed: {},
  methods: {
    _createRenderer () {
      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.renderer.shadowMap.enabled = true
      this.$refs.container.appendChild(this.renderer.domElement)
    },
    _createScene () {
      this.scene = new THREE.Scene()
    },
    _createCamera () {
      this.camera = new CinematicCamera(
        75,
        window.innerWidth / window.innerHeight,
        1,
        2000
      )
      this.camera.setLens(this.config.camera.focalLength)
      this.camera.position.set(0, 5, -200)
    },
    _createLights () {
      this.pointLight1 = new THREE.PointLight(
        'white',
        this.config.lights.intensity
      )
      this.scene.add(this.pointLight1)

      this.pointLight2 = new THREE.PointLight(
        'white',
        this.config.lights.intensity
      )
      this.scene.add(this.pointLight2)
    },
    _createPostEffects () {
      this.renderScene = new RenderPass(this.scene, this.camera)

      this.bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        this.config.bloomPass.strength,
        this.config.bloomPass.radius,
        this.config.bloomPass.threshold
      )

      this.composer = new EffectComposer(this.renderer)
      this.composer.addPass(this.renderScene)
      this.composer.addPass(this.bloomPass)
    },
    _createScenario () {
      // Inner planet
      this.innerPlanetObject = new THREE.Object3D()

      this.scene.add(this.innerPlanetObject)

      const innerPlanetGeometry = new THREE.IcosahedronGeometry(10, 1)

      const innerPlanetMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x222222,
        metalness: 1,
        roughness: 0.5,
        side: THREE.DoubleSide,
        flatShading: true
      })

      const innerPlanetMesh = new THREE.Mesh(
        innerPlanetGeometry,
        innerPlanetMaterial
      )

      this.innerPlanetObject.add(innerPlanetMesh)

      // Outer planet

      this.outerPlanetObject = new THREE.Object3D()

      this.scene.add(this.outerPlanetObject)

      const outerPlanetGeometry = new THREE.IcosahedronGeometry(30, 2)

      const outerPlanetMaterial = new THREE.MeshLambertMaterial({
        color: 0xaaaaaa,
        metalness: 1,
        roughness: 0,
        wireframe: true
      })

      this.outerPlanetMesh = new THREE.Mesh(
        outerPlanetGeometry,
        outerPlanetMaterial
      )

      this.outerPlanetObject.add(this.outerPlanetMesh)
    },
    _animateCamera () {
      this.camera.position.set(
        this.config.camera.radius *
          Math.sin(THREE.MathUtils.degToRad(this.config.camera.theta)),
        this.config.camera.radius *
          Math.sin(THREE.MathUtils.degToRad(this.config.camera.theta)),
        this.config.camera.radius *
          Math.cos(THREE.MathUtils.degToRad(this.config.camera.theta))
      )
      this.camera.lookAt(this.scene.position)
      this.camera.setLens(
        4 * Math.sin(THREE.MathUtils.degToRad(this.config.camera.theta)) + 6
      )
      this.camera.updateMatrixWorld()
    },
    _animateScenario () {
      this.innerPlanetObject.rotation.x += this.config.innerPlanet.thetaX
      this.innerPlanetObject.rotation.y += this.config.innerPlanet.thetaY
      this.innerPlanetObject.rotation.z += this.config.innerPlanet.thetaZ

      this.outerPlanetObject.rotation.x += this.config.outerPlanet.thetaX
      this.outerPlanetObject.rotation.y += this.config.outerPlanet.thetaY
      this.outerPlanetObject.rotation.z += this.config.outerPlanet.thetaZ
    },
    /**
     * [Animate a point light]
     * @param {THREE.PointLight} pointLight - THREE Point Light
     * @param {Number} direction - THREE Point Light direction
     * */
    _animatePointLight (pointLight, direction) {
      pointLight.position.set(
        this.config.lights.radius *
          direction *
          Math.sin(THREE.MathUtils.degToRad(this.config.lights.theta)),
        this.config.lights.radius *
          direction *
          Math.sin(THREE.MathUtils.degToRad(this.config.lights.theta)),
        this.config.lights.radius *
          direction *
          Math.cos(THREE.MathUtils.degToRad(this.config.lights.theta))
      )
    },
    _onWindowResize () {
      const width = window.innerWidth
      const height = window.innerHeight

      this.camera.aspect = width / height
      this.camera.updateProjectionMatrix()

      this.renderer.setSize(width, height)
      this.composer.setSize(width, height)
    },
    animate () {
      this.config.camera.theta += this.config.camera.velocity
      this.config.lights.theta += this.config.lights.velocity

      this._animateCamera()
      this._animateScenario()
      this._animatePointLight(this.pointLight1, 1)
      this._animatePointLight(this.pointLight2, -1)

      this.composer.render()
    },
    init () {
      this._createRenderer()
      this._createScene()
      this._createCamera()
      this._createLights()
      this._createPostEffects()
      this._createScenario()

      this.renderer.setAnimationLoop(() => {
        if (this.render) {
          this.animate()
        }
      })
    }
  },
  mounted () {
    this.init()

    window.addEventListener('resize', () => this._onWindowResize())
  }
}
