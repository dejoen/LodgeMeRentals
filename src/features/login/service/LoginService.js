import BaseURL from "../../../utils/BaseURL"

let  loginUser =  async (data) =>{

    return  fetch(`${BaseURL.URL}/loginUser`,{
           method:"POST",
           headers:{
              "Content-Type":'application/json'
           },
           body: JSON.stringify(data)
       })
  }

  export default loginUser