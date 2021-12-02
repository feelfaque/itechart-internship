import "./RecipeTab.css";
import {AiFillHeart, AiTwotoneEye} from "react-icons/ai";
import recipePic from "../../../assets/images/recipe-pic.jpg";
import {MdModeComment} from "react-icons/md";
import {FiMoreHorizontal} from "react-icons/fi";

const recipe = {
    name: "Fresh meat with potato and cheese ",
    views: "12000",
    author: "John Doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo non ac eros, velit dapibus consequat vestibulum sapien pharetra. Bibendum vel sollicitudin at purus egestas tincidunt. Vulputate ac, ullamcorper etiam interdum vitae semper. ",
    likes: 499,
    comments: 12
}
const RecipeTab = () => {
    return(
        <div className="recipe-tab">
            <img src={recipePic} alt="recipe cover" className="recipe-tab-photo"/>
            <div className="recipe-tab--column">
                <div className="recipe-tab--space-between">
                    <h3 className="recipe-tab-name">{recipe.name}</h3>
                    <h4 className="tab-text">{recipe.author}</h4>
                </div>
                <p className="tab-text recipe-tab--margin">{recipe.description}</p>
                <div className="recipe-tab--space-between">
                    <div className="recipe-tab-stats-list">
                        <div className="recipe-tab-stats">
                            <AiTwotoneEye className="icon"/><p className="tab-text">{recipe.views} views</p>
                        </div>
                        <div className="recipe-tab-stats">
                            <AiFillHeart className="icon" />
                            <p className="tab-text">{recipe.likes} likes</p>
                        </div>
                        <div className="recipe-tab-stats">
                            <MdModeComment className="icon" />
                            <p className="tab-text">{recipe.comments} comments</p>
                        </div>
                    </div>
                    <FiMoreHorizontal className="icon" />
                </div>
            </div>
        </div>
    );
}

export default RecipeTab;