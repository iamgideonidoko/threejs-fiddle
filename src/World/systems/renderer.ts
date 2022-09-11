import { WebGLRenderer } from 'three';

const createRenderer = (): WebGLRenderer => {
  const renderer = new WebGLRenderer({ antialias: true });

  return renderer;
}

export default createRenderer;
