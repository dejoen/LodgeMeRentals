import slideImage from "../../../../src/assets/aboutslideimage1.svg";

const AboutImageSliderContainer = () => {
  return (
    <div className="flex justify-center md:flex-row flex-col md:w-full w-[90%] mx-auto gap-6 ">
      <div>
        <img src={slideImage} className="md:w-[329px] " />
      </div>
      <div>
        <img src={slideImage} className="md:w-[329px]" />
      </div>

      <div>
        <img src={slideImage} className="md:w-[329px]" />
      </div>
    </div>
  );
};

export default AboutImageSliderContainer;
