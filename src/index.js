import {
  Scene,
  PerspectiveCamera,
  PointLight,
  AmbientLight,
  WebGLRenderer,
  OrbitControls,
  Group,
  Box3,
  SceneUtils
} from "three-full";
import svgToMesh from "./svgToMesh";
import groupAndFactoriseMeshes from "./groupAndFactoriseMeshes";

const renderer = new WebGLRenderer({
    canvas: document.querySelector("canvas")
  }), // { alpha: true }
  scene = new Scene(),
  camera = new PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  ),
  light = new PointLight(0xffffff, 1, 4000);

renderer.setSize(window.innerWidth, window.innerHeight - 80);
renderer.setPixelRatio(window.devicePixelRatio);

camera.position.set(100, 100, -200);

new OrbitControls(camera);

light.position.set(10, -100, 0);

scene.add(light, new AmbientLight(0x404040));

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();

const inputFront = document.getElementById("front_svg"),
  inputSide = document.getElementById("side_svg"),
  pathObject = { front: null, side: null };

/**
 * Selects an svg file and adds it to the pathObject
 * @param { Event } event
 */
const handleFileSelect = event => {
  const reader = new FileReader();

  reader.readAsDataURL(event.srcElement.files[0]);

  reader.onload = () => {
    // Remove previously appended img elements
    for (let child of event.target.parentNode.children) {
      if (child.nodeName === "IMG") {
        event.target.parentNode.removeChild(child);
      }
    }
    // create and append thumbnail
    const imgElm = document.createElement("img");
    imgElm.setAttribute("src", reader.result);
    event.target.parentNode.append(imgElm);

    if (event.target.name === "front") {
      pathObject.front = reader.result;
      event.target.previousElementSibling.innerHTML = "change front image";
    }
    if (event.target.name === "side") {
      pathObject.side = reader.result;
      event.target.previousElementSibling.innerHTML = "change side image";
    }

    // user has chosen front and side images
    if (pathObject.front != null && pathObject.side != null) {
      event.target.parentNode.parentNode.classList.add("chosen");
      // resolve promises
      Promise.all([
        svgToMesh(pathObject.front),
        svgToMesh(pathObject.side, true)
      ])
        .then(vals => {
          let tmpScene = new Scene();
          const arrOfFactorisedMeshes = [];

          for (const group of vals) {
            // centre again the group
            new Box3()
              .setFromObject(group)
              .getCenter(group.position)
              .multiplyScalar(-1);
            while (group.children.length) {
              // detach mesh from its group and add to tmpScene
              SceneUtils.detach(group.children[0], group, tmpScene);
            }
          }

          //scene.copy( tmpScene );

          groupAndFactoriseMeshes(tmpScene.children, arrOfFactorisedMeshes);

          const groupOfIntersections = new Group();
          // add meshes to new group
          for (let child of arrOfFactorisedMeshes) {
            groupOfIntersections.add(child);
          }
          // add group to scene
          scene.add(groupOfIntersections);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
};

inputFront.addEventListener("change", handleFileSelect);
inputSide.addEventListener("change", handleFileSelect);
