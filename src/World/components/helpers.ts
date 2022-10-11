import { AxesHelper, GridHelper } from 'three';

const createAxesHelper = (): AxesHelper => {
  const helper = new AxesHelper(3);
  helper.position.set(-3.5, 0, -3.5);
  return helper;
}

const createGridHelper = (): GridHelper => {
  const helper = new GridHelper(6);
  return helper;
}

export { createAxesHelper, createGridHelper };
