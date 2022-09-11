import createCamera from './components/camera.js';
import createCube from './components/cube.js';
import createScene from './components/scene.js';
import createLights from './components/lights.js';

import createRenderer from './systems/renderer.js';
import Resizer from './systems/Resizer.js';
import type { PerspectiveCamera, WebGLRenderer, Scene } from 'three';

class World {
  // These properties cannot be access outside this class
  private camera: PerspectiveCamera;
  private renderer: WebGLRenderer;
  private scene: Scene;

  constructor(container: Element) {
    this.camera = createCamera();
    this.scene = createScene();
    this.renderer = createRenderer();
    container.append(this.renderer.domElement);

    const cube = createCube();
    const light = createLights();

    this.scene.add(cube, light);

    new Resizer(container, this.camera, this.renderer);
  }

  render() {
    // draw a single frame
    this.renderer.render(this.scene, this.camera);
  }
}

export default World;