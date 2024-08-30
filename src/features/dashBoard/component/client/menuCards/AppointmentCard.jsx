/* eslint-disable react/prop-types */

const AppointmentCard = (props) =>{

    
        return (
            <div className={` font-nunito ${props.display} flex-col  w-[360px] h-full bg-white shadow-lg rounded-sm `}>
             <div className="mt-5 ms-2 font-bold">
                <p className="hidden md:block">Appointment</p>
                <p className="text-sm">See all appointments here.</p>
             </div>
            <div className="mt-2  flex flex-col gap-5">
            <div className="ms-2 flex">
                 <img src='/'/>
                <p>Upcoming appointments</p>
             </div>

             <div className="ms-2 flex">
                 <img src='/'/>
                <p>New appointments</p>
             </div>
             <div className="ms-2 flex">
                 <img src='/'/>
                <p>Appointment history</p>
             </div>

             <div className="ms-2 flex">
                 <img src='/'/>
                <p>Cancelled appointments</p>
             </div>
             <div className="ms-2 flex">
                 <img src='/'/>
                <p>Reschuled appointments</p>
             </div>


            </div>


            </div>
        );

    
}

export default AppointmentCard