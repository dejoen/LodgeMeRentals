import { PieChart } from "@mui/x-charts";

const NeighborHoodInsights = () => {
  return (
    <div className="ms-10 mt-10 w-full">
      <div className="w-full  gap-5 ">
        <div className="relative max-w-fit border border-black rounded-lg  p-5">
          <p>Residence Database</p>
          <div className="absolute w-[300px] h-[200px] flex place-items-center justify-center ">
            <p>Area name</p>
          </div>
          <PieChart
            series={[
              {
                data: [
                  { id: 1, value: 10, label: "jjhhhhhhhj" },
                  { id: 1, value: 20, label: "jjj" },
                  { id: 1, value: 40, label: "jjj" }
                ],
                innerRadius: 60
              }
            ]}
            width={400}
            height={200}
          />
        </div>

        <div className="">
          <div className=" w-[300px] border border-black rounded-lg">ggg</div>
        </div>
      </div>
    </div>
  );
};

export default NeighborHoodInsights;
