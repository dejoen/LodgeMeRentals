import { Send } from "lucide-react";
const NewsLetterContainer = () => {
  return (
    <div className="mx-auto h-fit bg-[#FFC839] rounded-md gap-[20px] p-12 w-fit ">
      <p className=" text-[#323232] leading-[50px] pb-3 md:text-3xl text-3xl">Sign Up for Newsletter</p>
      <p className="text-[#646464] leading-[30px]">Enter your email to get updates on house and properties for rent.</p>
      <div className=" bg-white p-2 mt-4 flex justify-center items-center rounded-lg">
        <input className="outline-none w-[88%] md:w-[90%]" type="text" />
        <div className="bg-[#FFC839] w-fit p-2 rounded-full">
          <Send className="size-4 " />
        </div>
      </div>
    </div>
  );
};

export default NewsLetterContainer;
