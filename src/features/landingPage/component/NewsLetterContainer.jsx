

const NewsLetterContainer = () => {
   
    return (
<div className="mx-auto h-[246px] bg-[#FFC839] rounded-md gap-[20px] p-12 w-fit ">
   <p className=" text-[#323232] leading-[50px]">Sign Up for Newsletter</p>
   <p className="text-[#646464] leading-[30px]">Enter your email to get updates on house and properties for rent.</p>
   <div className=" bg-white p-2 mt-4">
    <input className="outline-none w-[88%] md:w-[90%]" type="text"  />
    <span className="text-end  bg-[#FFC839] p-2  rounded-full ">&gt;</span>
   </div>
</div>


    );

}

export default NewsLetterContainer