import AboutMeetOurTeamCard from "./AboutMeetOurTeamCard";

const AboutMeetOurTeamCardContainer = () => {

    return (
  <div className="w-full  flex flex-wrap p-10 justify-center gap-4 mt-5">
   <AboutMeetOurTeamCard teamName="Dejoe" teamRole="Developer"/>
   <AboutMeetOurTeamCard teamName="Frank" teamRole="Co-founder"/>
   <AboutMeetOurTeamCard teamName="Maven" teamRole="UI & Ux Designer"/>
   <AboutMeetOurTeamCard teamName="Peter" teamRole="Co-founder"/>
   <AboutMeetOurTeamCard/>
   <AboutMeetOurTeamCard/>
    
  </div>

    );

}

export default AboutMeetOurTeamCardContainer