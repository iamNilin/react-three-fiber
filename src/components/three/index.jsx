import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { MeshStandardMaterial, PlaneGeometry } from "three"
import { angleToRadians } from "../../utils/angle"

const   Three = () => {
  return (
    <>
    {/* override camera */}
    <PerspectiveCamera makeDefault position={[0,1,4]}/>
    <OrbitControls/>

 {/* creating a ball */}

 <mesh position={[0,0.5,0]}>
    <sphereGeometry 
     args={[0.5,32,32]}
     />
    <meshStandardMaterial color="white" />
 </mesh>

{/* floor */}
<mesh rotation={[-(angleToRadians(90)),0,0]}>
    <planeGeometry args={[5,5]}    />
    <meshStandardMaterial 
    color="cyan"
    />
</mesh>

{/* illuminates everything */}
        <ambientLight args={["#ffffff",1]}/>
    </>
  )
}

export default Three