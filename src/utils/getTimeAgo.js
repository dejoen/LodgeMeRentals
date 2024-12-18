
 export default function getTimeAgo  (date) {

     const seconds = Math.floor((Date.now()-new Date(date).getTime())/1000)
     
     if(seconds < 60){
        return `${seconds} seconds ago`
     }else if(seconds < 3600){
        return `${Math.floor(seconds/60)} minutes ago` 
     }else if(seconds < 84600){
        return `${Math.floor(seconds/3600)} hours ago` 
     }else{
        let days = Math.floor(seconds/84600)
         
        if(days >=7 && (days/7 < 4) ){
          const weeks = days/7
            return `${Math.floor(weeks)} weeks ago` 
        }
        let weeks = days/7
        if(weeks >= 4){
            let months = Math.floor(weeks/4)
            if(months === 1)
            return `${months} month ago` 
           else
        return `${months} months ago` 
        }

        
        return `${Math.floor(seconds/84600)} days ago` 
     }

 }