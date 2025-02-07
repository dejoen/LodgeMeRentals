import AboutInstructionCard from "./AboutInstructionCard"

const AboutInstructionCardContainer = () =>{

    return (
        <div className="  font-nunito flex md:gap-5  place-items-center justify-center flex-wrap ">
        <AboutInstructionCard header="Step 1: Search" body="Use our intuitive platform to search for properties that meet your needs."/>
        <AboutInstructionCard header="Step 2: Explore" body="Dive into detailed property listings with photos, descriptions, and virtual tours."/>
        <AboutInstructionCard header="Step 3: Contact" body="Reach out to property owners or agents directly through our platform."/>
        <AboutInstructionCard header="Step 4: Visit" body="Schedule viewings and visit properties to see them in person."/>
        <AboutInstructionCard header="Step 5: Decide" body="Make an informed decision with the help of our resources and support."/>
      
        </div>
    )
}

export default AboutInstructionCardContainer