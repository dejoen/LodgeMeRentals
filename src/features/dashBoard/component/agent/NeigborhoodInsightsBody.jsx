import { PieChart } from "@mui/x-charts";

const NeighborHoodInsights = () => {
  return (
    <div className="md:ms-10 mt-10 w-full">
      <div className="w-full flex flex-wrap gap-5 place-content-center ">
        <div className="relative max-w-fit border border-black rounded-lg  p-5">
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
          <div className=" w-[300px] h-[300px] border border-black rounded-lg">
            <p>
              Area Compatability
            </p>
            <p>
              Area Compatability
            </p>
            <p>
              Area Compatability
            </p>
            <p>
              Area Compatability
            </p>
          </div>

           <div className=" w-[300px] h-[300px] border border-black rounded-lg">
            <p>
              Area Compatability
            </p>
            <p>
              Area Compatability
            </p>
            <p>
              Area Compatability
            </p>
            <p>
              Area Compatability
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeighborHoodInsights;
