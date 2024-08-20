import { useState } from 'react'

const AgentScreen = () => {
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
              <p className='w-full ms-10 font-bold'>{"<-"}</p>
              <p className='font-bold text-2xl mt-2 mb-2 '>Get Started</p>
              <p className='font-bold'>Already have an account? <span className='text-blue-600'>Sign In</span></p>

              <div className='w-full mt-5 flex flex-col place-items-center gap-5'>
                <div>
                    <p>Name</p>
                    <div className='w-fit border border-black rounded-md  flex p-3'>
                        <input className='outline-none' type='text' placeholder='Enter your name'/>
                        <p>{"@"}</p>
                    </div>
                </div>

                <div>
                    <p>Email</p>
                    <div className='w-fit border border-black rounded-md  flex p-3'>
                        <input className='outline-none' type='email' placeholder='Enter your email'/>
                        <p>{"@"}</p>
                    </div>
                </div>


                <div>
                    <p>Number</p>
                    <div className='w-fit border border-black rounded-md  flex p-3'>
                        <input className='outline-none' type='tel' placeholder='+234'/>
                        <p>{"@"}</p>
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
                        <p onClick={()=>{
                          setTogglePassword((prev)=>{
                                return {
                                    ...prev,
                                    password:{
                                    isToggle:!togglePassword.password.isToggle
                                    }
                                }
                            })
                        }}>{"@"}</p>
                    </div>
                </div>

                <div>
                    <p>Confirm Password</p>
                    <div className='w-fit border border-black rounded-md  flex p-3'>
                        <input className='outline-none' type={(togglePassword.confirmPassword.isToggle) ? 'text':'password'} value={togglePassword.confirmPassword.password} placeholder='confirm password' onChange={(e)=>{
                            setTogglePassword((prev)=>{
                                return {
                                    ...prev,
                                    confirmPassword:{
                                    password:e.target.value
                                    }
                                }
                            })
                        }}
                        
                        />
                        <p  onClick={()=>{
                          setTogglePassword((prev)=>{
                                return {
                                    ...prev,
                                    confirmPassword:{
                                    isToggle:!togglePassword.confirmPassword.isToggle
                                    }
                                }
                            })
                        }}  >{"@"}</p>
                    </div>
                </div>

                <div className='flex  w-[300px] ms-4'>
                    <input className='w-[40px] h-[40px]' type='checkbox' />
                    <p className='text-center mt-2'>By clicking you confirm that you have read, understood, and agree to be bound our <span className='underline'>Terms</span> and <span className='underline'>Conditions</span></p>
                </div>


                <div>
                    <div className='w-[200px] border bg-orange-400 rounded-md  flex place-items-center justify-center  p-3 mb-5'>
                   <p>Sign Up</p>
                    </div>
                </div>
              </div>
            </div>

            <div className='hidden md:flex w-[50%] h-[500px] sticky top-20  ms-[10%] me-[10%] bottom-0  bg-agentSignUpBackgroundImage  bg-cover bg-center  bg-no-repeat rounded-md place-items-end justify-center pb-5'>
          
            
           <p className='bg-black text-white bg-opacity-25 font-bold text-2xl p-2'>Provide High Quality Homes for your clients.</p>
            </div>
         
         {
            /*<div className='w-[50%] bg-green-700 h-[100vh] overflow-auto'>
            hhhhh
         </div>
         <div>
            <img src={image}  className='  w-[50%]   sticky top-52'/>
         </div>
         <div className='w-[50%] bg-green-700 h-[100vh] overflow-auto sticky top-10'>
          {
            [1,2,4,8,9,0].map((d,i)=>(
                <div key={i} className='h-[300px] bg-cyan-50'>
                bghj
               </div>
            ))
          }
         </div>
         */
}
        </div>
    )
}

export default AgentScreen