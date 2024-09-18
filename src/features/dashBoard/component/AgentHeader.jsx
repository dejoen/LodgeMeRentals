/* eslint-disable react/prop-types */
import  LodgeMeIcon from '../../../assets/lodgeMeIcon.svg'
import  searchIcon from '../../../assets/searchIcon.svg'
import  menuIcon from '../../../assets/menuIcon.svg'
import { openAgentDrawer } from './AgentNavBarDrawer'

let AgentHeader = (props) =>{
    return (
        <div className=" font-nunito bg-white flex place-items-center ps-5 w-full h-20 shadow-xl rounded-br-[30px] rounded-bl-[30px] overflow-x-hidden">
            
            
            <div className='w-[50%]'>
            <p className="text-sm  md:text-2xl">{props.header}</p>
            <p className='hidden md:block'>{props.body}</p>
            </div>
         
         <div className='  w-[50%]  flex place-items-center justify-end me-5  gap-10'>
            
            <img className='w-[20px]  md:w-[40px] 
             ' src={searchIcon} />


            <div className='hidden md:block border border-orange-400 rounded-full p-2 '>
            <img className='w-[40px] 
             ' src={LodgeMeIcon} />
          
            </div>



            <div className=' p-2  md:hidden' onClick={()=>{
                openAgentDrawer()
            }}>
            <img className='w-[40px] h-[30px]
             ' src={menuIcon} />
          
            </div>
            </div>



        </div>
    )
}

export default AgentHeader