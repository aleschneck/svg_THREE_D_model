/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/groupAndFactoriseMeshes.js":
/*!****************************************!*\
  !*** ./src/groupAndFactoriseMeshes.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three-full */ \"./node_modules/three-full/builds/Three.es.js\");\n/* harmony import */ var _meshFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meshFactory */ \"./src/meshFactory.js\");\n\r\n\r\n\r\n\r\n/**\r\n * finds correspondent meshes and factorise their permutations\r\n * @param  { THREE.Mesh[] } src - an array of Meshes, usually the children of a THREE.Scene\r\n * @param  { Array } target - the target array for the grouped meshes\r\n */\r\nconst groupAndFactoriseMeshes = ( src, target ) => {\r\n  const grouped = { fronts: [], sides: [], hex: src[0].hex }, \r\n        arrCopy = src.map(a => a);\r\n\r\n  while( arrCopy.length ) {\r\n    const spliced = arrCopy.splice( 0, 1 )[0];\r\n    if( spliced.hex === grouped.hex ) {\r\n      if( spliced.side ) {\r\n        grouped.sides.push( spliced );\r\n      } else {\r\n        grouped.fronts.push( spliced );\r\n      }\r\n    }\r\n  }\r\n  src = src.filter( child => child.hex !== grouped.hex );\r\n\r\n  for( let front of grouped.fronts ){\r\n    for( let side of grouped.sides ) {\r\n      const factory = Object(_meshFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( front, side, new three_full__WEBPACK_IMPORTED_MODULE_0__[\"MeshLambertMaterial\"]( { color: grouped.hex } ) );     \r\n      target.push( factory );\r\n    }\r\n  }\r\n  if ( src.length ) {\r\n    groupAndFactoriseMeshes( src, target );\r\n  } else {\r\n    src = null;\r\n  }\r\n}\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (groupAndFactoriseMeshes);\n\n//# sourceURL=webpack:///./src/groupAndFactoriseMeshes.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three-full */ \"./node_modules/three-full/builds/Three.es.js\");\n/* harmony import */ var _svgToMesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svgToMesh */ \"./src/svgToMesh.js\");\n/* harmony import */ var _groupAndFactoriseMeshes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./groupAndFactoriseMeshes */ \"./src/groupAndFactoriseMeshes.js\");\n\r\n\r\n\r\n\r\nconst renderer = new three_full__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]( { canvas: document.querySelector('canvas') } ), // { alpha: true } \r\n      scene = new three_full__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"](),\r\n      camera = new three_full__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"]( 50, window.innerWidth/window.innerHeight, 0.1, 1000 ),\r\n      light = new three_full__WEBPACK_IMPORTED_MODULE_0__[\"PointLight\"]( 0xffffff, 1, 4000 );\r\n\r\nrenderer.setSize( window.innerWidth, window.innerHeight - 80 );\r\nrenderer.setPixelRatio( window.devicePixelRatio );\r\n\r\ncamera.position.set(100, 100, -200);\r\n\r\nnew three_full__WEBPACK_IMPORTED_MODULE_0__[\"OrbitControls\"]( camera );\r\n\r\nlight.position.set(10, -100, 0);\r\n\r\nscene.add( light, new three_full__WEBPACK_IMPORTED_MODULE_0__[\"AmbientLight\"]( 0x404040 ) );\r\n\r\nconst animate = () => {\r\n  requestAnimationFrame( animate );\r\n  renderer.render( scene, camera );\r\n};\r\n\r\nanimate();\r\n\r\nconst inputFront = document.getElementById( 'front_svg' ), \r\n      inputSide = document.getElementById( 'side_svg' ),\r\n      pathObject = { front: null, side: null };\r\n\t\t\r\n/**\r\n * Selects an svg file and adds it to the pathObject\r\n * @param { Event } event \r\n */\r\nconst\thandleFileSelect = ( event ) => {\r\n\r\n  const\treader = new FileReader();\r\n  \r\n  reader.readAsDataURL( event.srcElement.files[0] );\r\n\r\n  reader.onload = () => {\r\n    // Remove previously appended img elements\r\n    for( let child of event.target.parentNode.children ) {\r\n      if( child.nodeName === 'IMG' ) {\r\n        event.target.parentNode.removeChild( child );\r\n      }\r\n    }\r\n    // create and append thumbnail\r\n    const imgElm = document.createElement('img');\r\n    imgElm.setAttribute('src', reader.result );\r\n    event.target.parentNode.append( imgElm );\r\n    \r\n    if( event.target.name === 'front' ) {\r\n      pathObject.front = reader.result;\r\n      event.target.previousElementSibling.innerHTML = 'change front image';\r\n    }\r\n    if( event.target.name === 'side' ) {\r\n      pathObject.side = reader.result;\r\n      event.target.previousElementSibling.innerHTML = 'change side image';\r\n    }\r\n\r\n    // user has chosen front and side images\r\n    if( pathObject.front != null && pathObject.side != null ) {\r\n      event.target.parentNode.parentNode.classList.add( 'chosen' );\r\n      // resolve promises\r\n      Promise.all([\r\n        Object(_svgToMesh__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( pathObject.front ),\r\n        Object(_svgToMesh__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( pathObject.side, true )\r\n      ])\r\n      .then( vals => {\r\n\r\n        let tmpScene = new three_full__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\r\n        const arrOfFactorisedMeshes = [];\r\n\r\n        for ( const group of vals ) {\r\n          // centre again the group\r\n          new three_full__WEBPACK_IMPORTED_MODULE_0__[\"Box3\"]().setFromObject( group ).getCenter( group.position ).multiplyScalar( - 1 );\r\n          while ( group.children.length ) {\r\n            // detach mesh from its group and add to tmpScene\r\n            three_full__WEBPACK_IMPORTED_MODULE_0__[\"SceneUtils\"].detach( group.children[0], group, tmpScene );\r\n          }\r\n        }\r\n      \r\n        //scene.copy( tmpScene );\r\n         \r\n        Object(_groupAndFactoriseMeshes__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( tmpScene.children, arrOfFactorisedMeshes );\r\n        \r\n        const groupOfIntersections = new three_full__WEBPACK_IMPORTED_MODULE_0__[\"Group\"]();\r\n        // add meshes to new group\r\n        for ( let child of arrOfFactorisedMeshes ) {\r\n          groupOfIntersections.add( child );\r\n        }\r\n        // add group to scene\r\n        scene.add( groupOfIntersections );\r\n        \r\n      })\r\n      .catch( err => { console.log(err) });\r\n    }\r\n  }\r\n}\r\n  \r\ninputFront.addEventListener( 'change', handleFileSelect );\r\ninputSide.addEventListener( 'change', handleFileSelect );\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/meshFactory.js":
