
export default  (date) =>{
    const today = new Date()

    return date.getDate() === today.getDate()-1 && date.getMonth() && date.getFullYear() === today.getFullYear()
}