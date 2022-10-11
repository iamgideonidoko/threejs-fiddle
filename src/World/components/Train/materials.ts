import { MeshStandardMaterial } from 'three';

const createMaterials = (): { body: MeshStandardMaterial, detail: MeshStandardMaterial } => {
  const body = new MeshStandardMaterial({
    color: 'firebrick',
    flatShading: true,
  });

  const detail = new MeshStandardMaterial({
    color: 'darkslategray',
    flatShading: true,
  });

  return { body, detail };
}

export default createMaterials;
