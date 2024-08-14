  import slideImage  from "../../../../src/assets/aboutslideimage1.svg"

const AboutImageSliderContainer = () =>{

    return(
<div className="mx-auto w-full p-4 flex place-items-center justify-center  flex-col md:flex-row gap-4">
<div className="w-[329px]">

  <img src={slideImage}/>
</div>
<div className="w-[329px]">

  <img src={slideImage}/>
</div>

<div className="w-[329px]">

  <img src={slideImage}/>
</div>

  
</div>
    )
}

export default AboutImageSliderContainer