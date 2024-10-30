import { LinearProgress } from "@mui/material";
import { PieChart } from "@mui/x-charts";

const NeighborHoodInsights = () => {
  return (
    <div className="md:ms-2 mt-10 w-full font-nunito">
      <div className="w-full flex flex-wrap gap-5 place-content-center ">
        <div className="relative max-w-fit border border-black rounded-lg  p-5 m-5">
          <p>Residence Database</p>
          <div className="absolute w-[150px] h-[200px] flex place-items-center justify-center ">
            <p>Area name</p>
          </div>
          <PieChart
            series={[
              {
                data: [
                  { id: 1, value: 10, label: "Rent Demands", color: "#323232" },
                  { id: 1, value: 20, label: "Vacancy", color:'#BB7655'},
                  { id: 1, value: 40, label: "Population Growth",color:'#34A853' },
                  { id: 1, value: 10, label: "Security", color: "#323232" },
                  { id: 1, value: 20, label: "Crime Rate", color:'#1C2E7A'}
                ],
                innerRadius: 45
              }
            ]}
            width={350}
            height={200}
            margin={{right:200}}
          />
        </div>

        <div className=" flex flex-wrap place-content-center gap-5">
          <div className=" w-[300px] max-h-fit p-5 border border-black rounded-lg">
            <p className="font-bold mb-2">Rental Property Supply</p>
            <p>
              Number of available properties:<span>0</span>
            </p>
            <p>
              New Listings:<span>0</span>
            </p>
            <p>
              Property turnovers:<span>0</span>
            </p>
          </div>

          <div className=" min-w-fit max-h-fit p-5 border border-black rounded-lg">
            <p className="font-bold mb-2">
              {"Comparative  Insights"}
            </p>
            <div className="flex min-w-fit  flex-wrap    place-items-center gap-3 mb-2">
              <p className="text-sm  text-black w-[80px]">Rent</p>
              <LinearProgress
                value={100}
                variant="determinate"
                sx={{
                  width: 200,
                  height: 10,
                  borderRadius: 3,
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#34A853"
                  }
                }}
              />
            </div>
            <div className="flex flex-wrap place-items-center mb-2   gap-3">
              <p className="text-sm text-wrap w-[80px]">Buy</p>
              <LinearProgress
                value={30}
                variant="determinate"
                sx={{
                  width: 200,
                  height: 10,
                  borderRadius: 3,
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#DBAB31"
                  }
                }}
              />
            </div>
            <div className="flex flex-wrap place-items-center mb-2   gap-3">
              <p className="text-sm text-wrap w-[80px]">Migrating</p>
              <LinearProgress
                value={30}
                variant="determinate"
                sx={{
                  width: 200,
                  height: 10,
                  borderRadius: 3,
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#FF0000"
                  }
                }}
              />
            </div>
            <div className="flex flex-wrap place-items-center    gap-3">
              <p className="text-sm text-wrap w-[80px]">Immigrating</p>
              <LinearProgress
                value={30}
                variant="determinate"
                sx={{
                  width: 200,
                  height: 10,
                  borderRadius: 3,
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#FF0000"
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeighborHoodInsights;
