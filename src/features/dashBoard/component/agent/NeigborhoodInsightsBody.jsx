import { LinearProgress } from "@mui/material";
import { PieChart } from "@mui/x-charts";

const NeighborHoodInsights = () => {
  return (
    <div className="md:ms-2 mt-10 w-full font-nunito">
      <div className="w-full flex flex-wrap gap-5 place-content-center ">
        <div className="relative max-w-fit border border-black rounded-lg  p-5 m-5">
          <p>Residence Database</p>
          <div className="absolute w-[250px] h-[200px] flex place-items-center justify-center ">
            <p>Area name</p>
          </div>
          <PieChart
            series={[
              {
                data: [
                  { id: 1, value: 10, label: "jjhhhhhhhj", color:"#1C2E7A"},
                  { id: 1, value: 20, label: "jjj" },
                  { id: 1, value: 40, label: "jjj" }
                ],
                innerRadius: 60
              }
            ]}
            width={350}
            height={200}
          />
        </div>

        <div className=" flex flex-wrap place-content-center gap-5">
          <div className=" w-[300px] max-h-fit p-5 border border-black rounded-lg">
            <p className="font-bold mb-2">
              Area Compatability
            </p>
            <p>
              Number of bus stops:<span>0</span>
            </p>
            <p>
            Number of schools:<span>0</span>
            </p>
            <p>
            Number of industries:<span>0</span>
            </p>
          </div>

           <div className=" w-[300px] max-h-fit p-5 border border-black rounded-lg">
            <p className="font-bold mb-2">
              
              {"LandLord's  Insight"}
            </p>
             <div className="flex flex-wrap place-items-center    gap-5" >
              <p className="">hh</p>
              <LinearProgress value={30}  variant="determinate" sx={{width:200, height:10, borderRadius:3,}}  />
             </div>
             <div className="flex flex-wrap place-items-center    gap-5" >
              <p className="">hh</p>
              <LinearProgress value={30}  variant="determinate" sx={{width:200, height:10, borderRadius:3,}}  />
             </div>
             <div className="flex flex-wrap place-items-center    gap-5" >
              <p className="">hh</p>
              <LinearProgress value={30}  variant="determinate" sx={{width:200, height:10, borderRadius:3,}}  />
             </div>
             <div className="flex flex-wrap place-items-center    gap-5" >
              <p className="">hh</p>
              <LinearProgress value={30}  variant="determinate" sx={{width:200, height:10, borderRadius:3,}}  />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeighborHoodInsights;
