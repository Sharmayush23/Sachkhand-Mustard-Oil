import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage } from "@react-three/drei";
import { Loader2 } from "lucide-react";

interface ModelViewerProps {
    modelPath: string;
    className?: string;
    autoRotate?: boolean;
}

function Model({ path }: { path: string }) {
    const { scene } = useGLTF(path);
    return <primitive object={scene} />;
}

export default function ModelViewer({ modelPath, className = "h-64 w-full", autoRotate = true }: ModelViewerProps) {
    return (
        <div className={`relative bg-gray-50 dark:bg-zinc-900 rounded-xl overflow-hidden ${className}`}>
            <Suspense
                fallback={
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                }
            >
                <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
                    <Stage environment="city" intensity={0.6}>
                        <Model path={modelPath} />
                    </Stage>
                    <OrbitControls autoRotate={autoRotate} />
                </Canvas>
            </Suspense>
        </div>
    );
}
