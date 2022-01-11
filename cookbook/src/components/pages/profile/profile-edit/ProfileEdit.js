import "./ProfileEdit.css";
import {useDispatch, useSelector} from "react-redux";
import {userEditData} from "./config";
import {passwordCheck, emailCheck} from "./config";
import {useState} from "react";
import {
    updateUserEmailStart,
    updateUserNameStart,
    updateUserPasswordStart
} from "../../../../redux/actions/user-data/userDataActions";


const ProfileEdit = () => {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.userDataReducer.user);
    const [inputs, setInputs] = useState();
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState("");

    const openInput = (e) => {
        setInputs(e.target.id);
    }
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const validateEmail = (value) => {
        if (!emailCheck.test(value)) {
            setError("Email isn't valid");
        } else {
            setInputs(null);
            setError("");
            dispatch(updateUserEmailStart(value));
            setInputValue("");
        }
    }

    const validatePassword = (value) => {
        if (!passwordCheck.test(value)) {
            setError("Password has to be 6 to 16 characters long and include letters and numbers");
        } else {
            setInputs(null);
            setError("");
            dispatch(updateUserPasswordStart(value));
            setInputValue("");
        }
    }
    const updateData = (e) => {
        switch (e.target.name) {
            case "name":
                setInputs(null);
                dispatch(updateUserNameStart(inputValue));
                setInputValue("")
                break;
            case "email":
                validateEmail(inputValue);
                break;
            case "password":
                validatePassword(inputValue);
                break;
            default: return;
        }
    }
    console.log(inputValue, error);

    return (
            <div className="wrapper profile-edit">
                <div className="profile-edit-card">
                    <h2 className="profile-edit-title">Personal information</h2>
                    <div className="profile-edit--flex">
                        <div className="profile-edit-list">
                            {userEditData.map((data,i) => <p key={i} className="profile-edit-text">{data.title}</p> )}
                        </div>
                        <div className="profile-edit-list" onDoubleClick={openInput}>
                            {userEditData.map((data, i) => inputs === data.text? <input key={i} type="text" name={data.text} onChange={handleChange} onBlur={updateData}/> : <p key={i} className="profile-edit-text" id={data.text}>{userData[data.text]}</p> )}
                        </div>
                        {error}
                    </div>
                </div>
            </div>
    );
}

export default ProfileEdit;