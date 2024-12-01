import { BarChart } from "@mui/x-charts"

const  UserProfileStatisticsScreen = () =>{

    return (
<div className=" font-nunito w-full p-5">
 <div className="flex gap-5 ">
    <p className="p-2">Account Status</p>
    <p className="border p-2 rounded-md ">Online<span className=" ms-2 text-green-600 font-bold">.</span></p>
    <div className="flex gap-2">
        <img src="/"/>
        <p>Set as unavailable</p>
    </div>

   
    
 </div>
 <div>
        <BarChart
        
         height={300}
         xAxis={[{ scaleType: 'band', data:["week 1","week 2","week 3","week 4"],  categoryGapRatio: 0.5,
            barGapRatio: 0.1 }]}
         series={[{data:[38,20,15,25],color:"#FCAD6D"}]}
         
         width={500}
        />
    </div>
</div>
    )
}


export default UserProfileStatisticsScreen