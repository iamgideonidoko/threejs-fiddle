import { WebGLRenderer } from 'three';

const createRenderer = (): WebGLRenderer => {
  const renderer = new WebGLRenderer();

  return renderer;
}

export default createRenderer;
