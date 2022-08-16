import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";


function CreateIcon(){
    // const [ modalIsOpen, setModalIsOpen ] = useState(false);

    // function createNote(){

    // }

    return(
        <div className="create-icon">
              <FontAwesomeIcon icon={ faCirclePlus } size="2xl" className="circle-plus" />
        </div>    
    )
}

export default CreateIcon;