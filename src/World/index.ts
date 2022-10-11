import type { PerspectiveCamera, WebGLRenderer, Scene } from 'three';
import createCamera from './components/camera';
import createCube from './components/cube';
import createScene from './components/scene';
import createLights from './components/lights';
import createRenderer from './systems/renderer';
import createControls from './systems/controls';
import Resizer from './systems/Resizer';
import Loop from './systems/Loop';

class World {
  // These properties cannot be access outside this class
  private camera: PerspectiveCamera;
  private renderer: WebGLRenderer;
  private scene: Scene;
  private loop: Loop;

  public constructor(container: Element) {
    this.camera = createCamera();
    this.scene = createScene();
    this.renderer = createRenderer();
    this.loop = new Loop(this.camera, this.scene, this.renderer);
    container.append(this.renderer.domElement);

    const controls = createControls(this.camera, this.renderer.domElement);

    const cube = createCube();
    const { ambientLight, mainLight } = createLights();

    this.loop.updatables.push(controls);

    // this.loop.updatables.push(cube);

    this.scene.add(ambientLight, mainLight, cube);

    const resizer = new Resizer(container, this.camera, this.renderer);
    resizer.onResize = () => {
      this.render();
    }
  }

  public render() {
    // draw a single frame
    this.renderer.render(this.scene, this.camera);
  }

  public start() {
    this.loop.start();
  }

  public stop() {
    this.loop.stop();
  }
}

export default World;