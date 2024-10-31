import ListedHousesCard from "./ListedHousesCard";


const ListedHousesBody = () => {
    return (
    
<div className="md:w-[96%] min-h-[50vh]   w-full md:m-5 text-black">
    <div className="w-full border border-black border-opacity-100 rounded-md overflow-x-auto ">
       <div className="w-full p-1 flex gap-4 justify-evenly md:justify-end pe-[2%]">
        <p className="md:hidden  text-center min-w-[120px]"> Address</p>
        <p className="text-center min-w-[120px]">Clicks</p>
        <p className=" text-center min-w-[120px]">Impressions</p>
        <p className=" text-center min-w-[120px]">Messages</p>
        <p className="text-center min-w-[120px]">Inquires</p>
        <p className=" text-center min-w-[120px]">applications</p>
       </div>
       <div className="w-[810px] md:w-full h-[1px] bg-black"></div>
       <ListedHousesCard/>
       <ListedHousesCard/>
    </div>
    
</div>

    );
}

export default ListedHousesBody