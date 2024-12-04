import  { string } from "prop-types"


const  UserProfilePostsCard = ({name,address,houseImage}) => {
    return(
        <div className=" font-nunito w-[80%] md:max-w-[230px] min-h-[230px] bg-white shadow shadow-black  rounded-md p-2 mb-4 mt-3">
          
          <div className="bg-[#D9D9D9] w-full h-[150px]  rounded-md  object-center object-cover">
              <img className={`${(!houseImage || houseImage === '') ? 'hidden' :'block'} h-[100%] w-[100%] rounded-md `} src= {houseImage} />
          </div>
          <div>
            <p>{name}</p>
            <p>Address:<span className="text-wrap text-ellipsis">{address}</span></p>
            <p className="bg-[#BB7655] text-center p-1 mb-2 rounded-md text-white">Rented Out</p>
            <p className="bg-[#AB0F13] text-center p-1 rounded-md text-white">Remove</p>
          </div>

        </div>
    )
}

UserProfilePostsCard.propTypes = {
  name:string,
  address:string,
  houseImage:String
}

export default UserProfilePostsCard