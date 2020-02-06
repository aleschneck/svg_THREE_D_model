import * as THREE from "three-full";
const ThreeBSP = require("three-js-csg")(THREE);

/**
 * compute two meshes with constructive solid geometry (CSG)
 * @param  { THREE.Mesh } a - one of the two meshes to be computed
 * @param  { THREE.Mesh } b - one of the two meshes to be computed
 * @param  { THREE.Material } material - the material of the computed solid
 * @param  { string } [operation=intersect] - the type of boolean operation,
 * @return { THREE.Mesh } the computed solid
 */
const meshFactory = (a, b, material, operation = "intersect") => {
  //console.log( a.hex, b.hex );
  const aBSP = new ThreeBSP(a);
  const bBSP = new ThreeBSP(b);

  let sub = null;
  switch (operation) {
    case "intersect":
      sub = aBSP.intersect(bBSP);
      break;
    case "union":
      sub = aBSP.union(bBSP);
      break;
    case "subtract":
      sub = aBSP.subtract(bBSP);
      break;
    default:
      console.warn(`${operation} is not a supported operation`);
  }

  const newMesh = sub.toMesh();

  newMesh.material = material;
  newMesh.castShadow = true;
  //console.log('new mesh', newMesh)
  return newMesh;
};

export default meshFactory;
