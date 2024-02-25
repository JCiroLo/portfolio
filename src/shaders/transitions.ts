const transitions = {
  boom: `
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

      x = smoothstep(0.0, 1.0, (x * 2.0 + p.y - 1.0));

      vec4 f = mix(texture2D(tCurrentTexture, (p - 0.5) * (1.0 - x) + 0.5), texture2D(tNextTexture, (p - 0.5) * x + 0.5), x);

      gl_FragColor = f;
    }
  `,
  deform: `
		uniform float progress;
		uniform float intensity;
		uniform sampler2D tCurrentTexture;
		uniform sampler2D tNextTexture;
		uniform vec4 resolution;
    
		varying vec2 vUv;

		void main()	{
		  vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);

      vec4 d1 = texture2D(tCurrentTexture, newUV);
      vec4 d2 = texture2D(tNextTexture, newUV);

      float displace1 = (d1.r + d1.g + d1.b)*0.33;
      float displace2 = (d2.r + d2.g + d2.b)*0.33;
      
      vec4 t1 = texture2D(tCurrentTexture, vec2(newUV.x, newUV.y + progress * (displace2 * intensity)));
      vec4 t2 = texture2D(tNextTexture, vec2(newUV.x, newUV.y + (1.0 - progress) * (displace1 * intensity)));

      gl_FragColor = mix(t1, t2, progress);
		}
  `,
  grid: `
		uniform float progress;
		uniform float intensity;
		uniform sampler2D tCurrentTexture;
		uniform sampler2D tNextTexture;
		uniform vec4 resolution;

		varying vec2 vUv;

		mat2 rotate(float a) {
			float s = sin(a);
			float c = cos(a);
			return mat2(c, -s, s, c);
		}

		const float PI = 3.1415;
		const float angle1 = PI *0.25;
		const float angle2 = -PI *0.75;


		void main()	{
			vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);

			vec2 uvDivided = fract(newUV*vec2(intensity,1.));


			vec2 uvDisplaced1 = newUV + rotate(3.1415926/4.)*uvDivided*progress*0.1;
			vec2 uvDisplaced2 = newUV + rotate(3.1415926/4.)*uvDivided*(1. - progress)*0.1;

			vec4 t1 = texture2D(tCurrentTexture,uvDisplaced1);
			vec4 t2 = texture2D(tNextTexture,uvDisplaced2);

			gl_FragColor = mix(t1, t2, progress);
		}
  `,
};

export default transitions;
