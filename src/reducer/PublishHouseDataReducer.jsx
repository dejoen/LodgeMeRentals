/* eslint-disable react-refresh/only-export-components */

export const allDataToPublishReducerInitialState = {
  HouseOverview: {
    houseName: "",
    houseAddress: "",
    houseType: "",
    state: "",
    localGovtArea: "",
  },
  AboutHouse: {
    description: "",
  },
  HouseFeatures: {
    totalNumberOfBedRooms: "",
    totalNumberOfToilets: "",
    houseFenced: false,
    runningWater: false,
    prepaidMeter: false,
    smartHomeFeatures: false,
    laundryRoom: false,
    airConditioning: false,
    parkingSpace: false,
    garbageDisposalService: false,
    adequateLigting: false,
    storageSpace: false,
    petFriendly: false,
    emergencyExits: false,
    secureWindowsAndDoors: false,
    securitySystems: false,
    backyardGardenOrBalcony: false,
    swimmingPoolGym: false,
    Gym: false,
    maintenanceSupport: false,
    safePlayAreaForChildren: false,
  },
  MediaUpload: {
    houseImagesBase64: [],
    houseVideosbase64: [],
  },
  RentalPrice: {
    monthlyOrYearlyRent: "",
    securityDeposit: "",
    applicationFee: "",
    maintenanceFee: "",
    petFees: "",
    rentalTerm: "",
    cleaningServices: "",
    totalDue: "",
  },
};

const AllDataToPublishReducer = (state, action) => {
  switch (action.TYPE) {
    case "Save": {
      return (state = action.payload);
    }

    default:
      return state;
  }
};

export default AllDataToPublishReducer;
