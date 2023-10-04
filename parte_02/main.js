import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
//CAMERA - SCENE
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera.position.set(10,5,10)
camera.lookAt(0, 0, 0);  

var textureLoader = new THREE.TextureLoader();
textureLoader.load('textures/bg_texture_2.jpg', (texture) => scene.background = texture);

// TERRAIN
var textureLoader = new THREE.TextureLoader();
var grassTexture = textureLoader.load('textures/grass_texture_2.jpg');

const groundGeometry = new THREE.BoxGeometry(15, 0.1, 15);
const groundMaterial = new THREE.MeshPhongMaterial({ map: grassTexture });
const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
groundMesh.receiveShadow = true;
groundMesh.position.y = -0.2;
scene.add( groundMesh );

var dirtTexture = textureLoader.load('textures/dirt_texture.jpg');
const landGeometry = new THREE.BoxGeometry(15, 5, 15);
const landMaterial = new THREE.MeshPhongMaterial({ map: dirtTexture });
const landMesh = new THREE.Mesh(landGeometry, landMaterial);
landMesh.receiveShadow = true;
landMesh.position.y = -2.75;
scene.add( landMesh );

//MODELS
const loader = new GLTFLoader();

//ARBOLES
loader.load(`models/tree/scene.gltf`, (gltf) => { 
	let tree = gltf.scene;
	tree.traverse((node) => {
		node.castShadow = true;
	})

	var tree_clone_1 = tree.clone();
	tree_clone_1.position.set(-2, 4, 5);
	tree_clone_1.scale.set(0.8,1,0.6)
	tree_clone_1.rotation.y = 3;
	scene.add(tree_clone_1);

	var tree_clone_2 = tree.clone();
	tree_clone_2.position.set(6.8, 4, -4);
	tree_clone_2.rotation.y = 1;
	scene.add(tree_clone_2);

	var tree_clone_3 = tree.clone();
	tree_clone_3.position.set(-5, 6, -6);
	tree_clone_3.scale.set(0.6,2,0.6)
	tree_clone_3.rotation.y = 3;
	scene.add(tree_clone_3);

	var tree_clone_4 = tree.clone();
	tree_clone_4.position.set(-2.5, 3, -6);
	tree_clone_4.scale.set(0.8,0.8,0.8)
	scene.add(tree_clone_4);
});

//PASTO
loader.load(`models/grass/scene.gltf`, (gltf) => { 
	let grass = gltf.scene;
	grass.traverse((node) => {
		node.castShadow = true;
	})

	var grass_clone_1 = grass.clone()
	grass_clone_1.rotation.x = 1.5;
	grass_clone_1.position.set(4, 0, 6);
	scene.add(grass_clone_1);

	var grass_clone_11 = grass.clone()
	grass_clone_11.rotation.x = 1.5;
	grass_clone_11.position.set(4, 0.1, 6.5);
	grass_clone_11.scale.set(0.8,0.8,2)
	scene.add(grass_clone_11);


	var grass_clone_2 = grass.clone()
	grass_clone_2.rotation.x = 1.5;
	grass_clone_2.position.set(2.5, -0.2, 5);
	scene.add(grass_clone_2);

	var grass_clone_3 = grass.clone()
	grass_clone_3.rotation.x = 1.5;
	grass_clone_3.position.set(-4, 0, 6);
	scene.add(grass_clone_3);

	var grass_clone_33 = grass.clone()
	grass_clone_33.rotation.x = 1.5;
	grass_clone_33.position.set(-4.8, 0, 6.5);
	scene.add(grass_clone_33);

	var grass_clone_333 = grass.clone()
	grass_clone_333.rotation.x = 1.5;
	grass_clone_333.scale.set(0.8,0.8,2)
	grass_clone_333.position.set(-4.4, 0, 6.2);
	scene.add(grass_clone_333);

	var grass_clone_4 = grass.clone()
	grass_clone_4.rotation.x = 1.5;
	grass_clone_4.scale.set(0.8,0.8,2)
	grass_clone_4.position.set(1, 0, -5);
	scene.add(grass_clone_4);

	var grass_clone_44 = grass.clone()
	grass_clone_44.rotation.x = 1.5;
	grass_clone_44.scale.set(0.8,0.4,1)
	grass_clone_44.position.set(1.4, 0, -5.3);
	scene.add(grass_clone_44);
});

