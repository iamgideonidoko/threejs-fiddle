import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { AnimationMixer, Object3D, Event } from 'three';

const setupModel = (data: GLTF) => {
  const model:  Object3D<Event> & { tick?: (delta: number) => void} = data.scene.children[0];
  const clip = data.animations[0];

  const mixer = new AnimationMixer(model);
  const action = mixer.clipAction(clip);
  action.play();

  model.tick = (delta) => mixer.update(delta);
  
  return model;
}
  
export default setupModel;
