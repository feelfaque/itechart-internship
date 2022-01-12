import "./IngredientsList.css";
import {AiOutlineClose} from "react-icons/ai";
import {useSelector, useDispatch} from "react-redux";
import {deleteIngredient} from "../../../../redux/actions/new-recipe/newRecipeActions";

const IngredientsList = () => {
    const dispatch = useDispatch();
    const ingredients = useSelector(state => state.newRecipeReducer.ingredients? state.newRecipeReducer.ingredients:"");
    const handleDelete = (e) => {
        dispatch(deleteIngredient(e.target.id))
    }

    return (
        <ul>
            {
                ingredients? ingredients.map((item, i) => {
                return <li key={i} className="ingredients-item"><span>{item}</span> <AiOutlineClose id={i} onClick={handleDelete} className="delete-ingredient-button"/></li>
            }): ""
            }
        </ul>
    );
}

export default IngredientsList;