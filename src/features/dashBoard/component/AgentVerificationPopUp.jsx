/* eslint-disable react/prop-types */
import { FilePicker } from "react-file-picker";
import proccessedIcon  from '../../../assets/processingDoc.svg'
import  LodgeMeIcon  from '../../../assets/lodgeMeIcon.svg'
import { useContext, useState } from "react";

import CustomCamera from "../../../utils/Camera/CustomCamera";
import { uploadData } from "../service";
import { CircularProgress } from "@chakra-ui/progress";
import { CombineContext } from "../../../context/CombineContextProvider";
import { data } from "autoprefixer";


 

   
const AgentVerificationPopUp = ({showScreen,token}) =>{
   const {agentReducerState,agentReducerDispatcher} = useContext(CombineContext)
   const [openCamera,setOpenCamera] = useState(false)
    const [selfieImage,setSelfieImage] =useState(null)
   const [documentIDFile,setDocummentIdFile] = useState({
      filePath:'',
      fileName:''
   })

   const [openScreen,setOpenScreen] = useState(()=>{
      return{
       wholeScreen:showScreen,
       proccessingScreen:false,
       uploadDocumentScreen:true
   }})

   const [userSelfie,setUserSelfie] = useState('')

  const [showErrorText,setShowErrorText
  ] = useState(false)

  const [serverErrorMessage,setServerErrorMessage] = useState(null)
  const [displayLoadingBar,setDisplayLoadingBar] = useState(false)

     const  decodeFile = async (file) => {
    const fileReader = new FileReader()
    
     fileReader.onload = (e)=>{
       
         setDocummentIdFile((prevState)=>{
            return{
               ...prevState,
               filePath:e.target.result,
               fileName:file.name
            }
         })
         
     }
     fileReader.readAsDataURL(file)
     }

     const decodeImage = async (image) =>{
      const imageReader = new FileReader()
    
     imageReader.onload = (e)=>{
         setUserSelfie(e.target.result)
        // alert(e.target.result)
         
     }
     imageReader.readAsDataURL(image)
     }
  
     return (
     <div className={`agentPopUp ${( openScreen.wholeScreen)?'flex':'hidden'} font-nunito absolute w-full h-dvh bg-black bg-opacity-10 z-50 tex-black justify-center items-center p-5 `}>
        <div className={`${(openScreen.uploadDocumentScreen)? 'block':'hidden'} animate-popUpAnimation  w-[600px] bg-white h-[600px] overflow-auto rounded-md`}>
      
         <div className='flex gap-6'>
         <p className=" w-[100px] h-[100px] flex justify-center items-center">{'<--'}</p>
         <div className='w-1/2 flex flex-col justify-center items-center mt-5'>
            <img className='w-[80px] h-[80px]' src={LodgeMeIcon}/>
            <p className="font-bold">Verify Your ID</p>
              </div>
         </div>
         <div className='m-5'>
         <p className='text-center'>To ensure the security of your account, please complete the identity verification process. This helps us protect your information and prevent unauthorized access.</p>
           <div className='w-full m-4'>

            <div className='ms-[35%]'>
            <p className='w-full '>Instructions</p>
            </div>
            
            <div>
                <div className='text-sm font-bold  m-2'>
                   <ol className=' list-disc  p-2 flex flex-col gap-4'>
                    <li>{"Prepare Your Documents: Have your government-issued ID (passport, driver’s license, or national ID card) ready."}</li>
                    <li>{"Upload Your ID: Use the button below to upload a clear image or scan of your ID."}</li>
                    <li>{"Take a Selfie: Capture a selfie to match with your ID photo."}</li>
                    <li>{"Submit for Verification: Click the submit button to complete the process."}</li>
                 
                   </ol>
                </div>

               
            </div>

           </div>

           <div className='w-full m-4'>

<div className='ms-[40%]'>
<p className='w-full '>Tips</p>
</div>

<div>
    <div className='text-sm  m-2'>
       <ol className=' list-disc  p-2 flex flex-col gap-4'>
        <li>{"Ensure your ID is valid and not expired."}</li>
        <li>{"Make sure the entire ID is visible and clear."}</li>
        <li>{"Use good lighting for the selfie to match your ID photo."}</li>
      
     
       </ol>
    </div>

   
</div>

</div>

 <div className='w-full flex flex-wrap place-items-center justify-center gap-5'>
     <div className='w-[200px] h-[250px] border-2 border-dashed rounded-lg flex flex-col justify-center place-items-center'>
        <img className="w-[100px] h-[100px]" src={documentIDFile.filePath}/>
        <p>{documentIDFile.fileName}</p>
        <FilePicker 
         onChange={FileObject => { decodeFile(FileObject)}}
         onError={errMsg => { alert(errMsg)}}>
            <p className="bg-[#FFC839] p-2 w-fit rounded-md text-center hover:shadow-black shadow-md mt-2">Upload ID Document</p>
        </FilePicker>
     </div>
     <div className='w-[200px] h-[250px] border-2 border-dashed rounded-lg flex flex-col justify-center place-items-center'>
        {
         (selfieImage) &&  <img className="w-[180px] h-[180px]" src={selfieImage}/>
        }
         {
            (openCamera) && <CustomCamera onCapture={(image)=>{
               setOpenCamera((prevState)=> !prevState)
               setSelfieImage(URL.createObjectURL(image))
               decodeImage(image)
               
            }}/> 
         }
      
        <p className={`${(openCamera) && 'hidden' } p-1 bg-[#FFC839] rounded-md hover:shadow-black hover:shadow-md ` } onClick={()=>{
          setSelfieImage(null)
          setOpenCamera((prevState)=> !prevState)
        }}>Take Selfie</p>
     </div>
 </div>

 <div className="w-full  mt-8 flex flex-col  place-items-center justify-center">
   <p className={`${(showErrorText)? 'block':'hidden'} text-red-600`}>DocumentId and Selfie is needed to continue</p>
   <div className="mt-5 mb-3">
       {
         (!serverErrorMessage && displayLoadingBar ) &&  <CircularProgress  color="#FFC839" animation={true} isIndeterminate={true} />
       }
        <p className="text-red-600 text-sm">{serverErrorMessage}</p>
   </div>
   <p className="bg-[#FFC839] p-2 w-[150px] rounded-md text-center hover:shadow-black shadow-md" onClick={async ()=>{
      window.scrollTo({top:100,behavior:"smooth"})
    if(!documentIDFile.filePath || !userSelfie){
    
     setShowErrorText(true)
     return
    }
    setDisplayLoadingBar(true)
    setShowErrorText(false)
    setServerErrorMessage('')
  uploadData([
   {
       name:documentIDFile.fileName,
       base64:documentIDFile.filePath.split(',')[1]
   },{
      name:'selfie.jpg',
       base64:userSelfie.split(',')[1]
   }
  ],token).then(res=>{
   return res.json()
  }).then(result=>{
      if(result.status===200){
         agentReducerDispatcher({TYPE:"VerifyAgent",payload:{
            ...agentReducerState,
           data:{
            ...data,
            isAgentFileAlreadyUploaded:true
           }

         }})
         setOpenScreen((prevState)=>{
            return {
              ...prevState,
               proccessingScreen:true,
               uploadDocumentScreen:false
            }
         })
         return
      }
      setServerErrorMessage(result.error)
  }).catch(err=>{
    setDisplayLoadingBar(false)
   setServerErrorMessage(err.message)})

   /* setOpenScreen((prevState)=>{
      return {
        ...prevState,
         proccessingScreen:true,
         uploadDocumentScreen:false
      }
   })*/
   }}>Submit</p>
 </div>
         </div>
        </div>

        <div className={` ${(openScreen.proccessingScreen) ?'flex':'hidden'} animate-popUpAnimation  w-[600px] bg-white h-[600px] overflow-auto rounded-md mt-5 `}>
            <div className="w-full flex flex-col items-center justify-center">
               <img className="w-[230px] mb-4" src={proccessedIcon}/>

              <div className="font-bold m-3 text-center text-sm">
              <p>Your documents are being reviewed. This process usually takes 1-2 business days. You will be notified once the verification is complete.</p>
             <div className="w-full flex items-center justify-center mt-12 md:mt-14">
               <p className="bg-[#FFC839] p-3 rounded-lg hover:shadow-black hover:shadow-md" onClick={()=>{
                   setOpenScreen((prevState)=>{
                      return {
                        ...prevState,
                        wholeScreen:false
                      }
                   })
               }}>Return Home</p>
             </div>
              </div>
               </div>
         </div>



     </div>
     );
}

export default AgentVerificationPopUp