import Label from "../labels/Label";

const RecipesSelect = ({recipes}) => {

    return(
        <Label margin text="Recipes" inputName="recipes">
            <select name="recipes" required id="recipes" className="form-input">
                <option value=""> </option>
                {recipes && recipes.map(recipe => {
                    return <option key={recipe.id} id={recipe.id}
                                   value={recipe.id}>{recipe.title}</option>
                })}
            </select>
        </Label>
    );
}

export default RecipesSelect;