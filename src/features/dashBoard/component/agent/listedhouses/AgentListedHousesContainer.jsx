import ListedHousesBody from "./ListedHousesBody";
import ListedHousesHeader from "./ListedHoussesHeader";


const AgentListedHouseContainer = ()  => {
    return (
<div className="w-[98.6%] md:w-[99.5%] mt-[5.4rem] bg-white z-30 shadow-black shadow-md h-[87.6vh]  rounded-lg ms-1 me-20">
    <div className="w-full h-fit pt-20 flex justify-end pe-20">
        <p>Publish New House</p>

    </div>
    <ListedHousesHeader/>
    <ListedHousesBody/>
</div>

    );
}


export default AgentListedHouseContainer