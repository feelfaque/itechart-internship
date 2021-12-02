import "./CookbookTab.css";
import { AiTwotoneEye, AiFillHeart } from "react-icons/ai";
import { MdModeComment } from "react-icons/md";
import fruit from "../../../assets/images/fruit.jpg";

const cookbook = {
    views: "12000",
    name: "Fresh fruits",
    author: "John Doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna amet etiam risus aliquet sit vel",
    likes: 499,
    comments: 12
}
const CookbookTab = () => {
    return (
        <div className="cookbook-tab">
            <div className="cookbook-tab-stats">
                <AiTwotoneEye className="icon--grey"/><p className="tab-text">{cookbook.views} views</p>
            </div>
            <img src={fruit} alt="cookbook cover" className="cookbook-tab-photo"/>
            <div className="cookbook-tab-title">
                <h3 className="cookbook-tab-name">{cookbook.name}</h3>
                <h4 className="tab-text">{cookbook.author}</h4>
            </div>
            <p className="tab-text cookbook-tab--margin">{cookbook.description}</p>
            <div className="cookbook-tab-stats-list">
                <div className="cookbook-tab-stats">
                    <AiFillHeart className="icon--grey" />
                    <p className="tab-text">{cookbook.likes} likes</p>
                </div>
                <div className="cookbook-tab-stats">
                    <MdModeComment className="icon--grey" />
                    <p className="tab-text">{cookbook.comments} comments</p>
                </div>
            </div>
        </div>
    );
}

export default CookbookTab;