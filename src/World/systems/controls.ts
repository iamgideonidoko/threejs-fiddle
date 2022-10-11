import type { PerspectiveCamera } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


const createControls = (camera: PerspectiveCamera, canvas: HTMLCanvasElement) => {
    const controls: OrbitControls & { tick?: () => boolean } = new OrbitControls(camera, canvas);

    // damping and auto rotation require
    // the controls to be updated each frame

    // this.controls.autoRotate = true;
    controls.enableDamping = true;

    controls.tick = () => controls.update();

    return controls;
}

export default createControls;
