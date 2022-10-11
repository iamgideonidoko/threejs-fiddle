import createCamera from './components/camera';
// import createCube from './components/cube';
// import createMeshGroup from './components/meshGroup';
import createScene from './components/scene';
import createLights from './components/lights';
import createRenderer from './systems/renderer';
import createControls from './systems/controls';
import Resizer from './systems/Resizer';
import Loop from './systems/Loop';
// import Train from './components/Train';
// import { createAxesHelper, createGridHelper } from './components/helpers';
import loadBirds from './components/birds';

class World {
  // These properties cannot be access outside this class
  private camera: ReturnType<typeof createCamera>;
  private renderer: ReturnType<typeof createRenderer>;
  private scene: ReturnType<typeof createScene>;
  private loop: Loop;
  private controls: ReturnType<typeof createControls>;

  public constructor(container: Element) {
    this.camera = createCamera();
    this.scene = createScene();
    this.renderer = createRenderer();
    this.loop = new Loop(this.camera, this.scene, this.renderer);
    container.append(this.renderer.domElement);

    this.controls = createControls(this.camera, this.renderer.domElement);

    const { ambientLight, mainLight } = createLights();
    
    /* CUBE */
    // const cube = createCube();
    // this.loop.updatables.push(this.controls, cube);

    /* MESH GROUP */
    // const meshGroup = createMeshGroup();
    // this.loop.updatables.push(this.controls, meshGroup);
    // this.scene.add(ambientLight, mainLight, meshGroup);

    /* TRAIN */
    // const train = new Train();
    // this.loop.updatables.push(this.controls, train);
    // this.scene.add(ambientLight, mainLight, train);

    /* BIRD (LOADED MODELS) */
    this.loop.updatables.push(this.controls);
    this.scene.add(ambientLight, mainLight);

    
    /* const resizer =  */new Resizer(container, this.camera, this.renderer);
    /* WHEN THERE'S NO LOOP UPDATE */
    // resizer.onResize = () => {
    //   this.render();
    // }

    /* FOR TRAIN */
    // this.scene.add(createAxesHelper(), createGridHelper());
  }

  public async init () {
    const { parrot, flamingo, stork } = await loadBirds();

    // move the target to the center of the front bird
    this.controls.target.copy(parrot.position);
    this.loop.updatables.push(parrot, flamingo, stork);
    this.scene.add(parrot, flamingo, stork);
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