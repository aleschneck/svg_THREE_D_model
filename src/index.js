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
} from 'three-full';
import svgToMesh from './svgToMesh';
import groupAndFactoriseMeshes from './groupAndFactoriseMeshes';

const scene = new Scene();
       
const camera = new PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.set(0, 1, 100);

const light = new PointLight(0xffffff, 1, 4000), 
      light2 = new PointLight(0xffffff, 1, 4000);
light.position.set(50, 0, 0);
light2.position.set(100, 800, 800);
scene.add(light, light2, new AmbientLight(0x404040));


const renderer = new WebGLRenderer(); // { alpha: true }
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio( window.devicePixelRatio );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera );

const front = svgToMesh('../svg/plane_c_front.svg'), side = svgToMesh('../svg/plane_c_side.svg', true );

Promise.all([
  front,
  side
])
.then( vals => {
  let scn = new Scene();
  const arr = [];
  for ( const group of vals ) {
    new Box3().setFromObject( group ).getCenter( group.position ).multiplyScalar( - 1 );
    while (group.children.length) {
      SceneUtils.detach( group.children[0], group, scn );
    }
  }

  //scene.copy( scn );
  
  
  groupAndFactoriseMeshes( scn.children, arr );
  
  const groupOfIntersections = new Group();
  for ( let child of arr ) {
    groupOfIntersections.add( child );
  }
  scene.add( groupOfIntersections );
  
})
.catch( err => { console.log(err) })

//camera.lookAt(new THREE.Vector3());

const animate = () => {
  requestAnimationFrame( animate );

  //cube.rotation.x += 0.01;
  //cube.rotation.y += 0.01;

  renderer.render( scene, camera );
};

animate();

//console.log(scene);