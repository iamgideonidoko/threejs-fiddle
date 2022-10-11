import { BoxGeometry, Mesh, MeshStandardMaterial, MathUtils } from 'three';

const createCube = (): Mesh<any, MeshStandardMaterial> => {
  // create a geometry
  const geometry = new BoxGeometry(2, 2, 2);

  // create a default (white) Basic material
  const material = new MeshStandardMaterial({ color: 'purple' });

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8);

  // cube.position.x = -0.5;
  // cube.position.y = -0.1;
  // cube.position.z = 1;

  // // equivalent to:
  // // cube.position.set(-0.5, -0.1, 1);

  // cube.scale.x = 1.25;
  // cube.scale.y = 0.25;
  // cube.scale.z = 0.5;

  // // equivalent to:
  // // cube.scale.set(1.25, 0.25, 0.5);

  // // to rotate using degrees, they must
  // // first be converted to radians
  // cube.rotation.x = MathUtils.degToRad(-60);
  // cube.rotation.y = MathUtils.degToRad(-45);
  // cube.rotation.z = MathUtils.degToRad(60);

  const radiansPerSecond = MathUtils.degToRad(30);

  // this method will be called once per frame
  cube.tick = (delta) => {
    // increase the cube's roation each frame
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  }

  return cube;
}

export default createCube;
