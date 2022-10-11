import type { PerspectiveCamera, WebGLRenderer, Scene } from 'three';
import createCamera from './components/camera';
// import createCube from './components/cube';
// import createMeshGroup from './components/meshGroup';
import createScene from './components/scene';
import createLights from './components/lights';
import createRenderer from './systems/renderer';
import createControls from './systems/controls';
import Resizer from './systems/Resizer';
import Loop from './systems/Loop';
import Train from './components/Train';
import { createAxesHelper, createGridHelper } from './components/helpers';

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

    const { ambientLight, mainLight } = createLights();
    
    // const cube = createCube();
 
    // this.loop.updatables.push(cube);

    // this.loop.updatables.push(controls);

    // const meshGroup = createMeshGroup();
    // this.loop.updatables.push(controls, meshGroup);
    // this.scene.add(ambientLight, mainLight, meshGroup);

    const train = new Train();
    this.loop.updatables.push(controls, train);
    this.scene.add(ambientLight, mainLight, train);

    
    /* const resizer =  */new Resizer(container, this.camera, this.renderer);
    // resizer.onResize = () => {
    //   this.render();
    // }

    this.scene.add(createAxesHelper(), createGridHelper());
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