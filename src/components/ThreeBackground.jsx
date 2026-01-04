import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function SphereParticles(props) {
    const ref = useRef();
    const [hovered, setHover] = useState(false);

    // Generate points on a sphere
    const particlesPosition = useMemo(() => {
        const count = 3000;
        const positions = new Float32Array(count * 3);
        const radius = 1.6; // Slightly increased radius

        for (let i = 0; i < count; i++) {

            // Uniform distribution on sphere surface
            const u = Math.random();
            const v = Math.random();
            const theta_angle = 2 * Math.PI * u;
            const phi_angle = Math.acos(2 * v - 1);

            const x = radius * Math.sin(phi_angle) * Math.cos(theta_angle);
            const y = radius * Math.sin(phi_angle) * Math.sin(theta_angle);
            const z = radius * Math.cos(phi_angle);

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
        }
        return positions;
    }, []);

    useFrame((state, delta) => {
        // Rotation
        if (ref.current) {
            ref.current.rotation.x -= delta / 15;
            ref.current.rotation.y -= delta / 20;

            // Subtle breathing/pulsing effect
            const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
            // If hovered, slightly expand
            const targetScale = hovered ? 1.05 : 1;
            // Smooth lerp for scale
            ref.current.scale.x = THREE.MathUtils.lerp(ref.current.scale.x, scale * targetScale, 0.1);
            ref.current.scale.y = THREE.MathUtils.lerp(ref.current.scale.y, scale * targetScale, 0.1);
            ref.current.scale.z = THREE.MathUtils.lerp(ref.current.scale.z, scale * targetScale, 0.1);
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={particlesPosition}
                stride={3}
                frustumCulled={false}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
                {...props}
            >
                <PointMaterial
                    transparent
                    color={hovered ? "#22d3ee" : "#8b5cf6"} // Cyan tint on hover, Violet default
                    size={0.015}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>
        </group>
    );
}

function ConnectionLines() {
    const ref = useRef();

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 15;
            ref.current.rotation.y -= delta / 20;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]} ref={ref}>
            {/* Low poly sphere wireframe to simulate connections */}
            <mesh scale={[1.5, 1.5, 1.5]}>
                <icosahedronGeometry args={[1, 2]} />
                <meshBasicMaterial
                    color="#7c3aed" // Primary Violet
                    wireframe
                    transparent
                    opacity={0.15}
                />
            </mesh>
            <mesh scale={[1.6, 1.6, 1.6]}>
                <icosahedronGeometry args={[1, 1]} />
                <meshBasicMaterial
                    color="#22d3ee" // Cyan highlights
                    wireframe
                    transparent
                    opacity={0.05}
                />
            </mesh>
        </group>
    )

}

export default function ThreeBackground() {
    return (
        <div className="absolute top-0 right-0 z-0 h-full w-full md:w-3/4 pointer-events-none md:pointer-events-auto overflow-hidden opacity-80 md:opacity-100">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
                <ambientLight intensity={0.5} />
                <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
                    <SphereParticles />
                    <ConnectionLines />
                </Float>
            </Canvas>
            {/* Fade overlay for better text readability on left if it overlaps */}
            <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/50 to-transparent pointer-events-none" />
        </div>
    );
}
