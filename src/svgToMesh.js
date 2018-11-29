import { Group, SVGLoader, MeshBasicMaterial, ExtrudeGeometry, Box3 } from 'three-full';
import MeshWithCustomAttrs from './meshWithCustomAttrs';

/**
 * convert the chosen svg image into a custom mesh
 * @async
 * @param  { string } pathToSVG - the path to the svg file
 * @param  { boolean } [side=false] - whether the svg corresponds to the side view
 * @return { Promise<THREE.Group> } a group of meshes
 */
const svgToMesh = async ( pathToSVG, side = false ) => {
  const group = new Group();
  await new Promise( (resolve, reject) => {
    const svgLoader = new SVGLoader();
    
    svgLoader.load( pathToSVG , ( paths ) => {
        for ( let path of paths ) {
          let extrudeSettings = {
            steps: 2,
            depth: 1000,
            bevelEnabled: false
          }, material = new MeshBasicMaterial({
            color: path.color,
            depthWrite: false,
            wireframe: true
          }), shapes = path.toShapes( true );
    
          for ( let shape of shapes ) {
            const geometry = new ExtrudeGeometry( shape, extrudeSettings );
            const mesh = new MeshWithCustomAttrs( geometry, material, path.color.getHex(), side );
            group.add( mesh ); 
          }
        
        }
        if(side) {
          group.rotation.y = -90 * Math.PI/180;
          group.rotation.z = 180 * Math.PI/180;
        } else {
          group.rotation.z = 180 * Math.PI/180;
        }
        // centre group
        new Box3().setFromObject( group ).getCenter( group.position ).multiplyScalar( - 1 );
        resolve(group);
      }, ( xhr ) => {
        // called when loading is in progresses
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
      }, ( error ) => {
        // called when loading has errors
        reject(error);
      }
    );
  });
  return group;
}

export default svgToMesh;