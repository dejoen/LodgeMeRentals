import { BarChart } from "@mui/x-charts";

const UserProfileStatisticsScreen = () => {
  return (
    <div className=" font-nunito w-full p-5">
      <div className="flex flex-wrap justify-center place-items-center md:place-content-start gap-5 ">
        <p className="p-2">Account Status</p>
        <div className="flex justify-center place-content-center gap-1 border  rounded-lg p-2 text-sm">
          <p className=" ">Online</p>
          <span className=" text-green-600 font-bold ">.</span>
        </div>

        <div className="flex p-2  gap-2 text-sm">
          <img src="/" />
          <p>Set as unavailable</p>
        </div>
      </div>
      <div className="flex ">
        <div className="flex flex-wrap justify-center place-items-center gap-5  mt-2">
            <p>Account Health</p>
            <div className="w-[200px] bg-green-600 h-[10px] rounded-md "></div>

            <div className="flex  ms-10 gap-4">
                <div className="flex place-items-center ">
                
                <span className=" text-green-600 font-bold ">.</span>
                <p className=" text-sm">Good</p>
                </div>

                <div className="flex place-items-center">
              
                <span className=" text-[#FFC839] font-bold ">.</span>
                <p className=" text-sm">Risk</p>
                </div>

                <div className="flex place-items-center">
                
                <span className=" text-[#FF0209] font-bold ">.</span>
                <p className="text-sm ">Restricted</p>
                </div>
            </div>
        </div>
      </div>
      

      <div className="flex flex-wrap w-full">
      <div className="relative   md:max-w-[650px] ">
      <p className="md:hidden text-center text-sm mt-5 ">Profile Views and Impressions</p>
        <p className="hidden absolute  left-0 text-sm top-[50%] rotate-[-90deg]">Profile Views and Impressions</p>
        <div className="md:ms-[90px]  w-[350px] md:w-[500px]">
        <BarChart
          height={300}
          
          xAxis={[
            {
              scaleType: "band",
              data: ["week 1", "week 2", "week 3", "week 4"],
              categoryGapRatio: 0.5,
              barGapRatio: 0.1
            }
          ]}
          series={[{ data: [38, 20, 15, 25], color: "#FCAD6D" }]}
         
        />
        <p className="absolute right-0 bottom-[-10px] border border-black border-opacity-40 p-1 rounded-md">this month<span className="p-1">{"v"}</span></p>
        </div>
       
      </div>


      <div className="flex flex-col mx-auto justify-center gap-2 mt-10 md:mt-1">

        <div className="font-bold text-sm text-center">
            <p>Average Monthly Earning</p>
            <p>Amount  Earned</p>
            <p className="mx-auto ms-5  text-2xl">N<span>250</span></p>
            <p className="place-self-center  ms-5 text-center w-[50px] rounded bg-[#D8F0D4] text-[#34A853]">69%</p>
        </div>

        <div className="font-bold text-sm text-center">
            <p>Reffered Bonuses</p>
            <p>Amount  Earned</p>
            <p className="mx-auto ms-5  text-2xl">N<span>250</span></p>
            
        </div>

        <div className="font-bold text-sm text-center">
            <p>Average Monthly spending</p>
            <p>Amount  Spent</p>
            <p className="mx-auto ms-5  text-2xl">N<span>250</span></p>
            
        </div>
      </div>

      </div>
    </div>
  );
};

export default UserProfileStatisticsScreen;
