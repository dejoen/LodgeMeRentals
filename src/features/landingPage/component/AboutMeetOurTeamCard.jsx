/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
 import meetImage  from  '../../../assets/meetimage.svg'
const AboutMeetOurTeamCard = (props) =>{
    return(
       <div className="md:w-[290px] font-nunito font-bold ">
         <img src={meetImage}/>
         <div>
            <p>Name:<span>{props.teamName}</span></p>
             <p>Role:<span>{props.teamRole}</span></p>
         </div>
       </div>
    )
}

export default AboutMeetOurTeamCard