/*!****************************!*\
  !*** ./src/meshFactory.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three-full */ \"./node_modules/three-full/builds/Three.es.js\");\n\r\nconst ThreeBSP = __webpack_require__(/*! three-js-csg */ \"./node_modules/three-js-csg/index.js\")(three_full__WEBPACK_IMPORTED_MODULE_0__);\r\n\r\n/**\r\n * compute two meshes with constructive solid geometry (CSG)\r\n * @param  { THREE.Mesh } a - one of the two meshes to be computed\r\n * @param  { THREE.Mesh } b - one of the two meshes to be computed\r\n * @param  { THREE.Material } material - the material of the computed solid\r\n * @param  { string } [operation=intersect] - the type of boolean operation,\r\n * @return { THREE.Mesh } the computed solid\r\n */\r\nconst meshFactory = ( a, b, material, operation = 'intersect' ) => {\r\n  //console.log( a.hex, b.hex );\r\n  const aBSP = new ThreeBSP(a);\r\n  const bBSP = new ThreeBSP(b);\r\n\r\n  let sub = null;\r\n  switch( operation ) {\r\n    case 'intersect':\r\n      sub = aBSP.intersect(bBSP);\r\n      break;\r\n    case 'union':\r\n      sub = aBSP.union(bBSP);\r\n      break;\r\n    case 'subtract':\r\n      sub = aBSP.subtract(bBSP);\r\n      break;\r\n    default:\r\n      console.warn( `${operation} is not a supported operation` );\r\n  }\r\n\r\n  const newMesh = sub.toMesh();\r\n\r\n  newMesh.material = material;\r\n  newMesh.castShadow = true;\r\n  //console.log('new mesh', newMesh)\r\n  return newMesh;\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (meshFactory);\n\n//# sourceURL=webpack:///./src/meshFactory.js?");

/***/ }),

