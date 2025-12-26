import {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
  StandardMaterial,
  Color3,
} from '@babylonjs/core';
import '@babylonjs/inspector';

const canvas = document.getElementById('renderCanvas') as HTMLCanvasElement;
const engine = new Engine(canvas, true);

const createScene = () => {
  const scene = new Scene(engine);
  scene.clearColor = new Color3(0.05, 0.05, 0.1).toColor4();

  const camera = new ArcRotateCamera(
    'camera',
    -Math.PI / 2,
    Math.PI / 2.5,
    5,
    new Vector3(0, 0, 0),
    scene,
  );
  camera.attachControl(canvas, true);

  const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);
  light.intensity = 0.7;

  const sphere = MeshBuilder.CreateSphere('sphere', { diameter: 2 }, scene);
  const material = new StandardMaterial('sphereMat', scene);
  material.diffuseColor = new Color3(0.4, 0.4, 1);
  material.emissiveColor = new Color3(0.1, 0.1, 0.2);
  sphere.material = material;

  return scene;
};

const scene = createScene();

// Debugging: Show inspector with Keyboard Shortcut (Shift+Ctrl+Alt+I)
window.addEventListener('keydown', (ev) => {
  if (ev.shiftKey && ev.ctrlKey && ev.altKey && ev.key === 'I') {
    if (scene.debugLayer.isVisible()) {
      scene.debugLayer.hide();
    } else {
      scene.debugLayer.show();
    }
  }
});

engine.runRenderLoop(() => {
  scene.render();
});

window.addEventListener('resize', () => {
  engine.resize();
});
