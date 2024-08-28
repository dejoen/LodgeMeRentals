import ClientHouseCard from "./ClientHouseCard";

const ClientHouseCardContainer = () =>{

    return (
      <div className="w-full mt-3 flex flex-wrap  justify-center gap-5 h-[400px] overflow-y-auto p-2">
       {
       [1,2,3,4,5,6,7,8,9].map((item,index)=>(
        <ClientHouseCard key={index}/>
       ))
       }
      </div>

    );
}

export default ClientHouseCardContainer