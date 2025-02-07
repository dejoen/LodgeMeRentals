import { CircleCheck, CircleX, X ,Clock3,  MapPin , Map} from 'lucide-react';
import { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// ... rest of your code
export default function AppointmentContainer() {
  const [viewType, setViewType] = useState('day');
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showMainModal, setShowMainModal] = useState(false);
  const [selectedAppointments, setSelectedAppointments] = useState(null);
  const [showMainModals, setShowMainModals] = useState(false);
  
  const [showRescheduleForm, setShowRescheduleForm] = useState(false);
  const [showCancelWarning, setShowCancelWarning] = useState(false);
  
  const daysOfWeek = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'];
  const weeks = ['WEEK 1', 'WEEK 2', 'WEEK 3', 'WEEK 4', 'WEEK 5', 'WEEK 6'];
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedWeek, setSelectedWeek] = useState(null);

  
  const handleDayClick = (day) => {
    setSelectedDay(day);
    setSelectedWeek(null); // Reset week selection
  };

  const handleWeekClick = (week) => {
    setSelectedWeek(week);
    setSelectedDay(null); // Reset day selection
  };
  // ... existing appointments object ...

  const handleCardClick = (appointment) => {
    setSelectedAppointment(appointment);
    setShowMainModal(true);
  };

  const handleCardClickCancel = (appointment) => {
    setSelectedAppointments(appointment);
    setShowMainModals(true);
  };

  const [successDetails, setSuccessDetails] = useState({
    message: '',
    subMessage: '',
    type: '',
    subMessages: '', // 'complete', 'reschedule', or 'cancel'
  });

  const handleComplete = () => {
      setSuccessDetails({
        message: 'Congratulations',
        subMessage: 'Your Appointment is Confirmed',
        subMessages: 'Your meeting is successfully scheduled. We’re excited to assist you!',
        type: 'complete',
      });
    { /*  setAppointments((prevAppointments) => ({
        ...prevAppointments,
        morning: prevAppointments.morning.filter(app => app !== selectedAppointment),
        afternoon: prevAppointments.afternoon.filter(app => app !== selectedAppointment),
        late: prevAppointments.late.filter(app => app !== selectedAppointment),
      })); */}
      setTimeout(() => {
        setSuccessDetails({ message: '', subMessage: '', type: '' });
        setShowMainModal(true);
      }, 3000);
    };

  const handleRescheduleSubmit = (e) => {
    e.preventDefault();
    setSuccessDetails({
      message: 'Appointment rescheduled successfully!',
      subMessage: 'New appointment details have been sent to the client',
      type: 'reschedule',
    });



    setTimeout(() => {
      setSuccessDetails({ message: '', subMessage: '', type: '' });
      setShowRescheduleForm(false);
      setShowMainModal(true);
    }, 3000);
  };

  const handleCancelConfirm = () => {
    setSuccessDetails({
      message: 'Appointment cancelled successfully!',
      subMessage: 'Cancellation notice has been sent to the client',
      type: 'cancel',
    });
    setTimeout(() => {
      setSuccessDetails({ message: '', subMessage: '', type: '' });
      setShowCancelWarning(false);
      setShowMainModal(true);
    }, 3000);
  };

  const handleReschedule = () => {
    setShowRescheduleForm(true);
    setShowMainModal(false);
  };
  const handleCancel = () => {
    setShowCancelWarning(true);
    setShowMainModal(false);
  };

  
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());





  const [viewTypes, setViewTypes] = useState('active'); // Default is active
// const [appointments, setAppointments] = useState({
//   morning: [],
//   afternoon: [],
//   late: [],
//   canceled: [], // Add canceled appointments a
// 
// rray
// });