//FLORES
loader.load(`models/flower/scene.gltf`, (gltf) => { 
	let flower = gltf.scene;
	flower.traverse((node) => {
		node.castShadow = true;
	})

	var flowe_clone_1 = flower.clone()
	flowe_clone_1.rotation.y = 1.6
	flowe_clone_1.scale.set(0.5, 0.6, 0.5)
	flowe_clone_1.position.set(8,-0.5,-1);
	scene.add(flowe_clone_1);

	var flowe_clone_2 = flower.clone()
	flowe_clone_2.scale.set(0.5, 0.6, 0.5)
	flowe_clone_2.position.set(-2,-0.5,7);
	scene.add(flowe_clone_2);

	var flowe_clone_2 = flower.clone()
	flowe_clone_2.scale.set(0.5, 0.6, 0.5)
	flowe_clone_2.position.set(-2,-0.5,-1);
	scene.add(flowe_clone_2);
});

//TIERRA
loader.load(`models/dirt/scene.gltf`, (gltf) => { 
	let dirt = gltf.scene;
	dirt.traverse((node) => {
		node.receiveShadow = true;
	})

	var dirt_clone_1 = dirt.clone()
	dirt_clone_1.scale.set(0.3,0.3,0.3)
	dirt_clone_1.position.set(0.5,-0.48,1.6);
	dirt_clone_1.rotation.x = 1.5
	dirt_clone_1.rotation.z = 2
	scene.add(dirt_clone_1);

	var dirt_clone_2 = dirt.clone()
	dirt_clone_2.scale.set(0.3,0.2,0.3)
	dirt_clone_2.position.set(2,-0.42,2);
	dirt_clone_2.rotation.x = 1.7
	scene.add(dirt_clone_2);

	var dirt_clone_3 = dirt.clone()
	dirt_clone_3.scale.set(0.3,0.3,0.3)
	dirt_clone_3.position.set(3,-0.48,3);
	dirt_clone_3.rotation.x = 1.7
	dirt_clone_3.rotation.z = 1.5
	scene.add(dirt_clone_3);

	var dirt_clone_4 = dirt.clone()
	dirt_clone_4.scale.set(0.3,0.3,0.3)
	dirt_clone_4.position.set(4,-0.48,4);
	dirt_clone_4.rotation.x = 1.5
	dirt_clone_4.rotation.z = 2
	scene.add(dirt_clone_4);

	var dirt_clone_5 = dirt.clone()
	dirt_clone_5.scale.set(0.3,0.3,0.3)
	dirt_clone_5.position.set(5,-0.48,5);
	dirt_clone_5.rotation.x = 1.7
	dirt_clone_5.rotation.z = 2
	scene.add(dirt_clone_5);
});


//CABAÑA
loader.load(`models/cabin/scene.gltf`, (gltf) => { 
	let cabin = gltf.scene;
	cabin.traverse((node) => {
		node.castShadow = true;
		node.receiveShadow = true
	})
	cabin.scale.set(0.3, 0.3, 0.3)
	cabin.position.set(-1.8,0,0.4);
	cabin.rotation.y = 1.1;
	scene.add(cabin);
});


