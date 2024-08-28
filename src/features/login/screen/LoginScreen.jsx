import { useState } from 'react'
import backArrowIcon from "../../../assets/backarrowIcon.svg"
import emailIcon from '../../../assets/emailIcon.svg'
import passwordIcon from '../../../assets/passwordIcon.svg'
import { useNavigate } from 'react-router-dom'
import ErrorPopUpScreen from '../../../utils/ErrorPopUpScreen'
import LoadingPopUpScreen, { showLoadingPopUp } from '../../../utils/LoadingPopUpScreen'


 const LoginScreen = () =>{

    const navigate = useNavigate()
    const [togglePassword,setTogglePassword]= useState({
       password:{
           isToggle:false,
           password:''
       },
        confirmPassword:{
           isToggle:false,
           password:''
       }

    })

   


   return (

       <div className='font-nunito w-full flex  md:justify-center '>
           
           <div className='w-full md:w-[50%]  md:p-12 flex flex-col   place-items-center justify-center overflow-auto' >
            <div className='w-full'>
            <img className='w-[40px]  hover:w-[60px] font-bold ms-5 mt-5'  src={backArrowIcon}  onClick={()=>{
                navigate(-1)
            }} />
            </div>
             <p className='font-bold text-2xl mt-10 mb-2 '>Welcome Back</p>
             <p className='font-bold'>{'Dont\'t have an account?'} <span className='text-blue-600'>Sign Up</span></p>

             <div className='w-full mt-16 flex flex-col place-items-center gap-10'>
             

               <div>
                   <p>Email</p>
                   <div className='w-fit border border-black rounded-md  flex p-3'>
                       <input className='outline-none' type='email' placeholder='Enter your email'/>
                       <img className='w-[15px] font-bold'  src={emailIcon}  onClick={()=>{
                
            }}/>
                   </div>
               </div>
           <div>
                   <p>Password</p>
                   <div className='w-fit border border-black rounded-md  flex p-3'>
                       <input className='outline-none' type={(togglePassword.password.isToggle) ? 'text':'password'} value={togglePassword.password.password} placeholder='password' onChange={(e)=>{
                           setTogglePassword((prev)=>{
                               return {
                                   ...prev,
                                   password:{
                                   password:e.target.value
                                   }
                               }
                           })
                       }}/>
                        <img className='w-[15px] font-bold'  src={passwordIcon} onClick={()=>{
                         setTogglePassword((prev)=>{
                               return {
                                   ...prev,
                                   password:{
                                   isToggle:!togglePassword.password.isToggle
                                   }
                               }
                           })
                       }}/>
                   
                   </div>
               </div>



               <div>
                   <div className='text-white w-[200px] border bg-[#BB7655] rounded-md  flex place-items-center justify-center  p-3 mb-5 hover:bg-opacity-90 cursor-pointer' onClick={()=>{
                   //openErrorScreen()
                   //navigate('/agent/dashboard')
                   showLoadingPopUp()
                  }}>
                  <p >Sign In</p>
                   </div>
               </div>

               <p>forgot password?</p>
             </div>
           </div>

           <div className='hidden md:flex w-[50%] h-[500px] sticky top-20  ms-[10%] me-[10%] bottom-0  bg-agentSignUpBackgroundImage  bg-cover bg-center  bg-no-repeat rounded-md place-items-end justify-center pb-5'>
         
           
          <p className='bg-black text-white bg-opacity-25 font-bold text-2xl p-2'>Become A House Owner Today.</p>
           </div>
      
 <ErrorPopUpScreen title={"Registration Message"} body={"please provide all information need to continue this process."}/>
 <LoadingPopUpScreen sequence={['loging....','you .....','in....','please wait....']}/>
       </div>
   )
 }

 export default  LoginScreen