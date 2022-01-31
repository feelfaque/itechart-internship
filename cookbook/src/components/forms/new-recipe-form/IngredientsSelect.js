import Label from "../labels/Label";

const IngredientsSelect = ({handleAdd}) => {
    return (
        <Label inputName="ingredients" text="Ingredients" margin>
            <input name="ingredients" id="ingredients" className="form-input" type="text"
                   onBlur={handleAdd}/>
        </Label>
    );
}

export default IngredientsSelect;