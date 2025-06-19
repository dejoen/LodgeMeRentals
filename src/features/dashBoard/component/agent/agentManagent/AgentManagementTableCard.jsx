import image from "../../../../../assets/aboutbgimage.svg";

const AgentManagementTableCard = () => {
  return (
    <div className=" w-[1200px]   p-1 flex gap-4  justify-evenly pe-[2%] place-items-center mb-2  ">
      <p className=" text-center min-w-[120px] max-w-[120px]">#000000</p>
      <div className=" min-w-[120px] max-w-[120px] flex justify-center  ">
        <div className="w-[40px] h-[40px]">
          <img className="w-full h-full bg-green-500 rounded-full object-cover" src={image} />
        </div>
      </div>

      <p className=" text-center min-w-[120px] max-w-[120px]">Abideen Yinusa jjjjjj dddd</p>
      <p className=" text-center min-w-[120px] max-w-[120px]">Lead</p>
      <p className="text-center min-w-[120px] max-w-[120px]">#0</p>
      <p className=" text-center min-w-[120px] max-w-[120px]">dd/mm/yy</p>
      <p className="text-center min-w-[120px] max-w-[120px]">Submitted</p>
      <p className=" text-center min-w-[120px] max-w-[120px]">Signed</p>
    </div>
  );
};

{
  /*      
<div className=" p-1 flex gap-4 justify-evenly pe-[2%] text-black border-b border-black min-h-[10vh] w-[1600px]  place-items-center" >
<p className=" text-center min-w-[160px] max-w-[160px] overflow-x-auto">#000000</p>    
<p className=" text-center min-w-[160px] max-w-[160px] overflow-x-auto">1</p>
<p className=" text-center min-w-[160px] max-w-[160px] bg-green-400">Abideen Yinusa jjjjjj  dddd
</p>
<p className=" text-center min-w-[160px]">Signed</p>
<p className=" text-center min-w-[160px] max-w-[160px] overflow-x-auto">Lead</p>
        <p className=" text-center min-w-[160px] max-w-[160px] overflow-x-auto">#0</p>
        <p className=" text-center min-w-[160px]">dd/mm/yy</p>
        <p className=" text-center min-w-[160px]">Submitted</p>
        <p className=" text-center min-w-[160px]">Signed</p>
        
        
       </div>
       */
}

export default AgentManagementTableCard;
