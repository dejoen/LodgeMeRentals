import ListedHousesCard from "./ListedHousesCard";


const ListedHousesBody = () => {
    return (
    
<div className="md:w-[96%] min-h-[50vh]   w-full md:m-5">
    <div className="w-full border border-black border-opacity-100 rounded-md ">
       <div className="w-full p-1 flex gap-8 justify-evenly md:justify-end pe-[2%]">
        <p>Clicks</p>
        <p>Impressions</p>
        <p>Messages</p>
        <p>Inquires</p>
        <p>applications</p>
       </div>
       
    
    </div>
    <ListedHousesCard/>
</div>

    );
}

export default ListedHousesBody