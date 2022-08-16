import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useState } from "react";
import Stickynote from "./Stickynote";



function CreateNote(props){
    const [note, setNote] = useState('')
    
    function setText(event){
        setNote(event.target.value);   
    }

    function submitText(){
        props.onSubmit(note)
    }
    return(
        <div className="modal">
            <div className="modal-backdrop"></div>
            <div className="create-note-modal">
                <div className="modal-dialog">
                    <p>Type note below</p>
                    <textarea className="text-input" value={note} onChange={setText}/>
                    <div className="modal-icons">
                        <FontAwesomeIcon icon={ faCircleXmark } size="xl" id="model-cancel" onClick={props.onCancel}/>
                        <FontAwesomeIcon icon={ faCircleCheck } size="xl" id="model-submit" onClick={submitText}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateNote;