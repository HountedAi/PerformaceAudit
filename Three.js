<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
<div id="scanner"></div>
<script>
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize(innerWidth, innerHeight);
document.getElementById('scanner').appendChild(renderer.domElement);

const geometry = new THREE.CapsuleGeometry(0.8, 2.5, 10, 20);
const material = new THREE.MeshBasicMaterial({ color:0x00ff00, wireframe:true });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
camera.position.z = 6;

function animate(){
  requestAnimationFrame(animate);
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
</script>
