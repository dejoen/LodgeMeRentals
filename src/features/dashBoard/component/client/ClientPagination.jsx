import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { PaginationContext } from "../../../../context/client/PaginationContext"


const   ClientPagination = () =>{
    const navigate = useNavigate()
     
    const {homeItems,setItem,getItem} =useContext(PaginationContext)
    return (
  <div className=" w-full flex gap-5 place-items-center justify-center mt-5 mb-5">
    <p className="hover:bg-black hover:text-white bg-orange-400   w-[40px] text-center rounded-full p-2 "  onClick={()=>{
     
       getItem(0)
     
    }}>1</p>
    <p className="hover:bg-black hover:text-white bg-orange-400   w-[40px] text-center rounded-full p-2 "  onClick={()=>{
       getItem(1)
    }}>2</p>
    <p className="hover:bg-black hover:text-white bg-orange-400   w-[40px] text-center rounded-full p-2 "  onClick={()=>{
      navigate('/blog/two')
    }}>3</p>
    <p className="hover:bg-black hover:text-white bg-orange-400   w-[40px] text-center rounded-full p-2 "  onClick={()=>{
      navigate('/blog/two')
    }}>4</p>
    <p className="hover:bg-black hover:text-white bg-orange-400   w-[40px] text-center rounded-full p-2 "  onClick={()=>{
      navigate('/blog/two')
    }}>5</p>
    <p className="hover:bg-black hover:text-white bg-orange-400   w-[40px] text-center rounded-full p-2 "  onClick={()=>{
      navigate('/blog/two')
    }}>&gt;</p>
    </div>
    )
}

export default ClientPagination