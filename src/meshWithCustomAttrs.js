import { Mesh } from 'three-full';

/**
 * Class representing a Mesh with extra attributes colour and side.
 * @extends THREE.Mesh
 */
class MeshWithCustomAttrs extends Mesh {
  /**
   * @param  { THREE.ExtrudeGeometry } geometry - a geometry of a shape
   * @param  { THREE.MeshBasicMaterial } material - a material, usualy a wireframe with the shape colour
   * @param  { number } colour - a hex code ( the shape color )
   * @param  { boolean } side - whether it corresponds to the side image
   */
  constructor( geometry, material, colour, side ) {
    super( geometry, material );
    this.colour = colour;
    this.side = side;
  }
  /**
   * get the colour attribute
   * @return { number } the hex code representing its colour
   */
  get hex() {
    return this.colour;
  }
  /**
   * set the colour attribute ( should it be needed )
   * @param  { number } colour - a hex code
   */
  set hex( colour ) {
    this.colour = colour;
  }
}

export default MeshWithCustomAttrs;