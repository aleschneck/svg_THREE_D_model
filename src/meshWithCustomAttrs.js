import { Mesh } from 'three-full';

/**
 * Class representing a Mesh with extra attributes colour and side.
 * @extends THREE.Mesh
 */
class MeshWithCustomAttrs extends Mesh {
  /**
   * @param  { THREE.ExtrudeGeometry } geometry
   * @param  { THREE.MeshBasicMaterial } material
   * @param  { number } colour
   * @param  { boolean } side
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