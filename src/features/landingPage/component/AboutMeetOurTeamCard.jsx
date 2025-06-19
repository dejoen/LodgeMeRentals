const AboutMeetOurTeamCard = () => {
  const propertyImages = [
    {
      id: 1,
      src: "/img1.png",
      alt: "House",
      name: "Agwu Emmanuel",
      role: "Co Founder/ Chief Technology Officer",
    },
    {
      id: 2,
      src: "/img.png",
      alt: "Apartment",
      name: "Abideen Yinusa ",
      role: "Co Founder / UI/UX Lead ",
    },
    {
      id: 3,
      src: "/img3.png",
      alt: "Villa",
      name: "Abdulsamd Adegboyega ",
      role: "Co Founder/ Chief Marketing Officer ",
    },
    {
      id: 4,
      src: "/img2.png",
      alt: "Condo",
      name: "Izuchukwu Johnbosco",
      role: "Co Founder/ Front End Developer ",
    },
    {
      id: 5,
      src: "/img4.png",
      alt: "Duplex",
      name: "Peter ",
      role: "Chief Finance Officer ",
    },
    {
      id: 5,
      src: "/img6.png",
      alt: "Duplex",
      name: "Franklin Okolo C ",
      role: "Co Founder/ CEO ",
    },
  ];
  return (
    <div className="w-full  flex flex-wrap p-10 justify-center gap-6 ">
      {propertyImages.map((property) => (
        <div key={property.id} className="md:w-[290px] font-nunito font-bold flex flex-col items-cente gap-1">
          <img
            src={property.src}
            alt={property.alt}
            className=" object-cover rounded-lg border-2 border-gray-300 hover:border-blue-500 cursor-pointer"
          />
          <p className="text-center">
            <span>{property.name}</span>
          </p>
          <p className="text-center">
            <span>{property.role}</span>
          </p>
        </div>
      ))}{" "}
      <div></div>
    </div>
  );
};

export default AboutMeetOurTeamCard;
