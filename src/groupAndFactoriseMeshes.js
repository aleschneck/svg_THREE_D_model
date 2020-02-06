import { MeshLambertMaterial } from "three-full";
import meshFactory from "./meshFactory";

/**
 * finds correspondent meshes and factorise their permutations
 * @param  { THREE.Mesh[] } src - an array of Meshes, usually the children of a THREE.Scene
 * @param  { Array } target - the target array for the grouped meshes
 */
const groupAndFactoriseMeshes = (src, target) => {
  const grouped = { fronts: [], sides: [], hex: src[0].hex },
    arrCopy = src.map(a => a);

  while (arrCopy.length) {
    const spliced = arrCopy.splice(0, 1)[0];
    if (spliced.hex === grouped.hex) {
      if (spliced.side) {
        grouped.sides.push(spliced);
      } else {
        grouped.fronts.push(spliced);
      }
    }
  }
  src = src.filter(child => child.hex !== grouped.hex);

  for (let front of grouped.fronts) {
    for (let side of grouped.sides) {
      const factory = meshFactory(
        front,
        side,
        new MeshLambertMaterial({ color: grouped.hex })
      );
      target.push(factory);
    }
  }
  if (src.length) {
    groupAndFactoriseMeshes(src, target);
  } else {
    src = null;
  }
};

export default groupAndFactoriseMeshes;
