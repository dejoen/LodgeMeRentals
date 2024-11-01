
import ListedHousesCard from "./ListedHousesCard";


const ListedHousesBody = () => {

    return (
    
<div className="md:w-[96%] min-h-[58vh]   w-full md:m-5 text-black ">

    <div className="w-full border max-h-[56vh] md:max-h-[53vh] border-black border-opacity-100 rounded-t-md overflow-x-auto  ">
       <div className=" w-[810px]  md:w-full p-1 flex gap-4 justify-end md:justify-end pe-[2%] sticky top-0 z-50">
        <p className="md:hidden  text-center min-w-[120px]"> Address</p>
        <p className="text-center min-w-[120px]">Clicks</p>
        <p className=" text-center min-w-[120px]">Impressions</p>
        <p className=" text-center min-w-[120px]">Messages</p>
        <p className="text-center min-w-[120px]">Inquires</p>
        <p className=" text-center min-w-[120px]">applications</p>
       </div>
       <div className="w-[810px] md:w-full h-[1px] bg-black "></div>
       
       <ListedHousesCard />
       <ListedHousesCard/>
       <ListedHousesCard />
       <ListedHousesCard />
       <ListedHousesCard />
     <ListedHousesCard />
       <ListedHousesCard/>
       <ListedHousesCard />
       <ListedHousesCard />
       <ListedHousesCard />


      
    </div>
    <div className="w-full flex p-1 justify-end "><div className="bg-[#2A1910] ps-3 pe-3  pt-1 pb-1 rounded-md text-white">Last 30 days <span className="text-sm">{"v"}</span></div></div>
    
</div>

    );
}

export default ListedHousesBody