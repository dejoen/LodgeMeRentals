

const BlogCard = () =>{
  return(
    <div className="font-nunito mt-8 w-full md:w-fit  flex place-items-center flex-col-reverse  md:flex-row  gap-1 ">
    
    
     <div className="w-[240px] md:m-4 md:ps-6 ml-[-13%] md:ml-0">
        <p className="text-2xl font-bold">Theme</p>
        <p className="font-bold">Blog Tittle goes here</p>
        <p>Blog content priview goes here</p>
         <p className="mt-5  md:mt-20 font-bold">Date:<span>DD/MM/YY</span></p>
     </div>
     <div className="w-[300px] md:w-[200px] h-[200px] bg-[#D9D9D9] rounded-md  ">
      
    </div>
    </div>

  );

}

export default BlogCard