/* eslint-disable react/prop-types */
import searchIcon from "../../../../assets/searchIcon.svg";
import inboxIcon from "../../../../assets/clientinboxicon.svg";
//import  appointmentIcon  from '../../../../assets/clientappointmenticon.svg'
import notificationIcon from "../../../../assets/clientnotificationicon.svg";
import clientProfileIcon from "../../../../assets/clientProfileIcon.svg";
import menuIcon from "../../../../assets/menuIcon.svg";
import { CardType } from "../../../../utils/CardType";
import { openClientDrawer } from "./ClientNavDrawer";
import useGetClientUpdatedState from "../../hooks/client/useGetClientUpdatedState";
import { RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";
const ClientNavBar = (props) => {
  const navigate = useNavigate();
  const { clientUpdatedState } = useGetClientUpdatedState();
  return (
    <div className=" font-nunito bg-white flex place-items-center ps-5 w-full h-20 shadow-xl rounded-br-[30px] rounded-bl-[30px]">
      <div className="w-[50%]">
        <p className=" font-bold text-2xl">{`Welcome ${clientUpdatedState.data.userName}`}</p>
        <p className="font-bold hidden md:block">{"what will you like to see today ?"}</p>
      </div>

      <div className="  flex  md:hidden w-[50%] md:w-svw md:me-5  place-items-center justify-end   gap-10">
        <img
          className="w-[20px]  md:w-[40px]  h-[20px]
             "
          src={searchIcon}
          onPointerOver={() => {
            props.setIconOver(CardType.PROFILE);
          }}
        />

        <img
          className="w-[20px] me-4 h-[20px]"
          src={menuIcon}
          onClick={() => {
            openClientDrawer();
          }}
        />
      </div>

      <div className="  hidden  md:flex  w-[50%] md:w-svw md:me-5  place-items-center justify-end   gap-10">
        <div
          className="flex items-center gap-2 bg-orange-400 px-3 py-2 rounded"
          onClick={() => {
            navigate("/client/dashboard/refer");
          }}
        >
          <RefreshCw size={18} />
          <p>Refer and Earn</p>
        </div>

        <div className="justify-center">
          <img
            className="w-[20px]  md:w-[40px]  h-[20px]
             "
            src={searchIcon}
            onPointerOver={() => {
              //props.setIconOver(CardType.SEARCH)
            }}
          />
        </div>

        <div className="" onClick={() => {}}>
          <img
            className="w-[20px]  md:w-[40px]  h-[28px]
             "
            src={clientProfileIcon}
            onPointerOver={() => {
              props.setIconOver(CardType.PROFILE);

              // navigate("/client/profile")
            }}
          />
        </div>

        <div
          className="relative"
          onClick={() => {
            // navigate("/client/notification")
          }}
        >
          <img
            className="w-[20px]  md:w-[40px]  h-[20px]
             "
            src={notificationIcon}
            onPointerOver={() => {
              // props.setIconOver(CardType.NOTIFICATION)
            }}
          />
          <p className="absolute right-0 bottom-3 text-red-600 ">3</p>
        </div>

        {/*}  <div className=''>
            <img className='w-[20px]  md:w-[40px]  h-[20px]
             ' src={appointmentIcon}  onPointerOver={()=>{

                props.setIconOver(CardType.APPOINTMENT)
               
             }} />
            </div> */}

        {/*   <div className=''>
            <img className='w-[20px]  md:w-[40px]  h-[20px]
             ' src={notificationIcon}  
             onPointerOver={()=>{

                props.setIconOver(CardType.NOTIFICATION)
               
             }}  />
             
            </div>

            <div className=''>
            <img className='w-[20px]  md:w-[40px]  h-[20px]
             ' src={inboxIcon}
             onPointerOver={()=>{

                props.setIconOver(CardType.INBOX)
               
             }}
             
             />
            </div>
            
            <div className=''>
            <img className='w-[20px]  md:w-[40px]  h-[28px]
             ' src={clientProfileIcon} 
                onPointerOver={()=>{

               props.setIconOver(CardType.PROFILE)
              
            }} 
             
             />
            </div>
            
*/}
      </div>
    </div>
  );
};

export default ClientNavBar;
