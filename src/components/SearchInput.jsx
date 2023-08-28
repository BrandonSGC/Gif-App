import { useState } from "react";

export const SearchInput = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    // Read the input value.
    function getInputValue(evt) {
        setInputValue(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        // Validate input.
        if (inputValue.trim().length < 1) return;
        
        // Insert the Category into the Categories Array.
        setCategories((categories) => {
            // Validate category already in categories
            if (categories.find( element => element.toLowerCase() == inputValue.toLowerCase())) {
                alert('Debes de ingresar una categoría que no hayas introducido antes!')
                return categories;
            }
            return [inputValue, ...categories];
        });

        // Clean the input.
        setInputValue('');
    }

  return (
    <div className="search">
        <form onSubmit={handleSubmit}>
            <input 
                className="search__input" 
                type="text" 
                onChange={getInputValue} 
                placeholder="Example: Soccer"
                value={inputValue}
            />
        </form>
    </div>
  )
}