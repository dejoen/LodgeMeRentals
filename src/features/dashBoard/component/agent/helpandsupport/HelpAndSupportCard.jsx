import PropTypes from "prop-types"


const HelpAndSupportCard = ({title,body}) => {
    return <div className="max-w-[250px] h-[150px] border rounded-md flex flex-col justify-center place-items-center gap-2 p-2 shadow-black shadow-sm ">
       <p className="text-[#6A3921]">{title}</p>
       <p>{body}</p>
    </div>
}

HelpAndSupportCard.propTypes = {
    title:PropTypes.string,
    body:PropTypes.string
}

export default HelpAndSupportCard