//TRONCOS
loader.load(`models/trunk/scene.gltf`, (gltf) => { 
	let trunk = gltf.scene;
	trunk.traverse((node) => {
		node.castShadow = true;
	})

	var trunk_clone_1 = trunk.clone();
	trunk_clone_1.position.set(-5, -0.12, 4)
	scene.add(trunk_clone_1);

	var trunk_clone_2 = trunk.clone();
	trunk_clone_2.position.set(0, -0.12, -4)
	scene.add(trunk_clone_2);

	var trunk_clone_3 = trunk.clone();
	trunk_clone_3.position.set(1, -0.12, 6)
	scene.add(trunk_clone_3);
});

//TRUCK
loader.load(`models/truck/scene.gltf`, (gltf) => { 
	let truck = gltf.scene;
	truck.scale.set(0.008, 0.008, 0.008)
	truck.traverse((node) => {
		node.castShadow = true;
	})
	truck.rotation.y = -1;
	truck.position.set(4.5, 0.18, -1.5);
	scene.add(truck);
});

//POSTE
loader.load(`models/lanter/scene.gltf`, (gltf) => { 
	let lanter = gltf.scene;
	lanter.scale.set(0.4, 0.4, 0.4)
	lanter.traverse((node) => {
		node.castShadow = true;
	})
	lanter.position.set(5.5, -0.9, 5);
	lanter.rotation.y = 5.6
	scene.add(lanter);
});


//LUZ
//direccional
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.1 );
directionalLight.position.set( 25, 40, 20 );
directionalLight.castShadow = true;

directionalLight.shadow.camera.left =-25
directionalLight.shadow.camera.right =25
directionalLight.shadow.camera.top =25
directionalLight.shadow.camera.bottom = -25
directionalLight.shadow.mapSize.width = 1024; // default
directionalLight.shadow.mapSize.height = 1024; // default

scene.add(directionalLight);

//point
const lightPoint = new THREE.PointLight( 0xd04800, 8, 300 );
lightPoint.position.set( 3.1, 1.35, 4.35 );

scene.add( lightPoint );

//SPOT R
const geometryR = new THREE.BoxGeometry( .1, .1, .1 );
const materialR = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube_car_light_R = new THREE.Mesh( geometryR, materialR );
cube_car_light_R.position.set(5.9,0.5,1.8)
scene.add( cube_car_light_R );
cube_car_light_R.visible = false;


const carLightR = new THREE.SpotLight( 0xffffff );
carLightR.position.set( 5.15, 0.5, 0.6 );

carLightR.target = cube_car_light_R;
carLightR.castShadow = true;
carLightR.shadow.mapSize.width = 512;
carLightR.shadow.mapSize.height = 512;
scene.add( carLightR );

//SPOT L
const geometryL = new THREE.BoxGeometry( .1, .1, .1 );
const materialL = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube_car_light_L = new THREE.Mesh( geometryL, materialL );
cube_car_light_L.position.set(7,0.5,2)
scene.add( cube_car_light_L );
cube_car_light_L.visible = false;

const carLightL = new THREE.SpotLight( 0xffffff );
carLightL.position.set( 6.2, 0.5, 0 );

carLightL.target = cube_car_light_L;
carLightL.castShadow = true;
carLightL.shadow.mapSize.width = 512;
carLightL.shadow.mapSize.height = 512;
scene.add( carLightL );

//RENDER
const render = new THREE.WebGLRenderer();
render.setSize( window.innerWidth, window.innerHeight );
render.shadowMap.enabled = true;
render.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild( render.domElement );

//POST-PROCESSING
const renderScene = new RenderPass(scene, camera);
const composer = new EffectComposer(render)
composer.addPass(renderScene)

const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.6)
composer.addPass(bloomPass)


//CONTROLS
let controls = new OrbitControls(camera, render.domElement);

//shadow debuger
/*const helper = new THREE.CameraHelper( directionalLight.shadow.camera );
scene.add( helper );*/

function animate(){
	// render.render(scene, camera);
	composer.render()
	requestAnimationFrame(animate);

	
}

window.addEventListener("resize", function () {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	render.setSize(window.innerWidth, window.innerHeight);
});


animate()