let scene, camera, renderer, cube;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('rubiksCube') });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const loader = new THREE.GLTFLoader();
    loader.load('rubiks_cube.gltf', function (gltf) {
        cube = gltf.scene;
        scene.add(cube);
        cube.position.set(0, 0, 0);
    }, undefined, function (error) {
        console.error('Error loading GLTF model:', error);
    });

    camera.position.z = 3;
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

window.addEventListener('keydown', (event) => {
    if (!cube) return;
    switch (event.key) {
        case 'x':
            cube.rotation.x += Math.PI / 2;
            break;
        case 'y':
            cube.rotation.y += Math.PI / 2;
            break;
        case 'z':
            cube.rotation.z += Math.PI / 2;
            break;
    }
});

init();
