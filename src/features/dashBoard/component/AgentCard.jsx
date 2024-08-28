/* eslint-disable react/prop-types */

 const AgentCard = (props) => {

    return (
        <div className=" font-nunito  w-full  p-3 md:w-[370px] md:h-[200px] bg-white shadow-sm shadow-black hover:shadow-xl    rounded-3xl m-2 flex flex-col place-items-center  md:flex-row gap-3 ">
     <img className='ms-2 w-[80px] ' src={props.image} />
    <div className='flex flex-col place-items-center justify-center'>
   <p className='font-bold text-xl'>{props.header}</p>
   <p className='text-center'>{props.body}</p>
    </div>
        </div>
    );
 }

 export default AgentCard