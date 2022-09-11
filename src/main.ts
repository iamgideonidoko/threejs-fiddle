import World from './World';
import './style.css';

// Get a reference to the container element that will hold our scene
const container = document.querySelector('#scene-container');
if (container) {
  // 1. create an instance of the world app
  const world = new World(container);

  // 2. render the scene
  world.render();
}