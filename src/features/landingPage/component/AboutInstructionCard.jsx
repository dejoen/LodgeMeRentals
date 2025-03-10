/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const AboutInstructionCard = (props) =>{
    return (
       <div className="mb-2 mt-8 w-fit flex  place-items-center
       justify-center">

        <div className="md:w-[320px] w-[85%] h-[200px]  bg-white  shadow-md shadow-gray-950 flex flex-col place-items-center text-center gap-6 pt-10 rounded-2xl">
          <p className="font-bold text-xl">{props.header}</p>
          <p className="leading-[24px]">{props.body}</p>
        </div>

       </div>
    )
}

export default AboutInstructionCard