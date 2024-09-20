import { useContext, useState } from 'react'
import backArrowIcon from "../../../assets/backarrowIcon.svg"
import nameIcome from  "../../../assets/nameIcon.svg"
import emailIcon from '../../../assets/emailIcon.svg'
import numberIcon from '../../../assets/numberIcon.svg'
import passwordIcon from '../../../assets/passwordIcon.svg'
import { useNavigate } from 'react-router-dom'
import ErrorPopUpScreen, { openErrorScreen } from '../../../utils/ErrorPopUpScreen'
import LoadingPopUpScreen, { closeLoadingPopUp, showLoadingPopUp } from '../../../utils/LoadingPopUpScreen'
import registerUser from './service/registrationService'
import { CombineContext } from '../../../context/CombineContextProvider'

const AgentRegistrationScreen = () => {
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


     const  [registrationData,setRegistrationData]  = useState({
        accountType:'agent',
        userName:'',
        userEmail:'',
        userPassword:'',
        userPhoneNumber:'',
        userAgreeToTerms:false

     })

     const  [errorMessage,setErrorMessage] = useState('')

     const {agentReducerState,agentReducerDispatcher} = useContext(CombineContext)

       const [openErrorScreenState,setErrorScreenState] = useState(true)

       


    return (

        <div className='font-nunito w-full flex  md:justify-center '>
 
            <div className='w-full md:w-[50%]  md:p-12 flex flex-col   place-items-center justify-center overflow-auto' >
             <div className='w-full'>
             <img className='w-[40px]  hover:w-[60px] font-bold ms-5 mt-5'  src={backArrowIcon}  onClick={()=>{
                 navigate(-1)
             }} />


             </div>

              <p className='font-bold text-2xl mt-2 mb-2 '>Get Started</p>
              <p className='font-bold'>Already have an account? <span className='text-blue-600' onClick={()=>{
                 navigate('/login')
              }}>Sign In</span></p>

              <div className='w-full mt-5 flex flex-col place-items-center gap-5'>
                <div>
                    <p>Name</p>
                    <div className='w-fit border border-black rounded-md  flex p-3'>
                        <input className='outline-none' type='text' value={registrationData.userName} placeholder='Enter your name' onChange={(e)=>{

                               setRegistrationData((prevState)=>{
                                return {
                                 ...prevState,
                              userName:e.target.value
                             }
                       })

  }}/>
                        <img className='w-[15px] font-bold'  src={nameIcome}  />
                    </div>
                </div>

                <div>
                    <p>Email</p>
                    <div className='w-fit border border-black rounded-md  flex p-3'>
                        <input className='outline-none' type='email' placeholder='Enter your email' value={registrationData.userEmail} onChange={(e)=>{
                             setRegistrationData(prevState=>{
                                  return{
                                    ...prevState,
                                    userEmail:e.target.value
                                  }
                             })
                        }}/>
                        <img className='w-[15px] font-bold'  src={emailIcon}  />
                    </div>
                </div>


                <div>
                    <p>Number</p>
                    <div className='w-fit border border-black rounded-md  flex p-3'>
                        <input className='outline-none' type='tel' placeholder='+234' value={registrationData.userPhoneNumber} onChange={(e)=>{
                             setRegistrationData(prevState=>{
                                return{
                                    ...prevState,
                                    userPhoneNumber:e.target.value
                                }
                             })
                        }}/>
                        <img className='w-[15px] font-bold'  src={numberIcon}/>
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

                            setRegistrationData(prevState=>{
                                return {
                                   ...prevState,
                                   userPassword:e.target.value
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
                       <img className='w-[15px] font-bold'  src={passwordIcon}  onClick={()=>{
                          setTogglePassword((prev)=>{
                                return {
                                    ...prev,
                                    confirmPassword:{
                                    isToggle:!togglePassword.confirmPassword.isToggle
                                    }
                                }
                            })
                        }}  />
                    </div>
                </div>

                <div className='flex  w-[300px] ms-4'>
                    <input className='w-[40px] h-[40px]' type='checkbox'  onClick={()=>{
                          setRegistrationData(prevstate=>{
                            return {
                                ...prevstate,
                                userAgreeToTerms:!registrationData.userAgreeToTerms
                            }
                          })
                    }}/>
                    <p className='text-center mt-2'>By clicking you confirm that you have read, understood, and agree to be bound our <span className='underline'>Terms</span> and <span className='underline'>Conditions</span></p>
                </div>


                <div>
                    <div className='w-[200px] border bg-orange-400 rounded-md  flex place-items-center justify-center  p-3 mb-5' onClick={ async()=>{
                    //openErrorScreen()
                  // navigate('/agent/dashboard')

                window.scrollTo({top:0,behavior:'smooth'})
                  
                  
                   
                    if(!registrationData.userName || !registrationData.userEmail || !registrationData.userPhoneNumber || !registrationData.userPassword){
                        setErrorMessage('you need to provide your name, email, phonenumber and password to continue.')
                        openErrorScreen()
                        return
                    }
                     if(!(/\S+@\S+\.\S+/.test(registrationData.userEmail))){
                        setErrorMessage('Invalid email pattern. Please provide a valid email.')
                        openErrorScreen()
                        return 
                      }
                      if(!togglePassword.confirmPassword.password){
                        setErrorMessage('you need to enter confirm password data to continue.')
                        openErrorScreen()
                        return 
                    }
                     if(!(registrationData.userPassword===togglePassword.confirmPassword.password)){
                        setErrorMessage('password and confirm password provided does not match. Please check and try again.')
                        openErrorScreen()
                        return 
                     }
                    if(!registrationData.userAgreeToTerms){
                        setErrorMessage('please click the check box to confirm that you agreed to LodgeMe terms and conditions.')
                        openErrorScreen()
                        return
                    }

                     showLoadingPopUp()

                   registerUser(registrationData).then(async res=>{
                     return  res.json()
                   }).then( async result=>{
                    closeLoadingPopUp()
                    
                    if(result.status === 400){
                        setErrorMessage(`${result.message}`)
                        openErrorScreen()
                        return
                    }
                    if(result.status === 500){
                        setErrorMessage(`${result.message}: \n ${result.error}`)
                        openErrorScreen()
                        return  
                    }
                    if(result.status===200){

                        agentReducerDispatcher({TYPE:"Authentication",payload:{
                            ...agentReducerState,
                            isLoggedIn:true,
                            data:result.user
                         }})
                        
                      
                        navigate('/agent/dashboard')
                }
                   }).catch(err=>{
                    closeLoadingPopUp()
                    setErrorMessage(err.message)
                    openErrorScreen()
                   })

                   }}>
                   <p >Sign Up</p>
                    </div>
                </div>
              </div>
            </div>

            <div className='hidden md:flex w-[50%] h-[500px] sticky top-20  ms-[10%] me-[10%] bottom-0  bg-agentSignUpBackgroundImage  bg-cover bg-center  bg-no-repeat rounded-md place-items-end justify-center pb-5'>
          
            
           <p className='bg-black text-white bg-opacity-25 font-bold text-2xl p-2'>Provide High Quality Homes for your clients.</p>
            </div>
         
       
            <ErrorPopUpScreen title={"Registration Message"} body={(errorMessage) ? errorMessage:'you  can not access dashboard without registering'}/>

  <LoadingPopUpScreen sequence={['hold on now .....','why we.....','set up.....','your account.....']}/>
   
            {
            (!agentReducerState.isLoggedIn && agentReducerState.showPopUp) ? 
            <ErrorPopUpScreen title={"Registration Message"} body={(errorMessage) ? errorMessage:'you  can not access dashboard without registering'} display={(openErrorScreenState)?'flex':'hidden'} openScreen={()=>{
                 setErrorScreenState(!openErrorScreenState)
            }}/> 
 
            :'' 
          
}
     </div>
    )
}

export default AgentRegistrationScreen