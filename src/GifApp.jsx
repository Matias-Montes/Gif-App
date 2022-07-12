import React, { useState } from "react";

import { AddCategory, GifGrid } from "./components";




export const GifApp = () => {
  const [categories, setCategories] = useState([]);
  const [numberValue, setNumberValue] = useState()

  const handleNumberChange = ({ target })=>{
      setNumberValue(target.value);        
  }

  const handleAddCategory = (value) => {
    setCategories([value, ...categories]);
  }; 

  const handleRemoveAll = () => {
    setCategories([]);
  };

  const handleRemoveOne = index => {
    const value = [...categories];
    value.splice(index, 1);
    setCategories(value);
  };

  
  return (
    <>
      {/* Titulo */}
      <div className="div_container">
      <h1>GifApp</h1>
      
      <button className="button" onClick={()=>{handleRemoveAll()}}>Eliminar Busquedas</button>
      
      {/* Input */}
      <AddCategory addCategory={handleAddCategory} />
      <div>
      <input
            className="div_container"
            type="number"
            placeholder='¿Cuantos? 1?'
            min="1"
            max="50"
            value={numberValue}
            onChange={handleNumberChange}
        ></input>
      <p>Minimo 1, Maximo 50</p>
      </div>
      {/* Listado de Gif */}
      </div>
      {
      categories.map((category) => (
        <>
        <button className="button" onClick={handleRemoveOne}>eliminar {category}</button>
        <GifGrid key={category} category={category} quantity={numberValue} />
        </>
      ))
      }
    </>
  );
};
