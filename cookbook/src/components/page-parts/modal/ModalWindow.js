import "./ModalWindow.css";
import {AiOutlineClose} from "react-icons/ai";
import ModalOverlay from "./ModalOverlay";
import {useDispatch} from "react-redux";
import {closeModalAction} from "../../../redux/actions/modal-window/modalWindowActions";
import {resetRecipeData} from "../../../redux/actions/new-recipe/newRecipeActions";
import {resetImageData} from "../../../redux/actions/image-storage/imageStorageActions";

const ModalWindow = ({titleText, children}) => {
    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch(closeModalAction);
        dispatch(resetRecipeData);
        dispatch(resetImageData);
    }
    return(

        <div className="modal-window--container">
            <ModalOverlay />

            <div className="modal">
                <button className="close-modal-button" onClick={closeModal}>
                    <AiOutlineClose className="modal-close-button--icon"/>
                </button>

                <div className="modal-window">
                    <h2 className="modal-window-title"> Create new {titleText}</h2>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default ModalWindow;