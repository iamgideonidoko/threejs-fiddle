import type { PerspectiveCamera, WebGLRenderer } from 'three';

class Resizer {
  constructor(container: Element, camera: PerspectiveCamera, renderer: WebGLRenderer) {
    // set initial size on load
    this.setSize(container, camera, renderer);

    window.addEventListener('resize', () => {
      this.setSize(container, camera, renderer);
      // perform any custom actions
      this.onResize();
    })
  }
  
  private setSize(container: Element, camera: PerspectiveCamera, renderer: WebGLRenderer): void {
    // Set the camera's aspect ratio
    camera.aspect = container.clientWidth / container.clientHeight;
  
    // update the camera's frustum
    camera.updateProjectionMatrix();
  
    // update the size of the renderer AND the canvas
    renderer.setSize(container.clientWidth, container.clientHeight);
  
    // set the pixel ratio (for mobile devices)
    renderer.setPixelRatio(window.devicePixelRatio);
  }

  // resize hook
  public onResize(): void {}
}

export default Resizer;
