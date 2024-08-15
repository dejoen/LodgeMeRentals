import { Outlet, useNavigate } from "react-router-dom";

const BlogPostView = () =>{
    const navigate = useNavigate()
    return(
        
<div className="w-full">
  <Outlet/>
  <div className=" w-full flex gap-5 place-items-center justify-center mt-5 mb-5">
    <p className="hover:bg-black hover:text-white bg-orange-400   w-[40px] text-center rounded-full p-2 "  onClick={()=>{
      navigate('/blog/one')
    }}>1</p>
    <p className="hover:bg-black hover:text-white bg-orange-400   w-[40px] text-center rounded-full p-2 "  onClick={()=>{
      navigate('/blog/two')
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
</div>
    );
}

export default BlogPostView