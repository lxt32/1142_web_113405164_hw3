"use client";

import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { Box, RoundedBox, Environment, OrbitControls } from "@react-three/drei";

export default function Showroom(){

    return(
        <>
        <Canvas style = {{width: "100%", height: "100vh"}}>

        <Environment preset = "forest" background = {true} backgroundBlurriness = {0.5} />
        <OrbitControls autoRotate = {true} />
            
            {/* <Box position = {[-3, 0, 0]}>
                <meshStandardMaterial color = "Red" />
            </Box> */}

            <RoundedBox position = {[0, 0, 0]} radius = {0.05} args = {[0.5, 1, 0.5]}> 
                {/* args長寬高 */}
                <meshStandardMaterial color = "brown" />
            </RoundedBox>

            <RoundedBox position = {[0, 0.5, 0]} radius = {0.05} args = {[1.5, 0.5, 1.5]}> 
                <meshStandardMaterial color = "darkgreen" />
            </RoundedBox>

            <RoundedBox position = {[0, 1, 0]} radius = {0.05} args = {[1, 0.5, 1]}> 
                <meshStandardMaterial color = "green" />
            </RoundedBox>

            <RoundedBox position = {[0, 1.5, 0]} radius = {0.05} args = {[0.5, 0.5, 0.5]}> 
                <meshStandardMaterial color = "lightgreen" />
            </RoundedBox>

            {/* <ambientLight intensity = {0.5}/>
            <directionalLight position = {[5, 5, 1]} intensity = {1} color = "white" /> */}
            
        </Canvas>
        </>
    )
}