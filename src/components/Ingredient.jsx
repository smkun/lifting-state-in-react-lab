// src/components/Ingredient.jsx
const Ingredient = ({ ingredient, onClick, buttonLabel, className }) => {
    return (
      <li style={{ backgroundColor: ingredient.color }} className={className}>
        {ingredient.name}
        <button onClick={onClick}>{buttonLabel}</button>
      </li>
    );
  };
  
  export default Ingredient;
  