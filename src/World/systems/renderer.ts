import { WebGLRenderer } from 'three';

const createRenderer = (): WebGLRenderer => {
  const renderer = new WebGLRenderer({ antialias: true });

  renderer.physicallyCorrectLights = true;

  return renderer;
}

export default createRenderer;
