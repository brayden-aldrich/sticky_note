import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

function CreateIcon(){
    return(
        <div className="create-icon">
              <FontAwesomeIcon icon={ faCirclePlus } size="2xl" className="circle-plus"/>
        </div>    
    )
}

export default CreateIcon