const appointmentss = {
  morning: [
    {
      name: 'Abideen Yinusa',
      time: '12PM-1PM',
      location: 'Osogbo',
      image: '/avatar.png'
    },
    {
      name: 'Abideen Yinusa',
      time: '12PM-1PM',
      location: 'Osogbo',
      image: '/avatar.png'
    },
    {
      name: 'Abideen Yinusa',
      time: '12PM-1PM',
      location: 'Osogbo',
      image: '/avatar.png'
    },
    {
      name: 'Abideen Yinusa',
      time: '12PM-1PM',
      location: 'Osogbo',
      image: '/avatar.png'
    },
    
  ],
  
  afternoon: [
    
    {
      name: 'Abideen Yinusa',
      time: '12PM-1PM',
      location: 'Osogbo',
      image: '/avatar.png'
    },
    {
      name: 'Abideen Yinusa',
      time: '12PM-1PM',
      location: 'Osogbo',
      image: '/avatar.png'
    },
    {
      name: 'Abideen Yinusa',
      time: '12PM-1PM',
      location: 'Osogbo',
      image: '/avatar.png'
    },
    {
      name: 'Abideen Yinusa',
      time: '12PM-1PM',
      location: 'Osogbo',
      image: '/avatar.png'
    },
  ],

  late: [
    {
      name: 'Abideen Yinusa',
      time: '12PM-1PM',
      location: 'Osogbo',
      image: '/avatar.png'
    },
    {
      name: 'Abideen Yinusa',
      time: '12PM-1PM',
      location: 'Osogbo',
      image: '/avatar.png'
    },
    
  ],

  canceled: [
    {
      name: 'Abideen Yinusa',
      time: '12PM-1PM',
      location: 'Osogbo',
      image: '/avatar.png'
    },
    {
      name: 'Abideen Yinusa',
      time: '12PM-1PM',
      location: 'Osogbo',
      image: '/avatar.png'
    },
    {
      name: 'Abideen Yinusa',
      time: '12PM-1PM',
      location: 'Osogbo',
      image: '/avatar.png'
    },
    {
      name: 'Abideen Yinusa',
      time: '12PM-1PM',
      location: 'Osogbo',
      image: '/avatar.png'
    },
    {
      name: 'Abideen Yinusa',
      time: '12PM-1PM',
      location: 'Osogbo',
      image: '/avatar.png'
    },
    {
      name: 'Abideen Yinusa',
      time: '12PM-1PM',
      location: 'Osogbo',
      image: '/avatar.png'
    },
    {
      name: 'Abideen Yinusa',
      time: '12PM-1PM',
      location: 'Osogbo',
      image: '/avatar.png'
    },
    {
      name: 'Abideen Yinusa',
      time: '12PM-1PM',
      location: 'Osogbo',
      image: '/avatar.png'
    },
  ]
  }

  const [countdown, setCountdown] = useState('');
  const [reminderSent, setReminderSent] = useState(false);

  // Add countdown timer effect
  useEffect(() => {
    if (selectedAppointment?.appointmentDate) {
      const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = selectedAppointment.appointmentDate - now;
  
        if (distance < 0) {
          setCountdown('Appointment time passed');
          clearInterval(timer);
          return;
        }
       
      const hours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown(`${hours} hrs:${minutes} mins:${seconds} secs`);
    }, 1000);

    return () => clearInterval(timer);
  }
}, [selectedAppointment]);
  const handleReminder = (e) => {
    e.preventDefault();
    
    if (!("Notification" in window)) {
      alert("This browser doesn't support notifications");
      return;
    }

    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        // Show immediate notification
        new Notification("Appointment Reminder", {
          body: `You have an appointment with ${selectedAppointment.name} at ${selectedAppointment.time}`,
          icon: "/avatar.png" // Replace with your notification icon
        });

        setReminderSent(true);
        
        // Reset reminder status after 5 seconds
        setTimeout(() => {
          setReminderSent(false);
        }, 5000);
      }
    });
  };

  

  return (
    <div className="mx-auto p-3 md:ml-[22%] md:p-8 mt-[90px] w-[95%] md:w-[95%] h-fit rounded-2xl m-5 md:shadow-2xl shadow-black">
      <p className="text-lg">Manage and track your clients rental appointments</p>

      <div className='text-sm flex md:items-center md:flex-row flex-col gap-4 md:gap-6 mt-10'>
  <div
    onClick={() => setViewTypes('active')}
    className={`bg-green-600 text-white w-fit py-2 px-4 rounded-xl ${viewTypes === 'active' ? 'bg-button' : ''}`}
  >
    <button className='flex items-center gap-2'>
      Active Appointments <CircleCheck className='size-4' />
    </button>
  </div>
  <div
    onClick={() => setViewTypes('canceled')}
    className={`bg-red-600 text-white w-fit py-2 px-4 rounded-xl ${viewTypes === 'canceled' ? 'bg-red-700' : ''}`}
  >
    <button className='flex items-center gap-2'>
      Canceled Appointments <CircleX className='size-4' />
    </button>
  </div>
</div>


<div className='mt-10 flex items-center gap-8 md:gap-20'>
        <div className='border w-fit border-black rounded-xl py-1 px-4'>
          <input
            type="date"
            id="appointment-date"
            name="appointment-date"
            className="block w-full py-1 text-base border-gray-300 focus:outline-none focus:ring-0 focus:border-0 sm:text-sm rounded-md"
          />
        </div>
        <div className='text-sm flex items-center gap-4'>
          <button 
            onClick={() => setViewType('day')}
            className={`${viewType === 'day' ? 'bg-senderBg text-white' : 'bg-gray-100'} rounded-full text-center py-1 px-4`}
          >
            Day
          </button>
          <button 
            onClick={() => setViewType('week')}
            className={`${viewType === 'week' ? 'bg-senderBg text-white' : 'bg-gray-100'} rounded-full py-1 px-4`}
          >
            Week
          </button>
          </div>
      </div>
      <div className='flex items-center gap-3 justify-between md:w-[80%] mx-auto mt-6'>
        {viewType === 'day' ? (
          daysOfWeek.map((day, index) => (
            <button 
              key={index} 
              className={`text-sm md:text-lg ${day === selectedDay ? 'font-bold' : ''}`}
              onClick={() => handleDayClick(day)}
            >
              {day}
            </button>
          ))
        ) : (
          weeks.map((week, index) => (
            <button 
              key={index} 
              className={`text-sm md:text-lg ${week === selectedWeek ? 'font-bold' : ''}`}
              onClick={() => handleWeekClick(week)}
            >
              {week}
            </button>
              ))
            )}
          </div>
         

    

      {/* Morning Appointments */}
       {/* Morning Appointments */}
       {/* Conditionally Render Appointments Based on ViewType */}
<div className='mt-10'>
  
  {viewTypes === 'active' ? (
    <>
      {/* Morning Appointments */}
     
          <>
            <div className='flex items-center gap-8 md:gap-20 mt-5 md:mt-8'>
              <h3 className='font-bold text-lg md:text-xl'>Available Bookings</h3>
              <p className='text-sm text-gray-500'>Morning</p>
            </div>
            <div className='grid text-sm md:grid-cols-2 grid-cols-1 mx-auto w-[90%] md:w-[100%] lg:grid-cols-4 mt-5 gap-4'>
              {appointmentss.morning.map((appointment, index) => (
                <div key={index} onClick={() => handleCardClick(appointment)} className='flex justify-center bg-morningBg w-fit py-6 px-6 rounded-lg items-center gap-5 cursor-pointer'>
                  <img src={appointment.image} className='size-14 border-black rounded-full border-2' alt={appointment.name} />
                  <div>
                    <h3 className='font-bold text-lg'>{appointment.name}</h3>
                    <p className='flex items-center justify-between gap-8'>
                      <span>{appointment.time}</span>
                      <span className='text-sm'>{appointment.location}</span>
                    </p>
                  </div>
                </div>
              ))}
               </div>
          </>
       

      {/* Afternoon Appointments */}
      <div className='flex items-center gap-8 md:gap-20 mt-5 md:mt-8'>
        <h3 className='font-bold text-lg md:text-xl'>Available Bookings</h3>
        <p className='text-sm text-gray-500'>Afternoon</p>
      </div>
      <div className='grid md:grid-cols-2 text-sm grid-cols-1 mx-auto w-[90%] md:w-[100%] lg:grid-cols-4 mt-5 gap-4'>
        {appointmentss.afternoon.map((appointment, index) => (
          <div key={index} onClick={() => handleCardClick(appointment)} className='flex justify-center bg-afternooBg w-fit py-6 px-6 rounded-lg items-center gap-5 cursor-pointer'>
            <img src={appointment.image} className='size-14 border-black rounded-full border-2' alt={appointment.name} />
            <div>
              <h3 className='font-bold text-lg'>{appointment.name}</h3>
              <p className='flex items-center justify-between gap-8'>
                <span>{appointment.time}</span>
                <span className='text-sm'>{appointment.location}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Late Appointments */}
      <div className='flex items-center gap-8 md:gap-20 mt-5 md:mt-8'>
        <h3 className='font-bold text-lg md:text-xl'>Late Bookings</h3>
      </div>
      <div className='grid md:grid-cols-2 text-sm grid-cols-1 mx-auto w-[90%] md:w-[100%] lg:grid-cols-4 mt-5 gap-4'>
      {appointmentss.late.map((appointment, index) => (
          <div key={index} onClick={() => handleCardClick(appointment)} className='flex justify-center bg-otherBg w-fit py-6 px-6 rounded-lg items-center gap-5 cursor-pointer'>
            <img src={appointment.image} className='size-14 border-black rounded-full border-2' alt={appointment.name} />
            <div>
              <h3 className='font-bold text-lg'>{appointment.name}</h3>
              <p className='flex items-center justify-between gap-8'>
                <span>{appointment.time}</span>
                <span className='text-sm'>{appointment.location}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
     </>
  ) : (
    // Display Canceled Appointments
    <div className='grid md:grid-cols-2 text-sm grid-cols-1 mx-auto w-[90%] md:w-[100%] lg:grid-cols-4 mt-5 gap-4'>
      {appointmentss.canceled.map((appointment, index) => (
        <div key={index} onClick={() => handleCardClickCancel(appointment)} className='flex justify-center bg-otherBg w-fit py-6 px-6 rounded-lg items-center gap-5 cursor-pointer'>
          <img src={appointment.image} className='size-14 border-black rounded-full border-2' alt={appointment.name} />
          <div>
            <h3 className='font-bold text-lg'>{appointment.name}</h3>
            <p className='flex items-center justify-between gap-8'>
              <span>{appointment.time}</span>
              <span className='text-sm'>{appointment.location}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  )}
</div>

 {/* Main Modal Cancelled Appointment */}
{showMainModals && selectedAppointments && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50 overflow-y-scroll">
          <div className="bg-white w-full md:w-[80%]   h-fit transform transition-transform duration-300 ease-in-out animate-slide-in">
          <button onClick={() => setShowMainModals(false)} className=" md:p-2  p-1 rounded-full md:m-8 m-4 text-red-600 border border-red-600">  <X className='size-4 font-bold'/></button>
        
            <div className="w-[90%] md:w-[80%] mx-auto mt-6 md:mt-0">
              <div className=' flex justify-between items-center'>
<div className='flex items-center gap-4 '>
<img src={selectedAppointment.image} className="md:size-20 size-12  border-black rounded-full border-2" alt={selectedAppointment.name} />
            <div>  <h2 className="md:text-xl text-md font-bold text-center">{selectedAppointment.name}</h2>
              <p className="text-center md:text-base text-sm text-gray-600">{selectedAppointment.time} - {selectedAppointment.location}</p>
         </div>
</div>
<h3 className='md:text-lg text-sm'>House Type : <span className='font-bold'>School Hostel</span> </h3>

              </div>
              <div className='border border-gray-700 p-4 rounded-lg mt-8'>
               <div className=' flex md:flex-row flex-col justify-center  items-start gap-4 md:gap-14 md:w-[100%] mx-auto'>
               <div className='flex items-center gap-3'>
                <div className='border border-gray-500 w-fit rounded-xl p-1'>
                <Clock3 className='size-8'/>
                </div>
                <div>
                  <p className='text-sm text-gray-400'>Date & Time</p>
                  <p className='text-sm '>29-Feb-2025</p>
                  <p className='text-sm font-bold'>{countdown || 'Loading...'}</p>
      <a 
        href='#' 
        onClick={handleReminder}
        className={`underline text-sm ${
          reminderSent 
            ? 'text-gray-400 cursor-not-allowed' 
            : 'text-blue-700 hover:text-blue-900'
        }`}
      >
        {reminderSent ? 'Reminder Sent!' : 'Send Reminder'}
      </a>     </div>


                </div>

                <div className='flex items-center gap-3 '>
                <div className='border border-gray-500 w-fit rounded-xl p-1'>
                <MapPin className='size-8'/>
                </div>
                <div >
                  <p className='text-sm text-gray-400'>Location</p>
                  <p className='text-sm '>Off Ede Road, Sekona Area Road 10</p>
                    <a href='#' className='underline text-sm text-blue-600' >Change location </a>   
                  </div>


                </div>

                <div className='flex items-center gap-3'>
                <div className='border border-gray-500 w-fit rounded-xl p-1'>
                <Map className='size-8'/>
                </div>
                <div>
                <a href='#' >
                  <p className='text-sm text-gray-400'>Date & Time</p>
                  <p className='text-sm md:w-[70%]'>The link to a map goes here</p>
                  </a>  
                    </div>


                </div>

               </div>

              </div>
              <div className='mt-6'>
                <h3 className='font-bold text-lg'>General Information</h3>
<div className='flex flex-col md:flex-row gap-3 mt-4 md:w-[70%] md:justify-between' >

<div className='font-semibold text-sm flex flex-col gap-1' >
  <p className='text-gray-400'>MEETING TYPE</p>
  <p>Property Visit or Office Meeting</p>
  <p className='text-gray-400'>PROPERTY ADDRESS</p>
  <p>Road 12, Ifelodun Street, Osogbo, Osun State.</p>
</div>
<div className='font-semibold text-sm flex flex-col gap-1'>
<p className='text-gray-400'>CONTACT INFO</p>
<p>07063197220</p>
<p className='text-gray-400'>RENT AMOUNT</p>
<p>#500,000</p>
</div>

</div>

<h3 className='text-gray-400 font-semibold text-lg mt-6'>GALLERY</h3>

<div className='flex items-center gap-8 mt-3 w-[80%] md:flex-row flex-col '>
  <img src='/cgv.jpg' alt='' className='md:w-[400px] md:h-[230px] rounded-lg ' />
  <video controls className="md:w-[400px] h-auto rounded-lg"
  preload="auto"
  onError={(e) => console.error('Video Error:', e)}
>
    <source src="/video4.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
 
</div>
              </div>

                <div className="flex flex-col md:flex-row justify-end gap-8 my-12">
                  <p className=" font-bold text-lg">Cancelled By Client</p>
                    </div>
            </div>
          </div>
        </div>
      )}


   {/* Main Modal Active Appointment */}
   {showMainModal && selectedAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50 overflow-y-scroll">
          <div className="bg-white w-full md:w-[80%]   h-fit transform transition-transform duration-300 ease-in-out animate-slide-in">
          <button onClick={() => setShowMainModal(false)} className=" md:p-2  p-1 rounded-full md:m-8 m-4 text-red-600 border border-red-600">  <X className='size-4 font-bold'/></button>
        
            <div className="w-[90%] md:w-[80%] mx-auto mt-6 md:mt-0">
              <div className=' flex justify-between items-center'>
<div className='flex items-center gap-4 '>
<img src={selectedAppointment.image} className="md:size-20 size-12  border-black rounded-full border-2" alt={selectedAppointment.name} />
            <div>  <h2 className="md:text-xl text-md font-bold text-center">{selectedAppointment.name}</h2>
              <p className="text-center md:text-base text-sm text-gray-600">{selectedAppointment.time} - {selectedAppointment.location}</p>
         </div>
</div>
<h3 className='md:text-lg text-sm'>House Type : <span className='font-bold'>School Hostel</span> </h3>

              </div>
              <div className='border border-gray-700 p-4 rounded-lg mt-8'>
               <div className=' flex md:flex-row flex-col justify-center  items-start gap-4 md:gap-14 md:w-[100%] mx-auto'>
               <div className='flex items-center gap-3'>
                <div className='border border-gray-500 w-fit rounded-xl p-1'>
                <Clock3 className='size-8'/>
                </div>
                <div>
                  <p className='text-sm text-gray-400'>Date & Time</p>
                  <p className='text-sm '>29-Feb-2025</p>
                  <p className='text-sm font-bold'>{countdown || 'Loading...'}</p>
      <a 
        href='#' 
        onClick={handleReminder}
        className={`underline text-sm ${
          reminderSent 
            ? 'text-gray-400 cursor-not-allowed' 
            : 'text-blue-700 hover:text-blue-900'
        }`}
      >
        {reminderSent ? 'Reminder Sent!' : 'Send Reminder'}
      </a>     </div>


                </div>

                <div className='flex items-center gap-3 '>
                <div className='border border-gray-500 w-fit rounded-xl p-1'>
                <MapPin className='size-8'/>
                </div>
                <div >
                  <p className='text-sm text-gray-400'>Location</p>
                  <p className='text-sm '>Off Ede Road, Sekona Area Road 10</p>
                    <a href='#' className='underline text-sm text-blue-600' >Change location </a>   
                  </div>


                </div>

                <div className='flex items-center gap-3'>
                <div className='border border-gray-500 w-fit rounded-xl p-1'>
                <Map className='size-8'/>
                </div>
                <div>
                <a href='#' >
                  <p className='text-sm text-gray-400'>Date & Time</p>
                  <p className='text-sm md:w-[70%]'>The link to a map goes here</p>
                  </a>  
                    </div>


                </div>

               </div>

              </div>
              <div className='mt-6'>
                <h3 className='font-bold text-lg'>General Information</h3>
<div className='flex flex-col md:flex-row gap-3 mt-4 md:w-[70%] md:justify-between' >

<div className='font-semibold text-sm flex flex-col gap-1' >
  <p className='text-gray-400'>MEETING TYPE</p>
  <p>Property Visit or Office Meeting</p>
  <p className='text-gray-400'>PROPERTY ADDRESS</p>
  <p>Road 12, Ifelodun Street, Osogbo, Osun State.</p>
</div>
<div className='font-semibold text-sm flex flex-col gap-1'>
<p className='text-gray-400'>CONTACT INFO</p>
<p>07063197220</p>
<p className='text-gray-400'>RENT AMOUNT</p>
<p>#500,000</p>
</div>

</div>

<h3 className='text-gray-400 font-semibold text-lg mt-6'>GALLERY</h3>

<div className='flex items-center gap-8 mt-3 w-[80%] md:flex-row flex-col '>
  <img src='/cgv.jpg' alt='' className='md:w-[400px] md:h-[230px] rounded-lg ' />
  <video controls className="md:w-[400px] h-auto rounded-lg"
  preload="auto"
  onError={(e) => console.error('Video Error:', e)}
>
    <source src="/video4.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
 
</div>
              </div>

              <button onClick={handleComplete} className="bg-button text-white py-2 rounded-lg w-[80%] mt-12 md:w-[30%]">Mark As Completed</button>              
                   <div className="flex flex-col md:flex-row justify-end gap-8 my-12">
             <button onClick={handleReschedule} className="bg-black text-white py-2 rounded-lg w-[20%]">Reschedule</button>
                <button onClick={handleCancel} className="bg-red-600 text-white py-2 rounded-lg w-[25%]">Cancel Appointment</button>
                    </div>
            </div>
          </div>
        </div>
      )}
 {/* Reschedule Form */}
 {showRescheduleForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center z-50">
          <div className="bg-white w-full  rounded-lg md:w-[40%] my-[1%]  overflow-y-scroll transform transition-transform duration-300 ease-in-out animate-slide-in">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4 text-center">Change Date and Time</h2>
              <form onSubmit={handleRescheduleSubmit}>
              
              <div className="flex gap-16 md:flex-row justify-center">
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      inline
      className="form-input"
    />
    <DatePicker
      selected={selectedTime}
      onChange={(time) => setSelectedTime(time)}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={30}
      timeCaption="Time"
      dateFormat="h:mm aa"
      inline
      className="form-input"
    />
  </div>
 <div className='w-[85%] mx-auto flex flex-col gap-3'>
 <div className="mt-4 px-4 py-2 border rounded-lg border-gray-500 text-sm">
    
    <div className="flex gap-6 justify-between">
      <div>
        <span className="text-gray-600">Date: </span>
        <span className="font-medium">
          {startDate ? startDate.toLocaleDateString() : 'Not selected'}
        </span>
      </div>
      <div>
        <span className="text-gray-600">Time: </span>
        <span className="font-medium">
          {selectedTime ? selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Not selected'}
        </span>
      </div>
    </div>
  </div>

<div className='flex flex-col gap-3 text-sm'>
<h2 className="text-xl font-bold mb-4 text-center">Change Date and Time</h2>
       
<input type='email' placeholder='Email Address' className=' outline-none px-4 py-2 border rounded-lg border-gray-500 text-sm' />
<input type='text' placeholder='Map Link (Optional)' className=' outline-none px-4 py-2 border rounded-lg border-gray-500 text-sm' />

</div>
<div className="flex gap-3 mt-4">
                  <button type="submit" className="bg-button text-white py-2 px-4 rounded-lg flex-1">Submit</button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowRescheduleForm(false);
                      setShowMainModal(true);
                    }}
                    className="bg-black py-2 px-4 text-white rounded-lg flex-1"
                  >
                    Back
                  </button>
                </div>
 </div>

               
              </form>
            </div>
          </div>
        </div>
      )}


      {/* Cancel Warning */}
      {showCancelWarning && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center z-50">
          <div className="bg-white w-full md:w-[40%] h-fit flex py-16 rounded-lg  justify-center items-center mt-[8%]  transform transition-transform duration-300 ease-in-out animate-slide-in">
            <div className="p-6 text-center flex flex-col gap-4 justify-center items-center w-[80%] mx-auto">
              <h2 className='text-xl font-semibold'>Cancel Appointment</h2>
              <h2 className="text-lg f ">Are You Sure You Want to Cancel This Appointment?</h2>
             <p>This action will remove your scheduled meeting and free up the time slot for others.</p>
              <div className="flex gap-8 mt-10">
                <button onClick={handleCancelConfirm} className="bg-green-600 md:w-[20%] text-white py-2 px-4 rounded-lg flex-1">Proceed</button>
                <button
                  onClick={() => {
                    setShowCancelWarning(false);
                    setShowMainModal(true);
                  }}
                  className="bg-black md:w-[40%] py-2 px-4 md:px-14 text-white rounded-lg flex items-center justify-center "
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
  {/* Success Message */}
  {successDetails.message && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-8 rounded-lg animate-fade-in max-w-md w-full mx-4">
      <div className="flex flex-col items-center text-center">
        <div className="mb-6">
          <img 
            src={successDetails.type === 'cancel' 
              ? '/cancel.png'  // Replace with your cancel image path
              : '/succes.png' // Replace with your success image path
            } 
            alt={successDetails.type === 'cancel' ? 'Cancelled' : 'Success'}
            className="size-24 object-contain"
          />
        </div>

        <h3 className={`text-2xl font-bold mb-2 ${
          successDetails.type === 'cancel' 
            ? 'text-red-600' 
            : 'text-green-600'
        }`}>
          {successDetails.message}
        </h3>
        
        <p className=" text-lg mb-2">
          {successDetails.subMessage}
        </p>
        <p className=" text-sm mb-6">
          {successDetails.subMessages}
        </p>
        
      </div>
    </div>
  </div>
)}


    </div>
  );
}