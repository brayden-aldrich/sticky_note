import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function CreateNote(props){
    return(
        <div className="modal">
            <div className="modal-backdrop"></div>
            <div className="create-note-modal">
                <div className="modal-dialog">
                    <p>Type note below</p>
                    <textarea className="text-input"></textarea>
                    <div className="modal-icons">
                        <FontAwesomeIcon icon={ faCircleXmark } size="xl" id="model-cancel"/>
                        <FontAwesomeIcon icon={ faCircleCheck } size="xl" id="model-submit"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateNote;