import React, { useState } from "react";

export const AddCategory = ({ setcategories }) => { //argumento setcategories toma la referencia del otro componente
  const [InputValue, setInputValue] = useState("");
  const handleInputChange = (e) => { //funcion del formulario

    setInputValue(e.target.value); //set cambia el estado de InputValue
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //prevenir el comportamiento por default del refresh

    if (InputValue.trim().length > 2) { //el trim y el leng para no validar en inut vacios
      setcategories((cats) => [ InputValue,...cats]); //se usa el callback para hacer la referencia al categorie del otro componente
      setInputValue('') //Para que se reinicie la caja del input
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={InputValue} onChange={handleInputChange} />
    </form>
  );
};
