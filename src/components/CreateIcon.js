import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Modal from './CreateNoteModal';


function CreateIcon(props){
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    function createNote(){
        setModalIsOpen(true);
    }


    function cancelEvent(){
        setModalIsOpen(false);
    }

    function submitEvent(e){
        setModalIsOpen(false);
        props.submitText(e);
    }


    return(
        <div className="create-icon">   
              <FontAwesomeIcon icon={ faCirclePlus } size="2xl" className="circle-plus" onClick={ createNote }/>
              {modalIsOpen && <Modal onCancel={cancelEvent} onSubmit={submitEvent}/>}
        </div>    

    )
}

export default CreateIcon;