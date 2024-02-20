const transitions = {
  boom: `
    uniform float time;
    uniform float progress;
    uniform sampler2D tCurrentTexture;
    uniform sampler2D tNextTexture;
    uniform vec4 resolution;

    varying vec2 vUv;
    varying vec4 vPosition;

    void main()	{
      vec2 newUV = vUv;
      vec2 p = newUV;
      float x = progress;
      x = smoothstep(.0,1.0,(x*2.0+p.y-1.0));
      vec4 f = mix(
        texture2D(tCurrentTexture, (p-.5)*(1.-x)+.5), 
        texture2D(tNextTexture, (p-.5)*x+.5), 
        x);
      gl_FragColor = f;
    }
  `,
};

export default transitions;
