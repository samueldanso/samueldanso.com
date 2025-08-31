'use client'

import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export function OrbitingAnimation() {
	return (
		<div className="w-full h-32">
			<Canvas camera={{ fov: 40, position: [0, 0, 5] }} gl={{ antialias: false }}>
				<PixelatedSphere />
				<Birds />
				<OrbitControls enableZoom={false} />
			</Canvas>
		</div>
	)
}

function PixelatedSphere() {
	const sphereRef = useRef<any>(null)

	useFrame(({ clock }: { clock: any }) => {
		if (sphereRef.current) {
			sphereRef.current.rotation.y = clock.getElapsedTime() * 1.2
			sphereRef.current.rotation.z = clock.getElapsedTime() * 0.7
		}
	})

	return (
		<points ref={sphereRef}>
			<icosahedronGeometry args={[1, 4]} />
			<pointsMaterial color="gray" size={0.05} />
		</points>
	)
}

function Birds() {
	const groupRef = useRef<any>(null)

	useFrame(({ clock }: { clock: any }) => {
		if (!groupRef.current) return
		const elapsedTime = clock.getElapsedTime()
		groupRef.current.children.forEach(
			(bird: { position: { x: number; y: number; z: number } }, index: number) => {
				const angle = (elapsedTime + index * 0.2) % (2 * Math.PI)
				const radius = 2.3 + Math.random() * 0.0001
				bird.position.x = radius * Math.cos(angle) - Math.sin(elapsedTime * 0.5 + index)
				bird.position.y = radius * Math.sin(angle) * Math.sin(elapsedTime * 0.5 + index)
				bird.position.z = radius * Math.cos(elapsedTime * 0.5 + index)
			}
		)
	})

	const birds = [...Array(48)].map((_, i) => {
		const size = i % 2 === 0 ? 0.03 : 0.05
		return (
			<mesh key={`bird-${i}-${size}`} position={[1, 0, 0]}>
				<planeGeometry args={[size, size]} />
				<meshBasicMaterial color="gray" />
			</mesh>
		)
	})

	return <group ref={groupRef}>{birds}</group>
}
