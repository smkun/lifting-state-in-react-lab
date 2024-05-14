// src/components/BurgerStack.jsx
import Ingredient from './Ingredient';

const BurgerStack = ({ ingredients, removeFromBurger }) => {
  return (
    <ul>
      {ingredients.length === 0 ? (
        <li className="no-ingredients">No Ingredients</li>
      ) : (
        ingredients.map((ingredient, index) => (
          <Ingredient
            key={index}
            ingredient={ingredient}
            onClick={() => removeFromBurger(index)}
            buttonLabel="X"
            className={
              ['Beef Patty', 'Soy Patty', 'Black Bean Patty'].includes(ingredient.name) 
              ? 'dark-text' : ''
            }
          />
        ))
      )}
    </ul>
  );
};

export default BurgerStack;
