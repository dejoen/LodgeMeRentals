/* eslint-disable react/prop-types */
import  LodgeMeIcon from '../../../assets/lodgeMeIcon.svg'
import  searchIcon from '../../../assets/searchIcon.svg'

let AgentHeader = (props) =>{
    return (
        <div className=" font-nunito bg-white flex place-items-center ps-5 w-full h-20 shadow-xl rounded-br-[30px] rounded-bl-[30px]">
            
            
            <div className='w-[50%]'>
            <p className="text-2xl">{props.header}</p>
            <p>{props.body}</p>
            </div>

            <div className='w-[50%] flex place-items-end justify-end me-5 gap-10'>
            <img className='w-[40px] 
             ' src={searchIcon} />
            <div className=' border border-orange-400 rounded-full p-2 '>
            <img className='w-[40px] 
             ' src={LodgeMeIcon} />
            </div>
            
            </div>



        </div>
    )
}

export default AgentHeader