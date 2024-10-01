  import videoUploadIcon  from '../../../../../assets/videoUploadIcon.svg'

  import photoUploadIcon  from '../../../../../assets/cameraUploadIcon.svg'
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import useMediaUploadData from '../../../hooks/useMediaUploadData';

const  MediaUpload = () => {
  const  {getVideoFiles} = useMediaUploadData()

    const navigate = useNavigate()
    let  getVideoFilesRef = useRef()
    let  getPictureFilesRef = useRef()
    
    const [uploadData,setUpdateData] = useState({
        video:{
           videoTitle:[],
           videoBase64:[],
           videoSize:''
        },
        pictures:{
         pictureTitle:[],
         pictureBase64:[],
         pictureSize:''
      }
   })

  

  

    

    return (
        <div className="font-nunito w-full  h-dvh  md:min-h-[85%]   mt-20  bg-white z-20 rounded-md shadow-md overflow-y-auto  pb-10">

        <p className="font-bold ms-5 mt-8 text-2xl">Media Upload</p>
    


        <div className=" h-[75%]  flex flex-col  overflow-y-auto overflow-x-hidden">
      <p className="text-justify p-2">To attract potential renters, upload high-quality images and videos of your property. Showcase key areas such as the living room, kitchen, bedrooms, and outdoor spaces. These media files help users visualize the space and make informed decisions. Ensure your files are clear and accurately represent the property to give your listing the best chance of standing out.</p>


   <div className='w-full flex flex-col gap-8'>

    <div className="w-[300px] md:w-full  m-8 flex flex-col gap-5  ">
        <p className="mb-1"><span className="font-bold">Video Tour:</span> Upload a video tour of the house</p>
        
        <div className='w-full flex flex-wrap-reverse place-items-center justify-center gap-5'>
            <div className='md:mt-8 ms-3 '  onClick={()=>{
               getVideoFilesRef.current.click()
            }} > 
              <img src={videoUploadIcon}/>
              <input type='file'  className='w-1/2 mt-2 hidden '  ref={getVideoFilesRef} multiple
               accept="video/*" onChange={async (e)=>{
                  const files=  e.target.files
               
                getVideoFiles(files).then(result=>{
                  alert(JSON.stringify(result))
                  setUpdateData((prevState)=>{
                     return{
                        ...prevState,
                        video:{
                           videoBase64:result,
                           videoTitle:result
                        }
                     }
                  })
            }).catch(err=>alert(err))

               }} />
       
        {
         ( uploadData.video.videoTitle && uploadData.video.videoTitle.length>0) && <p className='w-[10px] text-ellipsis text-wrap  '>{uploadData.video.videoTitle[0].fileName+"....."}</p>
        }
             
            </div>

            <div className='w-full md:w-[400px] flex-shrink  md:ms-8'>
                
              <div className='mt-3'>

                 <p className='font-bold '>Video Upload Options:</p>
                 <ul className='w-[450px] list-item list-disc space-y-3'>
                    <li>
                    Upload video directly from your device. 
                    </li>
                    <li>Supported formats: MP4, MOV, AVI. </li>
                    <li>Maximum video size: 50 MB.</li>
                 </ul>
                </div> 

                <div className='mt-3'>

<p className='font-bold'>GuideLines:</p>
<ul className='w-[450px]  list-disc space-y-3 '>
   <li>
    Ensure the video is clear and stable.   </li>
   <li>Highlight key features of the property (e.g., living spaces, bedrooms, amenities). 
   </li>
   <li>Show different angles to provide a complete view of each room</li>
</ul>
</div> 

 </div>
 
     
 <div className='w-full md:w-[400px] flex-shrink  md:ms-8'>

 <div className='mt-3'>

                 <p className='font-bold '>Tips: </p>
                 <ul className='w-full list-item list-disc space-y-3'>
                    <li>
                    Use natural light when filming to enhance the visual appeal. 
                    </li>
                    <li>Keep the camera steady; consider using a tripod.  </li>
                    <li>Give a brief narration or background music to engage viewers..</li>
                 </ul>
                </div> 

                <div className='mt-3'>

<p className='font-bold '>Notes:  </p>
<ul className='w-full list-item list-disc space-y-3'>
   <li>
   Videos should accurately represent the property to avoid misleading potential renters.
   </li>
   <li> Ensure compliance with platform guidelines regarding video content. </li>
 
</ul>
</div>
</div> 




            
        </div>
        



     

        
    </div>


    <div className="w-full md:w-full  m-8 flex flex-col gap-5  ">
        <p className="me-10"><span className="font-bold">Photo Upload:</span>  High-quality images of the property’s interior and exterior.</p>
        
        <div className='w-[300px] md:w-full flex flex-wrap-reverse place-items-center justify-center gap-5'>
            <div className='md:mt-8 ms-2 ' onClick={()=>{
               getPictureFilesRef.current.click()
            }}> 
              <img src={photoUploadIcon}/>
              <input type='file'  className='w-1/2 mt-2  hidden '   multiple
               accept="images/*"  ref={getPictureFilesRef }   onChange={async (e)=>{
                  const files=  e.target.files
               
                getVideoFiles(files).then(result=>{
                  alert(JSON.stringify(result.length))
                  setUpdateData((prevState)=>{
                     return{
                        ...prevState,
                        pictures:{
                           pictureBase64:result,
                           pictureTitle:result
                        }
                     }
                  })
            }).catch(err=>alert(err))

               }} />
                 {
         ( uploadData.pictures.pictureTitle && uploadData.pictures.pictureTitle.length>0) && <p className='w-[10px] text-ellipsis text-wrap  '>{uploadData.pictures.pictureTitle[0].fileName+"....."}</p>
        }
          
            </div>

            <div className='w-full  md:w-[400px] flex flex-shrink   md:ms-8'>
                
              <div className='mt-3  '>

                 <p className='font-bold '>Photo Upload Options:</p>
                 <p className='w-full text-justify p-3' >
                     Choose high-quality images to showcase the property’s key areas such as the living room, bedrooms, kitchen, bathrooms, and outdoor spaces.
                    </p>
                
                </div> 

           

 </div>
 
     
 <div className='w-full md:w-[400px] flex-shrink  md:ms-8'>

 <div className='mt-3'>

                 <p className='font-bold '>Tips for Best Results: </p>
                 <ul className='w-full list-item list-disc space-y-3'>
                    <li>
                    Take wide-angle shots to capture the full room. 
                    </li>
                    <li>Include photos of every room and exterior shots to give potential renters a complete view. </li>
                    
                 </ul>
                </div> 

                
</div> 




            
        </div>
        



     

        
    </div>
   </div>

        </div>

<div className="w-full flex justify-end place-items-center pe-4 h-[25%] gap-5">
     <p className="bg-[#BB7655] hover:shadow-black hover:shadow-md  p-3 w-[100px] text-white text-center rounded-lg" >Save</p>
     <p className="bg-[#F1E9E9] hover:shadow-black hover:shadow-md p-3 w-[100px] text-black text-center rounded-lg"  onClick={()=>{
         navigate('/agent/dashboard/publish-home/mediaUpload')
     }}>Next</p>
</div>
       
     
      </div>
    );
}


export default MediaUpload 