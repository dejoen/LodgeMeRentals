/* eslint-disable react/prop-types */
import { useRef } from "react";
import GetUserMedia from "./hooks/GetUserMedia";


const CustomCamera  = ({onCapture}) => {
const videoRef = useRef()
const canvasRef = useRef()
 const stream =  GetUserMedia({  audio: false,
    video: { facingMode: "environment" }})
   if(stream && videoRef.current){
       videoRef.current.srcObject = stream
       videoRef.current.play()
   }

   const  takePicture = () => {
     const context = canvasRef.current.getContext('2d')
      
     context.drawImage(videoRef.current,0,0,canvasRef.current.width,canvasRef.current.height
     )
     
     canvasRef.current.toBlob(blob=>onCapture(blob),'image/jpeg',1)
   }
   
    return (
    <div className="relative">
       <video className="w-full h-[200px]" ref={videoRef} />
       <div className=" absolute top-[2px] w-full h-[150px] bg-opacity-15">
        <canvas ref={canvasRef} className="w-full h-[150px]" />
        <div className="w-full flex items-center justify-center">
        <p className="w-[40px] h-[40px] bg-[#FFC839] rounded-full" onClick={()=>{
              takePicture()
        }}></p> 
        </div>
       </div>
    </div>
    );
}


export default CustomCamera