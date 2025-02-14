import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function HangmanScene({ mistakes }) {
  const mountRef = useRef(null);
  const bodyParts = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    while (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild);
    }

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(450, 300);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);

    // Environment
    scene.background = new THREE.Color("#87CEEB");
    const fog = new THREE.Fog("#87CEEB", 15, 30);
    scene.fog = fog;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    scene.add(directionalLight);

    // Ground
    const groundGeometry = new THREE.PlaneGeometry(50, 50);
    const groundMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x90EE90,
      roughness: 0.8,
      metalness: 0.2
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -4;
    ground.receiveShadow = true;
    scene.add(ground);

    // Materials with better properties
    const skinMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xffdab9,
      roughness: 0.3,
      metalness: 0.1
    });
    const clothesMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x4169e1,
      roughness: 0.7,
      metalness: 0.1
    });
    const woodMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x8B4513,
      roughness: 0.9,
      metalness: 0.1
    });
    const metalMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x808080,
      roughness: 0.2,
      metalness: 0.8
    });

    const hangmanGroup = new THREE.Group();
    
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.7, 32, 32),
      skinMaterial
    );
    
    const body = new THREE.Mesh(
      new THREE.CylinderGeometry(0.4, 0.4, 3, 16),
      clothesMaterial
    );

    const rightArm = new THREE.Mesh(
      new THREE.CylinderGeometry(0.2, 0.2, 2),
      skinMaterial
    );
    const leftArm = rightArm.clone();

    const rightLeg = new THREE.Mesh(
      new THREE.CylinderGeometry(0.25, 0.2, 2),
      clothesMaterial
    );
    const leftLeg = rightLeg.clone();

    const rightFoot = new THREE.Mesh(
      new THREE.BoxGeometry(0.6, 0.3, 0.8),
      skinMaterial
    );
    const leftFoot = rightFoot.clone();

    head.position.set(0, 1.5, 0);
    body.position.set(0, 0, 0);
    rightArm.position.set(1, 1, 0);
    rightArm.rotation.z = Math.PI * 0.75;
    leftArm.position.set(-1, 1, 0);
    leftArm.rotation.z = -Math.PI * 0.75;
    rightLeg.position.set(0.3, -2, 0);
    rightLeg.rotation.z = Math.PI * 0.1;
    leftLeg.position.set(-0.3, -2, 0);
    leftLeg.rotation.z = -Math.PI * 0.1;
    rightFoot.position.set(0.6, -3, 0.2);
    leftFoot.position.set(-0.6, -3, 0.2);

    [head, body, rightArm, leftArm, rightLeg, leftLeg, rightFoot, leftFoot].forEach(part => {
      part.castShadow = true;
      part.receiveShadow = true;
    });

    bodyParts.current = [head, body, rightArm, leftArm, rightLeg, leftLeg, rightFoot, leftFoot];
    bodyParts.current.forEach(part => {
      part.visible = false;
      hangmanGroup.add(part);
    });

    scene.add(hangmanGroup);

    const hanger = new THREE.Group();
    
    const pole = new THREE.Mesh(
      new THREE.BoxGeometry(0.5, 8, 0.5),
      woodMaterial
    );
    pole.position.set(-4, 0, 0);
    pole.castShadow = true;

    const topBar = new THREE.Mesh(
      new THREE.BoxGeometry(4.5, 0.5, 0.5),
      woodMaterial
    );
    topBar.position.set(-2, 4, 0);
    topBar.castShadow = true;

    const supportBeam = new THREE.Mesh(
      new THREE.BoxGeometry(0.3, 3, 0.3),
      woodMaterial
    );
    supportBeam.position.set(-3, 3, 0);
    supportBeam.rotation.z = Math.PI * -0.25;
    supportBeam.castShadow = true;

    const hook = new THREE.Mesh(
      new THREE.TorusGeometry(0.2, 0.05, 32, 64),
      metalMaterial
    );
    hook.rotation.x = Math.PI / 2;
    hook.scale.z = 10
    hook.position.set(0, 3.5, 0);
    hook.castShadow = true;

    hanger.add(pole, topBar, supportBeam, hook);
    scene.add(hanger);

    // Camera and controls setup
    camera.position.set(5, 3, 6);
    camera.lookAt(scene.position);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 5;
    controls.maxDistance = 20;

    // Animation
    function animate() {
      animationRef.current = requestAnimationFrame(animate);
      
      // Gentle swaying animation for visible body parts
      bodyParts.current.forEach((part, index) => {
        if (part.visible) {
          part.rotation.z += Math.sin(Date.now() * 0.001) * 0.0005;
        }
      });

      controls.update();
      renderer.render(scene, camera);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      renderer.dispose();
      controls.dispose();
    };
  }, []);

  useEffect(() => {
    bodyParts.current.forEach((part, index) => {
      part.visible = index < mistakes;
    });
  }, [mistakes]);

  return (
    <div className="scene-container">
      <div ref={mountRef}  className="scene-canvas"/>
    </div>
  );
}

export default HangmanScene;