/***/ "./src/meshWithCustomAttrs.js":
/*!************************************!*\
  !*** ./src/meshWithCustomAttrs.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three-full */ \"./node_modules/three-full/builds/Three.es.js\");\n\r\n\r\n/**\r\n * Class representing a Mesh with extra attributes colour and side.\r\n * @extends THREE.Mesh\r\n */\r\nclass MeshWithCustomAttrs extends three_full__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"] {\r\n  /**\r\n   * @param  { THREE.ExtrudeGeometry } geometry - a geometry of a shape\r\n   * @param  { THREE.MeshBasicMaterial } material - a material, usualy a wireframe with the shape colour\r\n   * @param  { number } colour - a hex code ( the shape color )\r\n   * @param  { boolean } side - whether it corresponds to the side image\r\n   */\r\n  constructor( geometry, material, colour, side ) {\r\n    super( geometry, material );\r\n    this.colour = colour;\r\n    this.side = side;\r\n  }\r\n  /**\r\n   * get the colour attribute\r\n   * @return { number } the hex code representing its colour\r\n   */\r\n  get hex() {\r\n    return this.colour;\r\n  }\r\n  /**\r\n   * set the colour attribute ( should it be needed )\r\n   * @param  { number } colour - a hex code\r\n   */\r\n  set hex( colour ) {\r\n    this.colour = colour;\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeshWithCustomAttrs);\n\n//# sourceURL=webpack:///./src/meshWithCustomAttrs.js?");

/***/ }),

/***/ "./src/svgToMesh.js":
/*!**************************!*\
  !*** ./src/svgToMesh.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three-full */ \"./node_modules/three-full/builds/Three.es.js\");\n/* harmony import */ var _meshWithCustomAttrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meshWithCustomAttrs */ \"./src/meshWithCustomAttrs.js\");\n\r\n\r\n\r\n/**\r\n * convert the chosen svg image into a custom mesh\r\n * @async\r\n * @param  { string } pathToSVG - the path to the svg file\r\n * @param  { boolean } [side=false] - whether the svg corresponds to the side view\r\n * @return { Promise<THREE.Group> } a group of meshes\r\n */\r\nconst svgToMesh = async ( pathToSVG, side = false ) => {\r\n  const group = new three_full__WEBPACK_IMPORTED_MODULE_0__[\"Group\"]();\r\n  await new Promise( (resolve, reject) => {\r\n    const svgLoader = new three_full__WEBPACK_IMPORTED_MODULE_0__[\"SVGLoader\"]();\r\n    \r\n    svgLoader.load( pathToSVG , ( paths ) => {\r\n        for ( let path of paths ) {\r\n          let extrudeSettings = {\r\n            steps: 2,\r\n            depth: 1000,\r\n            bevelEnabled: false\r\n          }, material = new three_full__WEBPACK_IMPORTED_MODULE_0__[\"MeshBasicMaterial\"]({\r\n            color: path.color,\r\n            depthWrite: false,\r\n            wireframe: true\r\n          }), shapes = path.toShapes( true );\r\n    \r\n          for ( let shape of shapes ) {\r\n            const geometry = new three_full__WEBPACK_IMPORTED_MODULE_0__[\"ExtrudeGeometry\"]( shape, extrudeSettings );\r\n            const mesh = new _meshWithCustomAttrs__WEBPACK_IMPORTED_MODULE_1__[\"default\"]( geometry, material, path.color.getHex(), side );\r\n            group.add( mesh ); \r\n          }\r\n        \r\n        }\r\n        if(side) {\r\n          group.rotation.y = 90 * Math.PI/180;\r\n          group.rotation.z = 180 * Math.PI/180;\r\n        } else {\r\n          group.rotation.z = 180 * Math.PI/180;\r\n        }\r\n        // centre group\r\n        new three_full__WEBPACK_IMPORTED_MODULE_0__[\"Box3\"]().setFromObject( group ).getCenter( group.position ).multiplyScalar( - 1 );\r\n        resolve(group);\r\n      }, ( xhr ) => {\r\n        // called when loading is in progresses\r\n        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );\r\n      }, ( error ) => {\r\n        // called when loading has errors\r\n        reject(error);\r\n      }\r\n    );\r\n  });\r\n  return group;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (svgToMesh);\n\n//# sourceURL=webpack:///./src/svgToMesh.js?");

/***/ })

/******/ });